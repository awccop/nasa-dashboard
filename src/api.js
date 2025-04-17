// frontend/src/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("API_BASE_URL is not defined. Check your .env file.");
}

export async function fetchAPOD() {
  const response = await fetch(`${API_BASE_URL}/api/nasa/apod`);
  if (!response.ok) throw new Error('Failed to fetch APOD.');
  return await response.json();
}

export async function fetchAsteroids() {
  const response = await fetch(`${API_BASE_URL}/api/asteroids`);
  if (!response.ok) throw new Error('Failed to fetch asteroid data.');
  return await response.json();
}

export async function fetchMarsWeather() {
  const response = await fetch(`${API_BASE_URL}/api/mars-weather`);
  if (!response.ok) throw new Error('Failed to fetch Mars weather.');
  return await response.json();
}
