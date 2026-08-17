import React from "react";
import HomeAside from "./HomeAside";

const Home = () => {
  return (
    <div className="pageModelContainer">
      <HomeAside/>
      <div className="pageModelMain">
        <main>main</main>
        <aside>Asside2</aside>
      </div>
    </div>
  );
};

export default Home;
