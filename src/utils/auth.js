export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const [, payload] = token.split('.');
    const decoded = JSON.parse(atob(payload));
    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp < currentTime;
  } catch (err) {
    console.error('Erro ao decodificar token:', err);
    return true;
  }
};