import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
      console.error("Error caught by ErrorBoundary:", event.error);
    };

    window.addEventListener("error", handleError);

    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Something went wrong.</h2>
        <p>We apologize for the inconvenience. Please try refreshing the page.</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
