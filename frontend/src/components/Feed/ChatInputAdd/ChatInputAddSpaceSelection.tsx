import React from "react";
import { createPortal } from 'react-dom';
import styles from "../ChatInput.module.css";
import specificStyles from "./ChatInputAddSpaceSelection.module.css";
import Search from "../../../assets/svg/search.svg?react";
import Button from "../../ui/Button";
import ChatInputAddSpaceCreate from "./ChatInputAddSpaceCreate";

type IChatInputAddSpaceSelection = {
  containerRef: React.RefObject<HTMLElement | null>;
};

const ChatInputAddSpaceSelection = ({ containerRef }: IChatInputAddSpaceSelection) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  return (
    <div
      className={`${styles.options} ${specificStyles.wrapper}`}
      ref={wrapperRef}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="smallTitle">Select a space</h3>
      <span className="smallSubtitle">Recent spaces</span>
      <span className={`inputRepository ${specificStyles.input}`}>
        <Search />
        <input
          placeholder="Filter items"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
      </span>
      <div className={specificStyles.noSpaceFoundWrapper}>
        <span className="smallTitle">No spaces found</span>
        <span className="smallSubtitle">You can create a new space to get started.</span>
        <Button variant="button1" className={specificStyles.button} onClick={() => setOpenModal((prev) => !prev)}>Create a new space</Button>
        {openModal && createPortal(<ChatInputAddSpaceCreate/>, document.body)}
      </div>
    </div>
  );
};

export default ChatInputAddSpaceSelection;
