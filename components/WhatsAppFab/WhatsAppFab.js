import React from 'react';

export default function WhatsAppFab({ phone = '+17148635486', message = 'Hi! I need plumbing help.' }) {
  const href = `https://wa.me/${phone.replace(/[^\d+]/g, '')}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <span className="icon" aria-hidden="true">
        {/* WhatsApp SVG icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 2C6.486 2 2.001 6.485 2.001 12c0 1.981.586 3.828 1.592 5.374L2 22l4.77-1.559A9.94 9.94 0 0 0 12 22c5.515 0 10-4.485 10-10s-4.485-10-10-10Zm5.78 14.137c-.243.685-1.183 1.254-1.86 1.337-.5.063-1.13.115-3.268-.676-2.739-1.06-4.493-3.672-4.63-3.839-.134-.169-1.107-1.475-1.107-2.816 0-1.341.709-1.997.959-2.273.244-.276.538-.347.716-.347.178 0 .357.002.512.01.164.008.386-.062.604.462.243.584.828 2.025.902 2.173.074.147.123.317.023.508-.097.191-.147.308-.288.472-.14.163-.304.365-.435.492-.142.14-.29.295-.125.572.164.276.731 1.203 1.571 1.946 1.08.932 1.99 1.223 2.266 1.358.275.135.435.117.596-.071.16-.188.686-.802.87-1.077.184-.276.373-.229.615-.137.242.092 1.533.723 1.797.853.264.131.439.197.504.307.065.11.065.64-.177 1.325Z" fill="currentColor"/>
        </svg>
      </span>
    </a>
  );
}

