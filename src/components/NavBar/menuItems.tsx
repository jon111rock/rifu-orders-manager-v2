import { ReactElement } from "react";

type MenuItem = {
  name: string;
  link: string;
  logo: ReactElement;
};

const menuItems: MenuItem[] = [
  {
    name: "Orders",
    link: "/",
    logo: <i className="bx bx-book-content bx-sm"></i>,
  },
  { name: "Items", link: "/", logo: <i className="bx bx-cake bx-sm"></i> },
];

export default menuItems;
