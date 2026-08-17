import React from "react";
import styles from "./Input.module.css";

const Input = ({ classNameProp, ...props }: React.ComponentProps<"input"> & { classNameProp?: string }) => {

  return (
    <input
      className={`${styles.input} ${classNameProp}`}
      {...props}
    />
  );
};

export default Input;
