import React from "react";
import styles from "./ChatInputAddFileItem.module.css";

import CodeIcon from "../../assets/svg/code.svg?react";
import CloseIcon from "../../assets/svg/close1.svg?react";
import Button from "../ui/Button";
import TooltipPopover from "../ui/TooltipPopover";

const ChatInputAddFileItem = ({
  children,
  containerRef,
}: React.PropsWithChildren & { containerRef: React.RefObject<HTMLUListElement | null> }) => {
  return (
    <li className={styles.li}>
      <span>
        <CodeIcon />
      </span>
      <span>{children}</span>
      <div>
        <TooltipPopover text="Remove" containerRef={containerRef}>
          <Button variant="button2">
            <CloseIcon />
          </Button>
        </TooltipPopover>
      </div>
    </li>
  );
};

export default ChatInputAddFileItem;
