// frontend/src/Dashboard.js
import React, { useState } from 'react';
import { fetchAPOD, fetchAsteroids, fetchMarsWeather } from './api';
import './Dashboard.css';

function Dashboard() {
  const [data, setData] = useState(null);
  const [activeView, setActiveView] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async (type) => {
    setActiveView(type);
    setLoading(true);
    setError('');
    setData(null);

    try {
      if (type === 'apod') {
        const apodData = await fetchAPOD();
        setData(apodData);
      } else if (type === 'asteroids') {
        const asteroidData = await fetchAsteroids();
        setData(asteroidData);
      } else if (type === 'mars') {
        const marsData = await fetchMarsWeather();
        setData(marsData);
      }
    } catch (err) {
      setError(err.message || 'Error fetching NASA data.');
    }

    setLoading(false);
  };

  return (
    <div className="dashboard">
      <div className="button-group">
        <button onClick={() => handleClick('apod')}>View APOD</button>
        <button onClick={() => handleClick('asteroids')}>View Near-Earth Asteroids</button>
        <button onClick={() => handleClick('mars')}>View Mars Weather</button>
      </div>

      {loading && <div className="loader"></div>}

      {error && <div className="error">Error: {error}</div>}

      {!loading && data && activeView === 'apod' && (
        <div className="card">
          <h2>{data.title}</h2>
          {data.media_type === 'image' ? (
            <img src={data.url} alt={data.title} className="apod-image" />
          ) : (
            <iframe
              title="NASA Video"
              src={data.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="apod-video"
            />
          )}
          <p>{data.date}</p>
          <p>{data.explanation}</p>
        </div>
      )}

      {!loading && data && activeView === 'asteroids' && (
        <div className="card">
          <h2>Near-Earth Asteroids (Today)</h2>
          {data.near_earth_objects && Object.values(data.near_earth_objects).length > 0 ? (
            Object.values(data.near_earth_objects)[0].map((asteroid) => (
              <div key={asteroid.id} className="asteroid-item">
                <p><strong>{asteroid.name}</strong></p>
                <p>Estimated Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
                <p>Close Approach Date: {asteroid.close_approach_data[0]?.close_approach_date}</p>
              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      )}

      {!loading && data && activeView === 'mars' && (
        <div className="card">
          <h2>Mars Weather</h2>
          {Object.keys(data).filter((key) => key !== 'sol_keys' && key !== 'validity_checks').map((sol) => (
            <div key={sol} className="mars-weather-item">
              <p><strong>Sol {sol}</strong></p>
              <p>Avg Temp: {data[sol].AT?.av ?? 'N/A'}°C</p>
              <p>Pressure: {data[sol].PRE?.av ?? 'N/A'} Pa</p>
              <p>Wind Speed: {data[sol].HWS?.av ?? 'N/A'} m/s</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
