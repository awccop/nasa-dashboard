export async function fetchAPOD() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL.replace(/\/$/, ""); // Remove any trailing slash
  const response = await fetch(`${baseUrl}/api/nasa/apod`);
  if (!response.ok) {
    throw new Error('NASA API response error');
  }
  return response.json();
}
