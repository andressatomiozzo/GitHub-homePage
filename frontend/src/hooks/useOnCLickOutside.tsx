import React from "react";

const useOnCLickOutside = (refs: React.RefObject<HTMLElement>[], handler: () => void) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (refs.some((ref) => ref.current?.contains(event.target as Node))) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [refs, handler]);
};

export default useOnCLickOutside;