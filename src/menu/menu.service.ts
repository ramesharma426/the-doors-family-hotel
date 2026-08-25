import { Injectable } from '@nestjs/common';
import { MENU_PANELS } from './menu.data';
import { MenuPanel } from './menu.types';

@Injectable()
export class MenuService {
  getPanels(): MenuPanel[] {
    return MENU_PANELS;
  }
}
