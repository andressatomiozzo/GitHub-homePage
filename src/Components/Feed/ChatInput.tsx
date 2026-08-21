import React from "react";
import styles from "./ChatInput.module.css";
import ChatInputAskButton from "./ChatInputAskButton";
import Button from "../ui/Button";
import Tooltip from "../ui/Tooltip";
import RepositoryItem from "../ui/RepositoryItem";

import ArrowDropDownIcon from "../../assets/svg/arrow_drop_down.svg?react";
import AddIcon from "../../assets/svg/add.svg?react";
import CopilotIcon from "../../assets/svg/copilot.svg?react";
import TokenIcon from "../../assets/svg/token.svg?react";
import SendIcon from "../../assets/svg/send.svg?react";
import FileIcon from "../../assets/svg/file2.svg?react";
import FolderIcon from "../../assets/svg/folder.svg?react";
import UploadIcon from "../../assets/svg/upload.svg?react";
import { useUserContext } from "../../context/UserContext";
import ChatInputRepository from "./ChatInputRepository";

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



  return (
    <div className={`textarea ${styles.inputContainer}`}>
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
          <ChatInputRepository openMenu={openMenu} handleDropDownClick={handleDropDownClick}/>
          <Tooltip text="Add files, and spaces">
            <Button
              variant="button1"
              className={`${styles.button} ${openMenu === 3 && styles.activeBtn}`}
              onClick={() => handleDropDownClick(3)}
            >
              <AddIcon />
            </Button>
          </Tooltip>
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
