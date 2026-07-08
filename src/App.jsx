import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import UserLogin from "./pages/UserLogin";

import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <UserLogin />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
