import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "../ui/MenuItem";
import Button from "../ui/Button";
import RepositoryItem from "../ui/RepositoryItem";
import Tooltip from "../ui/Tooltip";
import { useUserContext } from "../../context/UserContext";

import MenuIcon from "../../assets/svg/menu.svg?react";
import LogoIcon from "../../assets/svg/logo1.svg?react";
import CloseMenu from "../../assets/svg/close1.svg?react";
import Home from "../../assets/svg/home.svg?react";
import AllIssues from "../../assets/svg/issues.svg?react";
import AllPullRequest from "../../assets/svg/pull_request.svg?react";
import AllRepositories from "../../assets/svg/repository.svg?react";
import Projects from "../../assets/svg/project.svg?react";
import Discussions from "../../assets/svg/discussions.svg?react";
import Codespaces from "../../assets/svg/codespaces.svg?react";
import Copilot from "../../assets/svg/copilot.svg?react";
import Explore from "../../assets/svg/explore.svg?react";
import MarketPlace from "../../assets/svg/market_place.svg?react";
import MCPRegistry from "../../assets/svg/mcp_registry.svg?react";
import Search from "../../assets/svg/search.svg?react";
import ArrowUp from "../../assets/svg/keyboard_arrow_up.svg?react";

const Menu = () => {
  const { repositoryFetchData } = useUserContext();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleInput, setToggleInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleOutideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setToggleMenu(false);
  };

  const repositories = repositoryFetchData?.data ?? [];
  const filteredRepositories = repositories.filter((repository) =>
    repository.full_name.toLowerCase().includes(inputValue.toLowerCase()),
  );

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
                  <li><MenuItem svg={MarketPlace} title="Marketplace" /></li>
                  <li><MenuItem svg={MCPRegistry} title="MCP registry" /></li>
                </ul>
              </li>
              <li className={styles.divisor}></li>
              <li className={styles.repositories}>
                <ul>
                  <li>
                    <h3 className={styles.h3}>
                      <span>Top repositories</span>
                      {toggleInput ? (
                        <button aria-label="Search for repositories" onClick={() => setToggleInput(false)}>
                          <ArrowUp />
                        </button>
                      ) : (
                        <button aria-label="Search for repositories" onClick={() => setToggleInput(true)}>
                          <Search />
                        </button>
                      )}
                    </h3>
                  </li>
                  <ul>
                    {toggleInput && (
                      <li className={styles.inputLi}>
                        <span className="inputRepository">
                          <Search />
                          <input
                            placeholder="Search for repositories"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            autoFocus
                          />
                        </span>
                      </li>
                    )}
                    {filteredRepositories.map((r) => (
                      <RepositoryItem
                        link={r.html_url}
                        avatar={r.owner.avatar_url}
                        key={r.id}
                        classNameProps={styles.r}
                      >
                        {r.full_name}
                      </RepositoryItem>
                    ))}
                  </ul>
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
