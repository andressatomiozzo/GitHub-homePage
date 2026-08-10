import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuRepositoryItem.module.css";

type IRepositoryItem = React.PropsWithChildren & {
  link: string;
  avatar: string;
};

const RepositoryItem = ({ link, avatar, children }: IRepositoryItem) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="avatar" />
      <Link to={link}>{children}</Link>
    </li>
  );
};

export default RepositoryItem;
