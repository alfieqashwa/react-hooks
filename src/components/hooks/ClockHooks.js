import React, { useState, useEffect } from 'react';

export default function ClockHooks() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []); // 🤔 still not sure...
  // update: now I'm sure after installed eslint for hooks 😃

  return <FormattedDate date={date} />;
}

const FormattedDate = ({ date }) => (
  <div>
    <h3>It is {date.toLocaleTimeString()} now.</h3>
  </div>
);
