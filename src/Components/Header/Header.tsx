import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "./Menu/Menu";
import PageLocationTitle from "../PageLocationTitle";
import Button from "../ui/Button";
import ButtonLink from "../ui/ButtonLink";

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
import Tooltip from "../ui/Tooltip";

const Header = () => {
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
        <Link to="/" className={styles.pageLocationTitle}>
          <PageLocationTitle>Dashboard</PageLocationTitle>
        </Link>
        <Button variant="button1" className={styles.searchButton}>
          <SearchIcon />
          <span className={styles.searchTitle}>
            Type <kbd>/</kbd> to search
          </span>
        </Button>
      </nav>
      <div className={styles.partRight}>
        <div className={styles.rightWrapper}>



          <div className={styles.copilot}>
            <Tooltip text={"Chat with Copilot"}>
              <CopilotIcon />
            </Tooltip>
            <button>
              <ArrowDropDownIcon />
            </button>
          </div>




          <div className={styles.bar}></div>
          <Tooltip text={"Create new"}>
            <Button variant="button1" className={styles.createNew}>
              <AddIcon />
              <ArrowDropDownIcon />
            </Button>
          </Tooltip>

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
        </div>
        <Tooltip text={"Notifications"}>
          <ButtonLink to="/notifications">
            <NotificationsIcon />
          </ButtonLink>
        </Tooltip>

        <Tooltip text={"Open user navigation menu"} alignment="right">
          <div className={styles.user}>
            <User />
          </div>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
