type NavItem = {
  title: string;
  path: string;
};

export const navItems: NavItem[] = [
  { title: "Транзакції", path: "/transactions" },
  { title: "Валюта", path: "/currency" },
  { title: "Каса", path: "/paydesk" },
  { title: "Клієнти", path: "/clients" },
];
