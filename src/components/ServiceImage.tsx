"use client";

import type { ReactElement } from "react";

export default function ServiceImage({
  service,
  className = "",
}: {
  service: {
    slug: string;
    title: string;
    color: string;
    gradient: string;
  };
  className?: string;
}) {
  const patterns: Record<string, ReactElement> = {
    "website-modern": (
      <svg viewBox="0 0 800 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="#0a0a1a" />
        <rect x="100" y="60" width="600" height="30" rx="4" fill="url(#wg1)" opacity="0.5" />
        <rect x="100" y="120" width="280" height="220" rx="8" fill="#00f0ff" opacity="0.08" stroke="#00f0ff" strokeWidth="1" strokeOpacity="0.2" />
        <rect x="420" y="120" width="280" height="100" rx="8" fill="#8b5cf6" opacity="0.08" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.2" />
        <rect x="420" y="240" width="130" height="100" rx="8" fill="#ec4899" opacity="0.08" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.2" />
        <rect x="570" y="240" width="130" height="100" rx="8" fill="#06b6d4" opacity="0.08" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="140" cy="220" r="30" fill="none" stroke="#00f0ff" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="140" y1="190" x2="140" y2="170" stroke="#00f0ff" strokeWidth="2" strokeOpacity="0.6" />
        <rect x="170" y="210" width="120" height="8" rx="4" fill="#00f0ff" opacity="0.2" />
        <rect x="170" y="225" width="80" height="6" rx="3" fill="#ffffff" opacity="0.1" />
        <rect x="170" y="238" width="100" height="6" rx="3" fill="#ffffff" opacity="0.08" />
        <rect x="440" y="150" width="200" height="12" rx="6" fill="#8b5cf6" opacity="0.2" />
        <rect x="440" y="175" width="160" height="8" rx="4" fill="#ffffff" opacity="0.1" />
        <rect x="440" y="192" width="180" height="8" rx="4" fill="#ffffff" opacity="0.07" />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={50 + i * 180} cy={380} r="2" fill="#00f0ff" opacity={0.2 + i * 0.1}>
            <animate attributeName="opacity" values={`${0.2 + i * 0.1};${0.6 + i * 0.05};${0.2 + i * 0.1}`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    ),
    "webapp-saas": (
      <svg viewBox="0 0 800 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="#0a0a1a" />
        <rect x="60" y="40" width="680" height="320" rx="12" fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.2" />
        <rect x="60" y="40" width="200" height="320" rx="12" fill="#a855f7" opacity="0.05" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.15" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="80" y={70 + i * 50} width="160" height="30" rx="6" fill="#a855f7" opacity={0.1 + i * 0.05} />
            <circle cx="96" cy={85 + i * 50} r="8" fill="#ec4899" opacity="0.3" />
          </g>
        ))}
        <rect x="290" y="70" width="420" height="60" rx="8" fill="#ec4899" opacity="0.06" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.15" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={310 + i * 65} y="90" width="50" height="25" rx="4" fill="#ec4899" opacity={0.08 + i * 0.03} />
        ))}
        {[0, 1].map((r) =>
          [0, 1, 2].map((c) => (
            <rect key={`${r}-${c}`} x={290 + c * 140} y={150 + r * 100} width="130" height="85" rx="8" fill="url(#wg2)" opacity="0.06" stroke="#a855f7" strokeWidth="0.5" strokeOpacity="0.2" />
          ))
        )}
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={400 + i * 50} cy={300} r="2" fill="#a855f7" opacity="0.4">
            <animate attributeName="r" values="2;4;2" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    ),
    dashboard: (
      <svg viewBox="0 0 800 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0a0a1a" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={60 + i * 180} y="40" width="160" height="100" rx="8" fill="#06b6d4" opacity="0.06" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.2" />
            <rect x={80 + i * 180} y="65" width="40" height="6" rx="3" fill="#34d399" opacity="0.4" />
            <rect x={80 + i * 180} y="80" width="80" height="14" rx="4" fill="#06b6d4" opacity="0.3" />
            <text x={80 + i * 180} y="115" fill="#06b6d4" fontSize="10" opacity="0.5">+{15 + i * 8}%</text>
          </g>
        ))}
        <rect x="60" y="160" width="400" height="200" rx="8" fill="#06b6d4" opacity="0.04" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.15" />
        <polyline points="80,320 140,280 200,300 260,240 320,260 380,200 440,220" fill="none" stroke="#34d399" strokeWidth="2" strokeOpacity="0.5" />
        <polyline points="80,340 140,310 200,320 260,290 320,300 380,270 440,250" fill="none" stroke="#06b6d4" strokeWidth="2" strokeOpacity="0.3" />
        {[80, 140, 200, 260, 320, 380, 440].map((x, i) => (
          <circle key={i} cx={x} cy={[320, 280, 300, 240, 260, 200, 220][i]} r="3" fill="#34d399" opacity="0.8">
            <animate attributeName="r" values="3;5;3" dur={`${1 + i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <rect x="480" y="160" width="280" height="90" rx="8" fill="#06b6d4" opacity="0.04" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.15" />
        <rect x="480" y="270" width="280" height="90" rx="8" fill="#34d399" opacity="0.04" stroke="#34d399" strokeWidth="0.5" strokeOpacity="0.15" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={500 + i * 36} y={240 - (20 + i * 5 + Math.sin(i) * 10)} width="24" height={20 + i * 5 + Math.sin(i) * 10} rx="3" fill="#06b6d4" opacity={0.15 + i * 0.05} />
        ))}
      </svg>
    ),
    "ai-sales": (
      <svg viewBox="0 0 800 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0a0a1a" />
        <circle cx="400" cy="200" r="80" fill="none" stroke="#fb923c" strokeWidth="1" strokeOpacity="0.2">
          <animateTransform attributeName="transform" type="rotate" from="0 400 200" to="360 400 200" dur="30s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="200" r="120" fill="none" stroke="#ec4899" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="10 5">
          <animateTransform attributeName="transform" type="rotate" from="360 400 200" to="0 400 200" dur="25s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="200" r="40" fill="#fb923c" opacity="0.1" stroke="#fb923c" strokeWidth="1.5" strokeOpacity="0.4" />
        <text x="400" y="208" textAnchor="middle" fill="#fb923c" fontSize="28" fontWeight="bold" opacity="0.8">AI</text>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60 * Math.PI) / 180;
          return (
            <g key={i}>
              <line x1={400 + Math.cos(angle) * 55} y1={200 + Math.sin(angle) * 55} x2={400 + Math.cos(angle) * 90} y2={200 + Math.sin(angle) * 90} stroke="#fb923c" strokeWidth="0.5" strokeOpacity="0.3" />
              <circle cx={400 + Math.cos(angle) * 100} cy={200 + Math.sin(angle) * 100} r="12" fill="#ec4899" opacity="0.1" stroke="#ec4899" strokeWidth="0.5" strokeOpacity="0.3" />
            </g>
          );
        })}
        <rect x="60" y="80" width="150" height="40" rx="8" fill="#fb923c" opacity="0.06" stroke="#fb923c" strokeWidth="0.5" strokeOpacity="0.2" />
        <rect x="60" y="280" width="150" height="40" rx="8" fill="#ec4899" opacity="0.06" stroke="#ec4899" strokeWidth="0.5" strokeOpacity="0.2" />
        <rect x="590" y="80" width="150" height="40" rx="8" fill="#fb923c" opacity="0.06" stroke="#fb923c" strokeWidth="0.5" strokeOpacity="0.2" />
        <rect x="590" y="280" width="150" height="40" rx="8" fill="#ec4899" opacity="0.06" stroke="#ec4899" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    ),
    "ai-customer-service": (
      <svg viewBox="0 0 800 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="400" fill="#0a0a1a" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x={100 + i * 130} y="80" width="110" height="60" rx="16" fill={i === 2 ? "#60a5fa" : "#a855f7"} opacity={i === 2 ? 0.15 : 0.06} stroke={i === 2 ? "#60a5fa" : "#a855f7"} strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx={118 + i * 130} cy="100" r="8" fill={i === 2 ? "#60a5fa" : "#a855f7"} opacity="0.4" />
            <rect x={132 + i * 130} y="95" width="50" height="4" rx="2" fill="#ffffff" opacity="0.15" />
            <rect x={132 + i * 130} y="105" width="35" height="4" rx="2" fill="#ffffff" opacity="0.1" />
            <rect x={100 + i * 130} y="150" width="110" height="40" rx="16" fill="#60a5fa" opacity="0.08" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.2" />
            <rect x={115 + i * 130} y="160" width="80" height="4" rx="2" fill="#60a5fa" opacity="0.2" />
            <rect x={115 + i * 130} y="170" width="60" height="4" rx="2" fill="#ffffff" opacity="0.1" />
          </g>
        ))}
        <rect x="200" y="240" width="400" height="120" rx="12" fill="#60a5fa" opacity="0.05" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="240" cy="300" r="25" fill="#60a5fa" opacity="0.1" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.3" />
        <text x="240" y="308" textAnchor="middle" fill="#60a5fa" fontSize="18" fontWeight="bold" opacity="0.6">AI</text>
        <rect x="280" y="280" width="280" height="8" rx="4" fill="#60a5fa" opacity="0.15" />
        <rect x="280" y="296" width="220" height="6" rx="3" fill="#ffffff" opacity="0.08" />
        <rect x="280" y="310" width="250" height="6" rx="3" fill="#ffffff" opacity="0.06" />
        <rect x="280" y="330" width="180" height="8" rx="4" fill="#a855f7" opacity="0.12" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={350 + i * 50} cy="360" r="2" fill="#60a5fa" opacity={0.3 + i * 0.2}>
            <animate attributeName="opacity" values={`${0.3 + i * 0.2};0.8;${0.3 + i * 0.2}`} dur={`${1.2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    ),
  };

  return patterns[service.slug] || patterns["website-modern"];
}
