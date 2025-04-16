// frontend/src/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchAPOD } from './api';
import './Dashboard.css';

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAPOD()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching NASA data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="dashboard"><div className="loader"></div></div>;
  }
  if (error) {
    return <div className="dashboard error">Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <div className="card">
        <h2 className="title">{data.title}</h2>
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
        <p className="date">{data.date}</p>
        <p className="explanation">{data.explanation}</p>
      </div>
    </div>
  );
}

export default Dashboard;
