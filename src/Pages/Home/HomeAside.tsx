import { useUserContext } from "../../context/UserContext";
import ButtonLink from "../../components/ui/ButtonLink";
import styles from "./HomeAside.module.css";
import RepositoryItem from "../../components/ui/RepositoryItem";

import Repositorie from "../../assets/svg/repositorie.svg?react";
import Input from "../../components/ui/RepositoryInput";
import React from "react";

const HomeAside = () => {
  const { repositoryFetchData } = useUserContext();

  return (
    <aside className={`pageModelAside ${styles.asideContainer}`}>
      <div className={styles.title}>
        <h2 className={styles.h2}>Top repositories</h2>
        <ButtonLink to="/" className={styles.link}>
          <Repositorie />
          <span>New</span>
        </ButtonLink>
      </div>
      <Input
        placeholder="Find a repository..."
        classNameProp={styles.input}
      />
    </aside>
  );
};

export default HomeAside;
