"use client";
import { useEffect, useState } from "react";

const RevealBlock = ({ children, className = "" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`reveal-block ${visible ? "reveal-visible" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default RevealBlock;