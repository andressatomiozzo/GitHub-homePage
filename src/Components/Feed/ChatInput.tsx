import React from "react";
import Button from "../../components/ui/Button";
import Tooltip from "../../components/ui/Tooltip";
import styles from "./ChatInput.module.css";

import CommentIcon from "../../assets/svg/comment.svg?react";
import ArrowDropDownIcon from "../../assets/svg/arrow_drop_down.svg?react";
import RepositoryIcon from "../../assets/svg/repository.svg?react";
import AddIcon from "../../assets/svg/add.svg?react";
import CopilotIcon from "../../assets/svg/copilot.svg?react";
import TokenIcon from "../../assets/svg/token.svg?react";
import SendIcon from "../../assets/svg/send.svg?react";

const ChatInput = () => {
  return (
    <div>
      <div className={`inputRepository ${styles.inputContainer}`}>
        <textarea
          name="homeFeed"
          id="homeFeed"
          placeholder="Ask anything or type @ to add context"
          className={styles.textArea}
        />
        <div className={styles.inputBar}>
          <Button variant="button1" className={styles.button}>
            <CommentIcon />
            <span>Ask</span>
            <ArrowDropDownIcon />
          </Button>
          <div className={styles.inputExtra}>
            <Button variant="button1" className={styles.button}>
              <RepositoryIcon />
              <span>All repositories</span>
              <ArrowDropDownIcon />
            </Button>
            <Tooltip text="Add files, and spaces">
              <Button variant="button1">
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
          <div className={styles.inputActions}>
            <Button variant="button2" className={styles.button2}>
              <CopilotIcon />
              <span>Auto</span>
              <ArrowDropDownIcon />
            </Button>
            <Tooltip text="View token usage">
              <Button variant="button2">
                <TokenIcon />
              </Button>
            </Tooltip>

            <div>
              <Tooltip text="Send now">
                <Button variant="button2">
                  <SendIcon />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
