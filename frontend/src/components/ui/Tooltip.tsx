import React from "react";
import styles from "./Tooltip.module.css";

type ITooltip = React.PropsWithChildren & { text: string; alignment?: "left" | "right" };

const Tooltip = ({ text, alignment, children }: ITooltip) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span
        className={
          alignment === "left"
            ? styles.tooltipTextLeft
            : alignment === "right"
              ? styles.tooltipTextRight
              : styles.tooltipText
        }
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
