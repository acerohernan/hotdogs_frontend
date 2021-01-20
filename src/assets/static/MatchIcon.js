import * as React from "react";

function MatchIcon(props) {
  return (
    <svg
      width={326.871}
      height={122.021}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="86.564 13.989 326.871 122.021"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-shiny-gradient"
          x1={0.043}
          x2={0.957}
          y1={0.297}
          y2={0.703}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffb200" />
          <stop offset={0.5} stopColor="#e10057" />
          <stop offset={1} stopColor="#5A1A80" />
        </linearGradient>
        <linearGradient
          id="prefix__editing-shiny-gradient2"
          x1={0}
          x2={0}
          y1={0}
          y2={1}
        >
          <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
          <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter
          id="prefix__editing-shiny2"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feMorphology radius={2} />
        </filter>
        <filter
          id="prefix__editing-shiny"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#fff" result="flood" />
          <feConvolveMatrix
            in="SourceGraphic"
            result="conv"
            order="8,8"
            divisor={1}
            kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
          />
          <feOffset dy={4} in="conv" result="offset" />
          <feComposite operator="in" in="flood" in2="offset" result="comp" />
          <feGaussianBlur in="offset" stdDeviation={3} result="shadow" />
          <feColorMatrix
            in="shadow"
            values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
            result="dark-shadow"
          />
          <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
          <feOffset dy={2} in="conv" result="offset-2" />
          <feComposite
            operator="out"
            in="offset"
            in2="offset-2"
            result="edge-diff"
          />
          <feGaussianBlur in="edge-diff" stdDeviation={1} result="edge-blur" />
          <feColorMatrix
            in="edge-blur"
            result="edge-shadow"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feComposite
            operator="in"
            in="edge-shadow"
            in2="offset"
            result="edge-shadow-in"
          />
          <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
          <feMerge result="out">
            <feMergeNode in="offset-shadow" />
            <feMergeNode in="comp" />
            <feMergeNode in="edge-shadow-final" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-shiny)">
        <path
          d="M6.53 0H-.83l11.58-42.24h13.38l2.94 24.13 11.91-24.13h11.2l1.15 31.62q.25 6.27 3.33 8.19-.71 1.28-2.76 2.49-2.04 1.22-4.76 1.22-2.72 0-4.32-.77t-2.5-2.05q-1.6-2.3-1.6-6.72v-19.77L26.11 0h-7.93L13.7-28.74 6.53 0zm53.66-1.92q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43zM73.7-27.9q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67zM98.62-6.4q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm53.25-20.22q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zM185.79-7.1q0 2.81 2.88 3.64-.7 2.37-3.45 3.65-2.31 1.09-4.84 1.09-2.52 0-3.84-.67-1.31-.67-2.01-1.76-1.15-1.67-1.15-4.8 0-1.86 1.02-6.98l.9-4.86q1.08-5.57 1.08-7.62 0-3.58-1.98-3.58-2.5 0-4.1 3.65-.64 1.4-1.08 3.52L164.86 0 152 1.28l9.02-46.08 12.87-1.28-.51 2.56q-1.8 9.86-3.33 13.18 3.58-3.58 10.17-3.58 6.98 0 8.26 4.61.45 1.47.45 2.75t-.1 2.27q-.09.99-.41 2.79l-.84 4.6-1.47 7.24q-.32 1.47-.32 2.56zm27.2-15.36q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.92 1.44-1.31 1.44-1.31 3.24 0 1.28 1.03 2.3 1.47 1.41 5.24 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.68-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7z"
          fill="url(#prefix__editing-shiny-gradient)"
          transform="translate(138.237 98.672)"
        />
      </g>
      <g filter="url(#prefix__editing-shiny2)">
        <path
          d="M6.53 0H-.83l11.58-42.24h13.38l2.94 24.13 11.91-24.13h11.2l1.15 31.62q.25 6.27 3.33 8.19-.71 1.28-2.76 2.49-2.04 1.22-4.76 1.22-2.72 0-4.32-.77t-2.5-2.05q-1.6-2.3-1.6-6.72v-19.77L26.11 0h-7.93L13.7-28.74 6.53 0zm53.66-1.92q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43zM73.7-27.9q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67zM98.62-6.4q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63zm53.25-20.22q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zM185.79-7.1q0 2.81 2.88 3.64-.7 2.37-3.45 3.65-2.31 1.09-4.84 1.09-2.52 0-3.84-.67-1.31-.67-2.01-1.76-1.15-1.67-1.15-4.8 0-1.86 1.02-6.98l.9-4.86q1.08-5.57 1.08-7.62 0-3.58-1.98-3.58-2.5 0-4.1 3.65-.64 1.4-1.08 3.52L164.86 0 152 1.28l9.02-46.08 12.87-1.28-.51 2.56q-1.8 9.86-3.33 13.18 3.58-3.58 10.17-3.58 6.98 0 8.26 4.61.45 1.47.45 2.75t-.1 2.27q-.09.99-.41 2.79l-.84 4.6-1.47 7.24q-.32 1.47-.32 2.56zm27.2-15.36q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.92 1.44-1.31 1.44-1.31 3.24 0 1.28 1.03 2.3 1.47 1.41 5.24 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.68-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7z"
          fill="url(#prefix__editing-shiny-gradient2)"
          transform="translate(138.12 98.68)"
        />
      </g>
      <style />
    </svg>
  );
}

export default MatchIcon;