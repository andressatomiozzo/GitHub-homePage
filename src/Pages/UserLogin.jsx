import React from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import styles from "./UserLogin.module.css";

const UserLogin = () => {
  const { userToken, setUserToken } = React.useContext(UserContext);
  const [userValue, setUserValue] = React.useState("")

  const handleUserSubmit = (event) => {
    // setUserToken(event.target)
    event.preventDefault();
    setUserToken(userValue)
  }
  if (userToken) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.titleP}>Você tem duas opções:</p>
        <div className={styles.options}>
          <div className={styles.optionPadrao}>
            <button className={styles.button} onClick={() => setUserToken('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')}>Entrar com um token padrão</button>
          </div>
          <div className={styles.optionPersonalizado}>
            <Link
              to={"https://github.com/settings/personal-access-tokens"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Crie um Personal Access Token
            </Link>
            <form onSubmit={handleUserSubmit} >
              <label htmlFor="user" className={styles.userLabel}>
                Insira seu Token Personalizado:
              </label>
              <input type="text" name="user" id="user" className={styles.userInput} value={userValue} onChange={({target}) => setUserValue(target.value)}/>
              <button className={styles.button}>Entrar</button>
            </form>
            <p className={styles.tokenInfo}>
              Para mais informações sobre Fine-grained Personal Access Token acesse a 
              <Link
                to={
                  "https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens?ref=medevel.com&utm_source=chatgpt.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tokenInfoLink}
              >
                Documentação do GitHub
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
