import React from 'react';
import styles from "./LoginPage.module.css"

export function LoginPage() {
  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github';
  };

  return (
    <div className={styles.wrapper}>
      <h1>GitClone - Login</h1>
      <p>Entre com sua conta para acessar a aplicação</p>
      <button onClick={handleGitHubLogin} >
        Entrar com GitHub
      </button>
    </div>
  );
}