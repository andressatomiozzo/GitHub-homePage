import React from "react";
import styles from "./ChatInputAddFileItem.module.css";

import CodeIcon from "../../assets/svg/code.svg?react";
import CloseIcon from "../../assets/svg/close1.svg?react";
import Button from "../ui/Button";

const ChatInputAddFileItem = ({ children }: React.PropsWithChildren) => {
  return (
    <li className={styles.li}>
      <span>
        <CodeIcon />
      </span>
      <span>{children}</span>
      <Button variant="button2">
        <CloseIcon />
      </Button>
    </li>
  );
};

export default ChatInputAddFileItem;
