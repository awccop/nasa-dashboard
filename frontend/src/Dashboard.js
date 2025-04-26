import React, { useEffect, useState } from 'react';
import { fetchAPOD } from './api';
import './Dashboard.css';

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const apodData = await fetchAPOD();
        setData(apodData);
      } catch (err) {
        setError('Failed to fetch NASA data.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div className="status">Loading...</div>;
  if (error) return <div className="status error">{error}</div>;

  return (
    <div className="dashboard">
      <h1>NASA Dashboard</h1>
      {data && (
        <div className="card">
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} className="nasa-image" />
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
