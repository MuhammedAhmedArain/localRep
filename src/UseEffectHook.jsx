import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []); // Runs once when mounted

  return <h1>Current Time: {time}</h1>;
}

export default Clock;
