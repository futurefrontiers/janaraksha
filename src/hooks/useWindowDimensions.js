import { useState, useEffect } from 'react';

export const useWindowDimensions = function() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  function hasWindow() {
    return typeof window !== 'undefined';
  }

  function getWindowDimensions() {
    const width = hasWindow() ? window.innerWidth : null;
    const height = hasWindow() ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow()) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [window]);

  return windowDimensions;
}