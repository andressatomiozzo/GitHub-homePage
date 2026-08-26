const API_URL = 'http://localhost:8080';

export async function fetchUserData() {
  const response = await fetch(`${API_URL}/api/user`, {
    method: 'GET',
    credentials: 'include', // Essencial para o Spring reconhecer a sessão
  });

  if (!response.ok) {
    throw new Error('Não autenticado');
  }

  return response.json();
}