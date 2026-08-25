import { Controller, Get, Render } from '@nestjs/common';
import { MenuService } from './menu/menu.service';
import { SITE } from './content/site.config';

@Controller()
export class AppController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  @Render('index')
  home() {
    return {
      site: SITE,
      jsonLd: SITE.jsonLdRaw,
      menuPanels: this.menuService.getPanels(),
    };
  }
}
