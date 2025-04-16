// frontend/src/App.js
import React from 'react';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>NASA Dashboard</h1>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
