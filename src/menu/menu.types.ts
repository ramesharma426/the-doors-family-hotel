export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategoryBlock {
  type: 'category';
  title: string;
  items: MenuItem[];
}

export interface MenuTableBlock {
  type: 'table';
  title: string;
  wide: true;
  columns: string[];
  rows: { label: string; values: string[] }[];
}

export type MenuBlock = MenuCategoryBlock | MenuTableBlock;

export interface MenuPanel {
  key: 'food' | 'cafe' | 'bar';
  label: string;
  active?: boolean;
  blocks: MenuBlock[];
}
