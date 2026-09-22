import React from "react";
import Header from "../Header/Header";
import DashboardAside from "./DashboardAside";
import DashboardMain from "./DashboardMain";
import { fetchUserData } from "../../services/api";
import { useUserContext } from "../../context/UserContext";

const DashboardPage = () => {
  const { userData, setUserData, userToken, setUserToken } = useUserContext();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUserData(data.user);
        setUserToken(data.accessToken);
        setLoading(false);
        // console.log(data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Carregando dados...</p>;

  if (!userData) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Você não está autenticado.</p>
        <a href="/">Ir para o Login</a>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="pageModelContainer">
        <DashboardAside />
        <DashboardMain />
      </div>
    </>
  );
};

export default DashboardPage;
