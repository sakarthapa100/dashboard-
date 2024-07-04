import { IconType } from 'react-icons';

export interface MenuItem {
  title: string;
  path: string;
  icon: IconType;
}

export interface MenuCategory {
  title: string;
  list: MenuItem[];
}
