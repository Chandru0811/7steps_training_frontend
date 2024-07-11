import React, { useEffect, useState } from "react";
import Admin from "./layouts/Admin";
import Client from "./layouts/Client";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticatedFromStorage =
      sessionStorage.getItem("isAuthenticated");
    if (isAuthenticatedFromStorage === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("isAuthenticated", true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("isAuthenticated");
  };

  return (
    <div>
      {isAuthenticated ? (
        <Admin handleLogout={handleLogout} />
      ) : (
        <Client handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
