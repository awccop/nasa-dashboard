// frontend/src/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div className="error-boundary">Something went wrong. Please try refreshing the page.</div>;
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
