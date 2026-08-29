import { Controller, Get, Render } from '@nestjs/common';
import { MenuService } from './menu/menu.service';
import { SITE } from './content/site.config';
import { SITE_NE } from './content/site.ne.config';

@Controller()
export class AppController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  @Render('index')
  home() {
    return {
      site: SITE,
      jsonLd: SITE.jsonLdRaw,
      menuPanels: this.menuService.getPanels('en'),
    };
  }

  @Get('ne')
  @Render('index-ne')
  homeNe() {
    return {
      site: SITE_NE,
      jsonLd: SITE_NE.jsonLdRaw,
      menuPanels: this.menuService.getPanels('ne'),
    };
  }
}
