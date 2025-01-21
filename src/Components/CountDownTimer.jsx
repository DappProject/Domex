import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTime = 12 * 60 * 60 * 1000; // Initial time in milliseconds (12:00:00)

  // Get the saved end time or calculate it based on the initial time
  const getEndTime = () => {
    const savedEndTime = localStorage.getItem("endTime");
    if (savedEndTime) {
      return parseInt(savedEndTime, 10);
    }
    const newEndTime = Date.now() + initialTime;
    localStorage.setItem("endTime", newEndTime);
    return newEndTime;
  };

  const [endTime, setEndTime] = useState(getEndTime);
  const [remainingTime, setRemainingTime] = useState(endTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentRemainingTime = endTime - Date.now();

      if (currentRemainingTime <= 0) {
        // Restart the timer when it reaches 0
        const newEndTime = Date.now() + initialTime;
        localStorage.setItem("endTime", newEndTime);
        setEndTime(newEndTime);
        setRemainingTime(initialTime);
      } else {
        setRemainingTime(currentRemainingTime);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [endTime]);

  // Format time from milliseconds to HH:MM:SS
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div style={{fontFamily: "cursive",}}>
      <p className="text-base text-secondary"> {formatTime(remainingTime)}</p>
    </div>
  );
};

export default CountdownTimer;
