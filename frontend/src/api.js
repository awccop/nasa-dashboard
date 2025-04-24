const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("API_BASE_URL is not defined. Check your .env file.");
}

export async function fetchAPOD() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/nasa/apod`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch APOD failed:', error);
    throw error;
  }
}