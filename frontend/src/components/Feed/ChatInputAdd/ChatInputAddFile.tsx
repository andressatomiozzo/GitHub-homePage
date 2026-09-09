import React from "react";
import styles from "../ChatInput.module.css";
import specificStyles from "./ChatInputAddFIle.module.css";
import Tooltip from "../../ui/Tooltip";
import Button from "../../ui/Button";

import AddIcon from "../../../assets/svg/add.svg?react";
import ArrowToRightIcon from "../../../assets/svg/arrow_to_right.svg?react";
import FileIcon from "../../../assets/svg/file2.svg?react";
import FolderIcon from "../../../assets/svg/folder.svg?react";
import UploadIcon from "../../../assets/svg/upload.svg?react";

type IChatInputAddFIle = {
  openMenu: number | null;
  handleDropDownClick: (n: number) => void;
  fileData: null | File[];
  setFileData: React.Dispatch<React.SetStateAction<null | File[]>>;
};

const ChatInputAddFile = ({ openMenu, handleDropDownClick, fileData, setFileData }: IChatInputAddFIle) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowedExtensions = [".txt", ".md"];
    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      alert("Tipo de arquivo não permitido!");
      return;
    }

    const fileAlreadyExists = fileData?.some((f) => f.name === file.name && f.size === file.size);
    if (fileAlreadyExists) {
      return;
    } else {
      setFileData([...(fileData ?? []), file]);
    }
  };

  return (
    <div className={styles.optionsRef}>
      <Tooltip text="Add files, and spaces">
        <Button
          variant="button1"
          className={`${styles.button} ${openMenu === 3 && styles.activeBtn}`}
          onClick={() => handleDropDownClick(3)}
          style={{ padding: "0.5rem" }}
        >
          <AddIcon />
        </Button>
      </Tooltip>
      {openMenu === 3 && (
        <>
          <ul className={`${styles.options} ${specificStyles.addFilesOptions}`}>
            <li className={specificStyles.item}>
              <span>
                <FileIcon />
              </span>
              <span>Files and folders...</span>
            </li>
            <li className={specificStyles.item}>
              <span>
                <FolderIcon />
              </span>
              <span className={specificStyles.text2Span}>
                <span>Spaces...</span>
                <span>
                  <ArrowToRightIcon />
                </span>
              </span>
            </li>
            <li className={specificStyles.line}></li>
            <li>
              <input
                type="file"
                id="inputFile"
                name="inputFile"
                accept=".txt,.md"
                onChange={handleFileChange}
                multiple
              />
              <label htmlFor="inputFile" className={specificStyles.item}>
                <span>
                  <UploadIcon />
                </span>
                <span>Upload from computer</span>
              </label>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default ChatInputAddFile;
