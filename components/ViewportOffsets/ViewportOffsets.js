import React, { useEffect, useState } from 'react';

const ViewportOffsets = () => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.fixed-navbar');
    const topOffset = header ? header.offsetHeight : 0;
    setTop(topOffset);

    const mq = window.matchMedia('(max-width: 767px)');
    const calcBottom = () => setBottom(mq.matches ? 62 : 0);
    calcBottom();
    mq.addEventListener ? mq.addEventListener('change', calcBottom) : mq.addListener(calcBottom);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', calcBottom) : mq.removeListener(calcBottom);
    };
  }, []);

  return <div style={{ height: top + 8, paddingBottom: bottom }} />;
};

export default ViewportOffsets;
