import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'; // Importing the required library
import './App.css';

function App() {
  // 1. Create a state variable to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // 2. Use useEffect to create a timer when the component loads
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Update the time every second
    }, 1000);

    // 3. Cleanup the timer if the component is removed
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-wrapper">
      <div className="clock-display">
        {/* Using date-fns to format the time and date string */}
        <h1>{format(currentTime, 'hh:mm:ss a')}</h1>
        <p>{format(currentTime, 'EEEE, MMMM do, yyyy')}</p>
      </div>
    </div>
  );
}

export default App;