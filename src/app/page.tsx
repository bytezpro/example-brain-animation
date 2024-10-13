"use client";

import { Brain } from "threejs-brain-animation";

export default function Component() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Brain style={{ width: "600px", height: "600px" }} />
    </div>
  );
}

