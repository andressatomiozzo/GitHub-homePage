import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import Input from "../Form/Input";

import LogoIcon from "../../assets/svg/logo1.svg?react";
import CopilotIcon from "../../assets/svg/copilot.svg?react";
import ArrowDropDownIcon from "../../assets/svg/arrow_drop_down.svg?react";
import AddIcon from "../../assets/svg/add.svg?react";
import IssuesIcon from "../../assets/svg/issues.svg?react";
import PullRequestIcon from "../../assets/svg/pull_request.svg?react";
import RepositoriesIcon from "../../assets/svg/repositorie.svg?react";
import NotificationsIcon from "../../assets/svg/notification.svg?react";
import User from "../../assets/svg/user.svg?react";

const Nav = () => {
  return (
    <header>
      <div>
        <Menu />
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <nav>
        <Link to="/">
          <span>Dashboard</span>
        </Link>
        <Input />
      </nav>
      <div>
        <div>
          <div>
            <CopilotIcon />
            <button>
              <ArrowDropDownIcon />
            </button>
          </div>
          <div>|</div>
          <button>
            <AddIcon />
            <ArrowDropDownIcon />
          </button>
          <div>
            <Link to="/issues/assigned">
              <IssuesIcon />
            </Link>
            <Link to="/pulls/inbox">
              <PullRequestIcon />
            </Link>
            <Link to="/repos">
              <RepositoriesIcon />
            </Link>
          </div>
        </div>
        <Link to="/notifications">
          <NotificationsIcon />
        </Link>
        <User/>
      </div>
      <Link to="/setings">Settings</Link>
    </header>
  );
};

export default Nav;
