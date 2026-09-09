import React from "react";
import { Link } from "react-router-dom";
import styles from "./ChatInput.module.css";
import Button from "../ui/Button";

import AgentIcon from "../../assets/svg/agent.svg?react";
import ArrowDropDownIcon from "../../assets/svg/arrow_drop_down.svg?react";
import CheckIcon from "../../assets/svg/check.svg?react";
import CommentIcon from "../../assets/svg/comment.svg?react";

type IChatInputAskButton = {
  openMenu: number | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<number | null>>;
  handleDropDownClick: (n: number) => void;
};

const ChatInputAskButton = ({ openMenu, setOpenMenu, handleDropDownClick }: IChatInputAskButton) => {
  return (
    <>
      <Button
        variant="button1"
        className={`${styles.button} ${openMenu === 1 && styles.activeBtn}`}
        onClick={() => handleDropDownClick(1)}
      >
        <CommentIcon />
        <span>Ask</span>
        <ArrowDropDownIcon />
      </Button>
      {openMenu === 1 && (
        <>
          {/* prettier-ignore */}
          <ul className={`${styles.options} ${styles.askOptions}`}>
            <li onClick={() => setOpenMenu(null)}>
              <span><CheckIcon /></span>
              <span><CommentIcon /></span>
              <span>Ask</span>
            </li>
            <li>
              <Link to="/">
                <span className={styles.inactive}><CheckIcon /></span>
                <span><AgentIcon /></span>
                <span>
                  <span>Agent</span>
                  <span className={styles.upgrade}>Upgrade</span>
                </span>
              </Link>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default ChatInputAskButton;
