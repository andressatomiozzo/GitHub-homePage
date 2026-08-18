import React from "react";
import styles from "./HomeMain.module.css";
import useMedia from "../../hooks/useMedia";
import ChatInput from "../../components/Feed/ChatInput";


const HomeMain = () => {
  const media80 = useMedia("(max-width: 80rem)");

  return (
    <div className={`pageModelMain ${styles.container}`}>
      <main>
        <h2 className={styles.h2}>Home</h2>
        <ChatInput/>
      </main>
      {!media80 && <aside>aside</aside>}
    </div>
  );
};

export default HomeMain;
