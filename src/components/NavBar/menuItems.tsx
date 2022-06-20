import { ReactElement } from "react";

type MenuItem = {
  name: string;
  link: string;
  logo: ReactElement;
};

const menuItems: MenuItem[] = [
  {
    name: "訂單",
    link: "/orders",
    logo: <i className="bx bx-book-content bx-sm"></i>,
  },
  { name: "產品", link: "/items", logo: <i className="bx bx-cake bx-sm"></i> },
];

export default menuItems;
