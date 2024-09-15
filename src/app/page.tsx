"use client";

import { useEffect, useState } from "react";
import { Brain } from "threejs-brain-animation";
import "threejs-brain-animation/dist/main.css";

export default function Component() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const aspectRatio = 16 / 9;

      let width, height;

      if (containerWidth / containerHeight > aspectRatio) {
        height = Math.min(containerHeight, 500);
        width = height * aspectRatio;
      } else {
        width = Math.min(containerWidth, 800);
        height = width / aspectRatio;
      }

      setDimensions({ width, height });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100 overflow-hidden">
      <div className="w-full h-full max-w-[800px] max-h-[500px] flex items-center justify-center">
        {dimensions.width > 0 && dimensions.height > 0 && (
          <Brain width={dimensions.width} height={dimensions.height} />
        )}
      </div>
    </div>
  );
}

