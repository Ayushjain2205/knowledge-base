import React from "react";
import { HeaderResponsive } from "./HeaderResponsive";

const Layout = ({ children }) => {
  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/create",
      label: "Create",
    },
    {
      link: "/bots",
      label: "Bots",
    },
  ];

  return (
    <div>
      <HeaderResponsive links={links} />
      <div className="my-6 mx-auto w-[800px]">{children}</div>
    </div>
  );
};

export default Layout;
