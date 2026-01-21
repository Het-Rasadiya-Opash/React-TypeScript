import React from 'react'
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="page">
        <h1 className="error-code">{error.status}</h1>
        <p className="error-text">{error.statusText}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="error-code">Error</h1>
      <p className="error-text">Something went wrong</p>
    </div>
  );
};

export default ErrorPage;
