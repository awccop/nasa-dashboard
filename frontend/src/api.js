export async function fetchAPOD() {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/apod`);
  if (!response.ok) {
    throw new Error('NASA API response error');
  }
  return response.json();
}
