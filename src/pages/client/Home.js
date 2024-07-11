import React from 'react'

function Home({ handleLogin }) {
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Home