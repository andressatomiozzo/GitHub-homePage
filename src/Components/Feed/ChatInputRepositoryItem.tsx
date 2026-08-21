import React from "react";
import styles from "./ChatInputRepositoryItem.module.css";
import Reporitory from "../../assets/svg/repository.svg?react";

import CheckIcon from "../../assets/svg/check.svg?react";

type IChatInputRepositoryItem = React.ComponentProps<'li'>& {
  text: string;
  index: number;
  select: string[];
};

const ChatInputRepositoryItem = ({ text, index, select, ...props }: IChatInputRepositoryItem) => {
  return (
    <li className={styles.item} {...props}>
      <div className={`${styles.square} ${select.includes(text) ? styles.squareSelected : ""}`}>
        <CheckIcon />
      </div>
      <span className={styles.svg}>
        <Reporitory />
      </span>
      <span className={`${styles.text} ${index === 0 ? styles.firstChild : ""}`}>{text}</span>
    </li>
  );
};

export default ChatInputRepositoryItem;
