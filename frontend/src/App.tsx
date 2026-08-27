import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import DashboardPage from "./pages/Home/DashboardPage";

import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
