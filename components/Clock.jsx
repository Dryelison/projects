import React, { useEffect, useState } from 'react';
import './Clock.css'; // Arquivo CSS para os estilos

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setFade(true); // Inicia o efeito de fade
      setTimeout(() => setFade(false), 500); // Remove o efeito após 500ms
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock-container">
      <h1 className={`clock-text ${fade ? 'fade-in' : ''}`}>
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </h1>
    </div>
  );
};

export default Clock;
