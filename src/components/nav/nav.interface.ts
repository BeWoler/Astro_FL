export interface INavItem {
  title: string;
  href: string;
}

export interface INavProps {
  links: Array<INavItem>;
}
