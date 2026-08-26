import React from "react";
import { Link } from "react-router-dom";
import styles from "./RepositoryItem.module.css";

type IRepositoryItem = React.PropsWithChildren & {
  link: string;
  avatar: string;
  classNameProps?: {};
};

const RepositoryItem = ({ link, avatar, children, classNameProps }: IRepositoryItem) => {
  return (
    <li className={`${styles.item} ${classNameProps}`}>
      <img src={avatar} alt="avatar" />
      <Link to={link}>{children}</Link>
    </li>
  );
};

export default RepositoryItem;
