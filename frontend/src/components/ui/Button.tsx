import styles from "./Button.module.css";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant: "button1" | "button2";
};

const Button = ({ variant, className = "", children, ...props }: ButtonProps) => {
  return (
    <button className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
