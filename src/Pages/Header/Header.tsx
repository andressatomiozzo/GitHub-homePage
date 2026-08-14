import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "../../components/SideMenu/Menu";
import PageLocationTitle from "../../components/PageLocationTitle";
import Button from "../../components/ui/Button";
import Tooltip from "../../components/ui/Tooltip";
import ButtonLink from "../../components/ui/ButtonLink";
import { useUserContext } from "../../context/UserContext";
import useMedia from "../../hooks/useMedia";

import LogoIcon from "../../assets/svg/logo1.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";
import CopilotIcon from "../../assets/svg/copilot.svg?react";
import ArrowDropDownIcon from "../../assets/svg/arrow_drop_down.svg?react";
import AddIcon from "../../assets/svg/add.svg?react";
import IssuesIcon from "../../assets/svg/issues.svg?react";
import PullRequestIcon from "../../assets/svg/pull_request.svg?react";
import RepositoriesIcon from "../../assets/svg/repositorie.svg?react";
import NotificationsIcon from "../../assets/svg/notification.svg?react";
import User from "../../assets/svg/user.svg?react";
import React from "react";

const Header = () => {
  const { repositoryFetchData } = useUserContext();

  const media64 = useMedia("(max-width: 64rem)");
  const media48 = useMedia("(max-width: 48rem)");
  const media34 = useMedia("(max-width: 34rem)");
  const media22 = useMedia("(max-width: 22rem)");

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "/") {
        console.log("A tecla / foi pressionada!");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.partLeft}>
        <Menu />
        <Tooltip text={"Homepage"}>
          <Link to="/" className={styles.logo}>
            <LogoIcon />
          </Link>
        </Tooltip>
      </div>
      <nav className={styles.partCenter}>
        {media22 ? (
          <Button variant="button2"></Button>
        ) : (
          <Link to="/" className={styles.pageLocationTitle}>
            <PageLocationTitle>Dashboard</PageLocationTitle>
          </Link>
        )}

        <Button variant="button1" className={styles.searchButton}>
          <SearchIcon />
          {!media64 && (
            <span className={styles.searchTitle}>
              Type <kbd>/</kbd> to search
            </span>
          )}
        </Button>
      </nav>
      <div className={styles.partRight}>
        {!media48 && (
          <>
            <div className={styles.copilot}>
              <Tooltip text={"Chat with Copilot"}>
                <CopilotIcon />
              </Tooltip>
              <button>
                <ArrowDropDownIcon />
              </button>
            </div>
            <div className={styles.bar}></div>
          </>
        )}

        {!media34 && (
          <Tooltip text={"Create new"}>
            <Button variant="button1" className={styles.createNew}>
              <AddIcon />
              <ArrowDropDownIcon />
            </Button>
          </Tooltip>
        )}

        {!media48 && (
          <div className={styles.repoActions}>
            <Tooltip text={"All issues"}>
              <ButtonLink to="/issues/assigned">
                <IssuesIcon />
              </ButtonLink>
            </Tooltip>
            <Tooltip text={"All pull requests"}>
              <ButtonLink to="/pulls/inbox">
                <PullRequestIcon />
              </ButtonLink>
            </Tooltip>
            <Tooltip text={"All repositories"}>
              <ButtonLink to="/repos">
                <RepositoriesIcon />
              </ButtonLink>
            </Tooltip>
          </div>
        )}

        <Tooltip text={"Notifications"}>
          <ButtonLink to="/notifications">
            <NotificationsIcon />
          </ButtonLink>
        </Tooltip>

        <Tooltip text={"Open user navigation menu"} alignment="right">
          <div className={styles.user}>
            {repositoryFetchData && repositoryFetchData.data ? (
              <img src={repositoryFetchData.data[1].owner.avatar_url} />
            ) : (
              <User />
            )}
          </div>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
