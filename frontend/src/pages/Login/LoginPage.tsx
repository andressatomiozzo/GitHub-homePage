import React from 'react';

export function LoginPage() {
  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', gap: '15px' }}>
      <h1>GitClone - Login</h1>
      <p>Entre com sua conta para acessar o painel</p>
      <button onClick={handleGitHubLogin} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Entrar com GitHub
      </button>
    </div>
  );
}