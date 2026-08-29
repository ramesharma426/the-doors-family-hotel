import { Injectable } from '@nestjs/common';
import { MENU_PANELS } from './menu.data';
import { MENU_PANELS_NE } from './menu.ne.data';
import { MenuPanel } from './menu.types';

@Injectable()
export class MenuService {
  getPanels(locale: 'en' | 'ne' = 'en'): MenuPanel[] {
    return locale === 'ne' ? MENU_PANELS_NE : MENU_PANELS;
  }
}
