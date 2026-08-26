import React from "react";
import styles from "./DashboardAside.module.css";
import { useUserContext } from "../../context/UserContext";
import ButtonLink from "../../components/ui/ButtonLink";
import RepositoryItem from "../../components/ui/RepositoryItem";

import Repository from "../../assets/svg/repository.svg?react";

const DashboardAside = () => {
  const { repositoryFetchData } = useUserContext();
  const [inputValue, setInputValue] = React.useState<string>("");

  const repositories = repositoryFetchData?.data ?? [];
  const filteredRepositories = repositories.filter((repository) =>
    repository.full_name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <aside className={`pageModelAside ${styles.asideContainer}`}>
      <div className={styles.title}>
        <h2 className="smallTitle">Top repositories</h2>
        <ButtonLink to="/" className={styles.link}>
          <Repository />
          <span>New</span>
        </ButtonLink>
      </div>
      <input
        placeholder="Find a repository..."
        className={`inputRepository ${styles.input}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {filteredRepositories.map((r) => (
          <RepositoryItem link={r.html_url} avatar={r.owner.avatar_url} key={r.id} classNameProps={styles.repository}>
            {r.full_name}
          </RepositoryItem>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardAside;
