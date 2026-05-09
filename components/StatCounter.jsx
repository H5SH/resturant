"use client";
import { useEffect, useState, useRef } from "react";

export default function StatCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const isNumber = !isNaN(parseFloat(end));
    if (!isNumber) {
      setCount(end); // just render if it's text like '35+'
      return;
    }

    const endVal = parseInt(end);
    const hasPlus = end.toString().includes('+');
    
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const current = Math.min(Math.floor((progress / duration) * endVal), endVal);
      setCount(hasPlus ? `${current}+` : current);

      if (progress < duration) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{hasStarted ? count : 0}</span>;
}
