import React from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({
  text,
  alignment,
  children,
}: React.PropsWithChildren & { text: string; alignment?: "left" | "right" }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={alignment === "left" ? styles.tooltipTextLeft : alignment === "right" ? styles.tooltipTextRight: styles.tooltipText}>
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
