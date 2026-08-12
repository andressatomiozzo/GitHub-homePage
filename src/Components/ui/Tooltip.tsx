import React from "react";
import styles from "./Tooltip.module.css"

const Tooltip = ({ text, children }: React.PropsWithChildren & {text: string}) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
};

export default Tooltip;
