import React from "react";
import MenuIcon from "../../../assets/svg/menu.svg?react";
import styles from "./Menu.module.css";
import MenuItem from "../../ui/MenuItem";
import Button from "../../ui/Button";
import { useUserContext } from "../../../context/UserContext";
import RepositoryItem from "../../ui/MenuRepositoryItem";

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
import Search from "../../../assets/svg/search.svg?react";
import Tooltip from "../../ui/Tooltip";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { repositoryFetchData } = useUserContext();
  const handleOutideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    if (event.target === event.currentTarget) setToggleMenu(false);
  };

  return (
    <>
      <Tooltip text={"Open menu"} alignment="left">
        <Button variant="button1" className={styles.buttonHamburguer} onClick={() => setToggleMenu(true)}>
          <MenuIcon />
        </Button>
      </Tooltip>
      {toggleMenu && (
        <div className={styles.modal} onClick={handleOutideClick}>
          <aside className={`${styles.aside} animeLeft`}>
            <div className={styles.header}>
              <LogoIcon className={styles.logo} />
              <Tooltip text={"Close menu"}>
                <Button
                  variant="button2"
                  aria-label="Close Menu"
                  data-tooltip="Close Menu"
                  onClick={() => setToggleMenu(false)}
                >
                  <CloseMenu />
                </Button>
              </Tooltip>
            </div>
            <ul className={styles.lista}>
              <li>
                {/* prettier-ignore */}
                <ul className={styles.listaGrupo}>
                  <li><MenuItem svg={Home} title="Home" className={styles.active} /></li>
                  <li><MenuItem svg={AllIssues} title="All issues" /></li>
                  <li><MenuItem svg={AllPullRequest} title="All pull requests" /></li>
                  <li><MenuItem svg={AllRepositories} title="All repositories" /></li>
                  <li><MenuItem svg={Projects} title="Projects" /></li>
                  <li><MenuItem svg={Discussions} title="Discussions" /></li>
                  <li><MenuItem svg={Codespaces} title="Codespaces" /></li>
                  <li><MenuItem svg={Copilot} title="Copilot" /></li>
                </ul>
              </li>
              <li className={styles.divisor}></li>
              <li>
                {/* prettier-ignore */}
                <ul className={styles.listaGrupo}>
                  <li><MenuItem svg={Explore} title="Explore" /></li>
                  <li><MenuItem svg={MarketPlace} title="MarketPlace" /></li>
                  <li><MenuItem svg={MCPRegistry} title="MCP registry" /></li>
                </ul>
              </li>
              <li className={styles.divisor}></li>
              <li className={styles.repositories}>
                <ul>
                  <li>
                    <h3 className={styles.h3}>
                      <span>Top repositories</span>
                      <button aria-label="Search for repositories">
                        <Search />
                      </button>
                    </h3>
                  </li>
                  {repositoryFetchData &&
                    repositoryFetchData.data &&
                    repositoryFetchData.data.map((i) => (
                      <RepositoryItem link={i.html_url} key={i.id} avatar={i.owner.avatar_url}>
                        {i.full_name}
                      </RepositoryItem>
                    ))}
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default Menu;
