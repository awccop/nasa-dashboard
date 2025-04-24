import React from 'react';
import Dashboard from './Dashboard';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>NASA Dashboard</h1>
      </header>
      <main>
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;