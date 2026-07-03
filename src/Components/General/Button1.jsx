import { Link } from "react-router-dom";

import styles from "./Button1.module.css"

const Button1 = ({ type, location, className = "", children }) => {
  if (type === "button") {
    return <button className={`${styles.item} ${className}`}>{children}</button>;
  } else if (type === "link") {
    return <Link to={location} className={`${styles.item} ${className}`}>{children}</Link>;
  }
};

export default Button1;
