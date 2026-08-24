import React from "react";
import styles from "./ChatInput.module.css";
import ChatInputRepositoryItem from "./ChatInputRepositoryItem";
import Button from "../ui/Button";
import { useUserContext } from "../../context/UserContext";

import ArrowDropDownIcon from "../../assets/svg/arrow_drop_down.svg?react";
import RepositoriesIcon from "../../assets/svg/repositories.svg?react";
import RepositoryIcon from "../../assets/svg/repository.svg?react";
import Search from "../../assets/svg/search.svg?react";

type IChatInputRepository = {
  openMenu: number | null;
  handleDropDownClick: (n: number) => void;
};

const ChatInputRepository = ({ openMenu, handleDropDownClick }: IChatInputRepository) => {
  const { repositoryFetchData } = useUserContext();
  const [inputValue, setInputValue] = React.useState<string>("");
  const repositories = repositoryFetchData?.data ?? [];
  const filteredRepositories = repositories.filter((repository) =>
    repository.full_name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const [select, setSelect] = React.useState<string[]>([]);

  const handleclick = (repositoryName: string) => {
    if (select.includes(repositoryName)) {
      setSelect(select.filter((r) => r !== repositoryName));
    } else {
      setSelect([...select, repositoryName]);
    }
  };

  return (
    <div className={styles.optionsRef}>
      <Button
        variant="button1"
        className={`${styles.button} ${openMenu === 2 && styles.activeBtn}`}
        onClick={() => handleDropDownClick(2)}
      >
        {select.length <= 1 ? <RepositoryIcon /> : <RepositoriesIcon />}

        {select.length === 0 ? (
          <span>All repositories</span>
        ) : select.length === 1 ? (
          <span>{select}</span>
        ) : (
          <span>{select.length} repositories</span>
        )}

        <ArrowDropDownIcon />
      </Button>
      {openMenu === 2 && (
        <>
          <div className={`${styles.options} ${styles.repositoriesOptions}`}>
            <div className={styles.repositoriesSearch}>
              <h3 className="smallTitle">Select a repository</h3>
              <span className={`inputRepository ${styles.input}`}>
                <Search />
                <input
                  placeholder="Search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  autoFocus
                />
              </span>
            </div>
            <ul className={styles.chatInputRepositoryItems}>
              {filteredRepositories.map((r, i) => (
                <ChatInputRepositoryItem
                  key={r.id}
                  index={i}
                  text={r.full_name}
                  select={select}
                  onClick={() => handleclick(r.full_name)}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatInputRepository;
