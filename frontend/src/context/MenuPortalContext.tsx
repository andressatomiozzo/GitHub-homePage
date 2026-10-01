import React from "react";

export const MenuPortalContext = React.createContext<{
  portalRef: React.RefObject<HTMLDivElement | null>;
} | null>(null);

export const useMenuPortal = () => {
  const menuPortal = React.useContext(MenuPortalContext);
  console.log(menuPortal)
  if (!menuPortal) throw new Error("useContext - menuPortal deve estar dentro de um Provider");
  return menuPortal;
};

export const MenuPortalProvider = ({ children }: React.PropsWithChildren) => {
  const portalRef = React.useRef<HTMLDivElement>(null);
  return <MenuPortalContext.Provider value={{ portalRef }}>{children}</MenuPortalContext.Provider>;
};
