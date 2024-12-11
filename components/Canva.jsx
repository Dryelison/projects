import React, { useEffect } from 'react';
import './Canva.css';

const MatrixEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Ajustar dimensões do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = canvas.width / 20; // Define o número de colunas
    const drops = Array(Math.floor(columns)).fill(1);

    // Texto estilo Matrix
    const characters = '</>typeScrip</div><>221345593529<javaScript>React</>';
    const charactersArray = characters.split('');

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = '8px monospace';

      drops.forEach((y, index) => {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        const x = index * 20;

        ctx.fillText(text, x, y * 20);

        if (y * 20 > canvas.height || Math.random() > 0.95) {
          drops[index] = 0;
        }

        drops[index]++;
      });
    };

    const interval = setInterval(drawMatrix, 50);

    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix-canvas"></canvas>;
};

export default MatrixEffect;