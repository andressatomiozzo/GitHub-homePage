import React from "react";
import styles from "./Tooltip.module.css";
import { createPortal } from "react-dom";

type TooltipProps = React.PropsWithChildren & {
  text: string; // Texto da tooltip
  containerRef: React.RefObject<HTMLUListElement | null>
};

const TooltipPopover = ({ text, children, containerRef }: TooltipProps) => {
  const popoverId = React.useId();
  const wrapperRef = React.useRef<HTMLSpanElement>(null);
  const popoverRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const changePopover = () => {
      if (wrapperRef.current && popoverRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();

        // aplica posição diretamente no estilo do popover
        popoverRef.current.style.top = `${rect.top - 35}px`; // 40px acima do botão
        popoverRef.current.style.left = `${rect.left + rect.width / 2}px`;
      }
    };

    changePopover()
    containerRef.current?.addEventListener("scroll", changePopover)
    window.addEventListener("resize", changePopover);

    return () => {
      window.removeEventListener("resize", changePopover);
    };
  }, [containerRef]);

  return (
    <div className={styles.tooltipPortalWrapper}>
      <span ref={wrapperRef} popoverTarget={popoverId} style={{ margin: "0px" }}>
        {children}
      </span>
      <span id={popoverId} popover="auto" className={styles.tooltipPortalBox} ref={popoverRef}>
        {text}
      </span>
    </div>
  );
};

export default TooltipPopover;
