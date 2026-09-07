import React from "react";
import styles from "./ChatInput.module.css";
import ChatInputAskButton from "./ChatInputAskButton";
import Button from "../ui/Button";
import Tooltip from "../ui/Tooltip";

import ArrowDropDownIcon from "../../assets/svg/arrow_drop_down.svg?react";
import CopilotIcon from "../../assets/svg/copilot.svg?react";
import TokenIcon from "../../assets/svg/token.svg?react";
import SendIcon from "../../assets/svg/send.svg?react";
import ChatInputRepository from "./ChatInputRepository";
import ChatInputAddFile from "./ChatInputAddFile";
import ChatInputAddFileItem from "./ChatInputAddFileItem";
import MoreHorizontalIcon from "../../assets/svg/more_horiz.svg?react";

export type IChatInputProps = {
  openMenu: number | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<number | null>>;
  handleDropDownClick: (n: number) => void;
};

const ChatInput = () => {
  const [openMenu, setOpenMenu] = React.useState<number | null>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropDownClick = (n: number) => {
    if (n !== openMenu) {
      setOpenMenu(n);
    } else {
      setOpenMenu(null);
    }
  };

  const [fileData, setFileData] = React.useState<File[] | null>(null);
  const listRef = React.useRef<HTMLUListElement>(null);

  return (
    <div className={`textarea ${styles.inputContainer}`}>
      {fileData && (
        <div className={styles.filesWrapper}>
          <ul ref={listRef}>
            {fileData.map((e) => (
              <ChatInputAddFileItem key={e.name + e.lastModified} containerRef={listRef}>{e.name}</ChatInputAddFileItem>
            ))}
          </ul>
          <Button variant="button2">
            <MoreHorizontalIcon />
          </Button>
        </div>
      )}

      <textarea
        name="homeFeed"
        id="homeFeed"
        placeholder="Ask anything or type @ to add context"
        className={styles.textArea}
      />
      <div ref={menuRef} className={styles.inputBar}>
        <div className={styles.optionsRef}>
          <ChatInputAskButton openMenu={openMenu} setOpenMenu={setOpenMenu} handleDropDownClick={handleDropDownClick} />
        </div>
        <div className={styles.inputExtra}>
          <ChatInputRepository openMenu={openMenu} handleDropDownClick={handleDropDownClick} />
          <ChatInputAddFile
            openMenu={openMenu}
            handleDropDownClick={handleDropDownClick}
            fileData={fileData}
            setFileData={setFileData}
          />
        </div>
        <div className={styles.inputActions}>
          <Button
            variant="button2"
            className={`${styles.button2} ${openMenu === 4 && styles.activeBtn}`}
            onClick={() => handleDropDownClick(4)}
          >
            <CopilotIcon />
            <span>Auto</span>
            <ArrowDropDownIcon />
          </Button>
          <Tooltip text="View token usage">
            <Button
              variant="button2"
              className={`${styles.button3} ${openMenu === 5 && styles.activeBtn}`}
              onClick={() => handleDropDownClick(5)}
            >
              <TokenIcon />
            </Button>
          </Tooltip>

          <div>
            <Tooltip text="Send now">
              <Button variant="button2" className={styles.button3}>
                <SendIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
