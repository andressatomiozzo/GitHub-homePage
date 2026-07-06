import React from "react";
import MenuIcon from "../../../assets/svg/menu.svg?react";
import styles from "./Menu.module.css";
import Button1 from "../../ui/Button";
import FeatureItem from "../../ui/FeatureItem";

import LogoIcon from "../../../assets/svg/logo1.svg?react";
import CloseMenu from "../../../assets/svg/close1.svg?react";
import Home from "../../../assets/svg/home.svg?react";
import AllIssues from "../../../assets/svg/issues.svg?react";
import AllPullRequest from "../../../assets/svg/pull_request.svg?react";
import AllRepositories from "../../../assets/svg/repositorie.svg?react";
import Projects from "../../../assets/svg/project.svg?react";
import Discussions from "../../../assets/svg/discussions.svg?react";
import Codespaces from "../../../assets/svg/codespaces.svg?react";
import Copilot from "../../../assets/svg/copilot.svg?react";
import Explore from "../../../assets/svg/explore.svg?react";
import MarketPlace from "../../../assets/svg/market_place.svg?react";
import MCPRegistry from "../../../assets/svg/mcp_registry.svg?react";


const Menu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleOutideClick = (event) => {
    if(event.target === event.currentTarget) setToggleMenu(false)
  }
  return (
    <>
      <Button1 type="button1" className={styles.buttonHamburguer} onClick={() => setToggleMenu(true)}>
        <MenuIcon />
      </Button1>
      {toggleMenu && (
        <div className={styles.modal} onClick={handleOutideClick}>
          <aside className={`${styles.aside} animeLeft`}>
            <div className={styles.header}>
              <LogoIcon className={styles.logo}/>
              <Button1 type="button2" aria-label="Close Menu" data-tooltip="Close Menu" onClick={() => setToggleMenu(false)}>
                <CloseMenu />
              </Button1>
            </div>
            <ul className={styles.lista}>
              <li>
                <ul className={styles.listaGrupo}>
                  <li>
                    <FeatureItem svg={Home} title="Home" className={styles.active}/>
                  </li>
                  <li>
                    <FeatureItem svg={AllIssues} title="All issues" />
                  </li>
                  <li>
                    <FeatureItem svg={AllPullRequest} title="All pull requests" />
                  </li>
                  <li>
                    <FeatureItem svg={AllRepositories} title="All repositories" />
                  </li>
                  <li>
                    <FeatureItem svg={Projects} title="Projects" />
                  </li>
                  <li>
                    <FeatureItem svg={Discussions} title="Discussions" />
                  </li>
                  <li>
                    <FeatureItem svg={Codespaces} title="Codespaces" />
                  </li>
                  <li>
                    <FeatureItem svg={Copilot} title="Copilot" />
                  </li>
                </ul>
              </li>
              <li className={styles.divisor}></li>
              <li>
                <ul className={styles.listaGrupo}>
                  <li><FeatureItem svg={Explore} title="Explore" /></li>
                  <li><FeatureItem svg={MarketPlace} title="MarketPlace" /></li>
                  <li><FeatureItem svg={MCPRegistry} title="MCP registry" /></li>
                </ul>
              </li>
              <li className={styles.divisor}></li>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default Menu;
