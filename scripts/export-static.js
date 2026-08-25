"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
const fs_1 = require("fs");
const path_1 = require("path");
const http = __importStar(require("http"));
const OUT_DIR = (0, path_1.join)(__dirname, '..', 'docs');
const ROUTES = ['/'];
async function fetchBody(url) {
    return new Promise((resolve, reject) => {
        http
            .get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve(data));
        })
            .on('error', reject);
    });
}
async function main() {
    if ((0, fs_1.existsSync)(OUT_DIR))
        (0, fs_1.rmSync)(OUT_DIR, { recursive: true, force: true });
    (0, fs_1.mkdirSync)(OUT_DIR, { recursive: true });
    const app = await (0, main_1.createApp)();
    await app.listen(0);
    const address = app.getHttpServer().address();
    const port = typeof address === 'object' && address ? address.port : 0;
    const base = `http://127.0.0.1:${port}`;
    for (const route of ROUTES) {
        const html = await fetchBody(base + route);
        const fileName = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`;
        (0, fs_1.writeFileSync)((0, path_1.join)(OUT_DIR, fileName), html, 'utf8');
        console.log(`wrote ${fileName}`);
    }
    await app.close();
    (0, fs_1.cpSync)((0, path_1.join)(__dirname, '..', 'public'), OUT_DIR, { recursive: true });
    console.log(`copied public/ assets into ${OUT_DIR}`);
    console.log(`\nStatic export complete: ${OUT_DIR}`);
    process.exit(0);
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=export-static.js.map