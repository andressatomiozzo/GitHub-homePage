import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../../src/context/UserContext";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";

import "./App.css";
import Testes from "./testes";
import LoginButtons from "./pages/Login/LoginButtons";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <LoginButtons />
        <Header />
        <Testes />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
