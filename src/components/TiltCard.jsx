import React, { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  borderGlow = true,
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -maxTilt;
    const rY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rX);
    setRotateY(rY);

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.25,
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: rotateX === 0 && rotateY === 0 ? "transform 0.5s ease-out" : "transform 0.1s ease-out",
      }}
      className={`relative transform-gpu ${
        borderGlow
          ? "border border-[#222228] hover:border-[#E50914]/60 hover:shadow-[0_0_25px_rgba(229,9,20,0.25)]"
          : ""
      } ${className}`}
    >
      {/* Specular Glare Effect */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit z-20 transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 200px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 30, 39, 0.35), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
