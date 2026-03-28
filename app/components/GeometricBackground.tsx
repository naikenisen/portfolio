"use client";

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />

      {/* Dot grid */}
      <div className="geo-grid absolute inset-0" />

      {/* Floating hexagons */}
      <svg
        className="float-slow absolute top-[8%] left-[4%] h-36 w-36 opacity-[0.04]"
        viewBox="0 0 100 115"
      >
        <polygon
          points="50,2 98,27 98,88 50,113 2,88 2,27"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="0.8"
        />
      </svg>

      <svg
        className="float-medium absolute top-[28%] right-[6%] h-28 w-28 opacity-[0.04]"
        viewBox="0 0 100 115"
      >
        <polygon
          points="50,2 98,27 98,88 50,113 2,88 2,27"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="0.8"
        />
      </svg>

      <svg
        className="float-fast absolute bottom-[22%] left-[12%] h-24 w-24 opacity-[0.04]"
        viewBox="0 0 100 115"
      >
        <polygon
          points="50,2 98,27 98,88 50,113 2,88 2,27"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="0.8"
        />
      </svg>

      <svg
        className="float-slow absolute top-[55%] right-[18%] h-32 w-32 opacity-[0.03]"
        viewBox="0 0 100 115"
        style={{ animationDelay: "-7s" }}
      >
        <polygon
          points="50,2 98,27 98,88 50,113 2,88 2,27"
          fill="none"
          stroke="#10b981"
          strokeWidth="0.8"
        />
      </svg>

      <svg
        className="float-medium absolute top-[75%] left-[55%] h-20 w-20 opacity-[0.04]"
        viewBox="0 0 100 100"
        style={{ animationDelay: "-3s" }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="0.8"
        />
      </svg>

      <svg
        className="float-fast absolute top-[42%] left-[40%] h-16 w-16 opacity-[0.02]"
        viewBox="0 0 100 100"
        style={{ animationDelay: "-10s" }}
      >
        <polygon
          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
          fill="none"
          stroke="#fff"
          strokeWidth="0.6"
        />
      </svg>

      {/* Radial glow from top */}
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
