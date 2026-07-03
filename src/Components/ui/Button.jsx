import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button1 = ({ type, location, className = "", children, ...prop }) => {
  if (type === "button1" || type === "button2") {
    return (
      <button className={`${styles[type]} ${className}`} {...prop}>
        {children}
      </button>
    );
  } else if (type === "link1") {
    return (
      <Link to={location} className={`${styles[type]} ${className}`} {...prop}>
        {children}
      </Link>
    );
  }
};

export default Button1;
