// import Header from "../Header/Header";
// import DashboardAside from "./DashboardAside";
// import DashboardMain from "./DashboardMain";

// const DashboardPage = () => {
//   return (
//     <>
//       <Header />
//       <div className="pageModelContainer">
//         <DashboardAside />
//         <DashboardMain />
//       </div>
//     </>
//   );
// };

// export default DashboardPage;

// src/pages/DashboardPage.tsx

import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../../services/api';

export function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Carregando dados...</p>;

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>Você não está autenticado.</p>
        <a href="/">Ir para o Login</a>
      </div>
    );
  }

  // O GitHub retorna 'login' ou 'name', o Google retorna 'name' ou 'given_name'
  const userName = user.name || user.login || 'Usuário';
  const userAvatar = user.avatar_url || user.picture;

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #ccc', paddingBottom: '15px' }}>
        {userAvatar && <img src={userAvatar} alt="Avatar" width="50" style={{ borderRadius: '50%' }} />}
        <h2>Bem-vindo ao seu painel, {userName}!</h2>
      </header>
      <main style={{ marginTop: '20px' }}>
        <p>Aqui você poderá gerenciar seus repositórios simulados (estilo GitHub).</p>
      </main>
    </div>
  );
}
