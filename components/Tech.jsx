import React, { useEffect } from 'react';
import './Tech.css';

const TechEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('tech-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>/&%$#';
    const charactersArray = characters.split('');

    const fontSize = 13;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const drawCode = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffea';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, index) => {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        const x = index * fontSize;

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height || Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index]++;
      });
    };

    const interval = setInterval(drawCode, 50);

    return () => clearInterval(interval);
  }, []);

  return <canvas id="tech-canvas"></canvas>;
};

export default TechEffect;