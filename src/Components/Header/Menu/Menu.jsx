import React from "react";
import MenuIcon from "../../../assets/svg/menu.svg?react";
import styles from "./Menu.module.css";

import LogoIcon from "../../../assets/svg/logo1.svg?react";
import CloseMenu from "../../../assets/svg/close1.svg?react";
import Button1 from "../../General/Button1";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <Button1 type="button" className={styles.button} onClick={() => setToggleMenu((prev) => !prev)}>
        <MenuIcon />
      </Button1>
      {toggleMenu && (
        <asside>
          <div>
            <LogoIcon />
            <button aria-label="Close Menu" data-tooltip="Close Menu">
              <CloseMenu />
            </button>
          </div>
          <ul>
            <li>
              <ul>
                <li></li>
              </ul>
            </li>
            <li></li>
            <li></li>
          </ul>
        </asside>
      )}
    </>
  );
};

export default Menu;
