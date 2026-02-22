import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  // Initialize state with the current date
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the state every second
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1>{format(now, 'hh:mm:ss a')}</h1>
        <p>{format(now, 'EEEE, MMMM do, yyyy')}</p>
      </div>
    </div>
  );
}

export default App;