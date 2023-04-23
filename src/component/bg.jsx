import React from "react";
import './bg.css'

function Bg({className, color, height}) {
  return (
    <div className="bg-shape">
      <svg className={className}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 1920 ${height}`}
      >
        <g style={{ opacity: 0.76 }}>
          <path
            d="M1920,1335H0V80.24c246.48,67.94,445.72,78.28,579,75.92,346.28-6.11,513-102.58,904-108.37a2471.29,2471.29,0,0,1,437,32.45Z"
            transform="translate(0 -47.52)"
            style={{ fill: color}}
          />
        </g>
      </svg>
    </div>
  );
}

export default Bg;
