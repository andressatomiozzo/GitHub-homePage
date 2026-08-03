import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import type { PropsWithChildren } from "react";

type PropsInterface = PropsWithChildren & {
  type: "button1" | "button2" | "link1";
  location?: string;
  className?: string;
};

const Button1 = ({ type, location, className = "", children, ...props }: PropsInterface) => {
  if (type === "button1" || type === "button2") {
    return (
      <button className={`${styles[type]} ${className}`} {...props}>
        {children}
      </button>
    );
  } else if (type === "link1" && location) {
    return (
      <Link to={location} className={`${styles[type]} ${className}`} {...props}>
        {children}
      </Link>
    );
  }
};

export default Button1;
