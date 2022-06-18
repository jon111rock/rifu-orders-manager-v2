import { ReactElement } from "react";

type MenuItem = {
  name: string;
  link: string;
  logo: ReactElement;
};

const menuItems: MenuItem[] = [
  {
    name: "Orders",
    link: "/orders",
    logo: <i className="bx bx-book-content bx-sm"></i>,
  },
  { name: "Items", link: "/items", logo: <i className="bx bx-cake bx-sm"></i> },
];

export default menuItems;
