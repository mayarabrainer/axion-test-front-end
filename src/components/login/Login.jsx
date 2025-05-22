import { useState } from 'react';
import './Login.css';
import emailIcon from '../../assets/mail.png';
import lockIcon from '../../assets/lock.png';
import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/bg.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form">
          <img src={logoImg} alt="Logo Orange" className="login-logo" />

          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <img src={emailIcon} alt="ícone de email" className="icon-image" />
                <input
                  type="email"
                  id="email"
                  placeholder="seunome@email.com"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <img src={lockIcon} alt="ícone de senha" className="icon-image" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="showPassword"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword">Mostrar a senha.</label>
            </div>

            <p className="help-text">Problemas para acessar sua conta?</p>

            <button className="login-button">Acessar</button>

            <div className="divider">OU</div>

            <button className="register-button">Cadastrar</button>

            <div className="footer-links">
              <a href="#">Termos de uso</a> • <a href="#">Política de privacidade</a>
            </div>
          </form>
        </div>
      </div>

      <img src={backgroundImg} alt="Imagem decorativa" className="decorative-image" />
    </div>
  );
}

export default Login;
