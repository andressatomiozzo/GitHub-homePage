import React from "react";

function LoginButtons() {

  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:51/oauth2/authorization/github';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
      <button onClick={handleGitHubLogin}>Entrar com GitHub</button>
    </div>
  );
}

export default LoginButtons;
