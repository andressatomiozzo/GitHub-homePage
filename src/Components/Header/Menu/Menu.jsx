import React from "react";
import MenuIcon from "../../../assets/svg/menu.svg?react";
import styles from "./Menu.module.css";
import Button1 from "../../Button/Button";

import LogoIcon from "../../../assets/svg/logo1.svg?react";
import CloseMenu from "../../../assets/svg/close1.svg?react";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <Button1 type="button1" className={styles.button} onClick={() => setToggleMenu((prev) => !prev)}>
        <MenuIcon />
      </Button1>
      {toggleMenu && (
        <aside>
          <div>
            <LogoIcon />
            <Button1 type="button2" aria-label="Close Menu" data-tooltip="Close Menu">
              <CloseMenu />
            </Button1>
            <button></button>
            <p>oie</p>
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
        </aside>
      )}
    </>
  );
};

export default Menu;
