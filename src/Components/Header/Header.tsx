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

const Header = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.partLeft}>
        <Menu />
        <Link to="/" className={styles.logo}>
          <LogoIcon />
        </Link>
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
            <CopilotIcon />
            <button>
              <ArrowDropDownIcon />
            </button>
          </div>
          <div className={styles.bar}></div>
          <Button variant="button1" className={styles.createNew}>
            <AddIcon />
            <ArrowDropDownIcon />
          </Button>
          <div className={styles.repoActions}>
            <ButtonLink to="/issues/assigned">
              <IssuesIcon />
            </ButtonLink>
            <ButtonLink to="/pulls/inbox">
              <PullRequestIcon />
            </ButtonLink>
            <ButtonLink to="/repos">
              <RepositoriesIcon />
            </ButtonLink>
          </div>
        </div>
        <ButtonLink to="/notifications">
          <NotificationsIcon />
        </ButtonLink>
        <div className={styles.user}>
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
