import { Link, type LinkProps } from "react-router-dom";
import styles from "./Button.module.css";
import type { PropsWithChildren } from "react";

const ButtonLink = ({ className = "", children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <Link className={`${styles.link1} ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
