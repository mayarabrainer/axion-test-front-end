import { useState } from 'react';
import './Login.css';
import emailIcon from '../../assets/mail.png';
import lockIcon from '../../assets/lock.png';
import logoImg from '../../assets/logo.png';
import backgroundImg from '../../assets/bg.jpg';
import { login } from '../../services/auth';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

try {
  await login(email, password);
  setError(null);
  onLoginSuccess();
} catch (error) {
  console.error('Erro no login:', error);
  setError('Erro na comunicação com o servidor ou credenciais inválidas.');
}

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form">
          <img src={logoImg} alt="Logo Orange" className="login-logo" />

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <img src={emailIcon} alt="ícone de email" className="icon-image" />
                <input
                  type="email"
                  id="email"
                  placeholder="seunome@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <p className="help-text">Problemas para acessar sua conta?</p>

            <button className="login-button" type="submit">Acessar</button>

            <div className="divider">OU</div>

            <button className="register-button" type="button">Cadastrar</button>

            <div className="footer-links">
              <a href="#">Termos de uso</a>•<a href="#">Política de privacidade</a>
            </div>
          </form>
        </div>
      </div>

      <img src={backgroundImg} alt="Imagem decorativa" className="decorative-image" />
    </div>
  );
}

export default Login;
