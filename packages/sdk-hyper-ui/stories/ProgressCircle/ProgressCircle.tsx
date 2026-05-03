// Filename: ProgressCircle
// Created: ToanPS
// 29.01.2026



import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface ProgressCircleProps {
  className?: string;

  value?: number;
  size?: number;
  duration?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  indeterminate?: boolean;
}

export const ProgressCircle = ({
  value = 10,
  className,
  shape = "round",
  size = 100,
  duration = 1,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
  indeterminate,
}: ProgressCircleProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        className={cn("relative", indeterminate ? "animate-spin" : "-rotate-90")}
        height={size}
        
        version="1.1"
        viewBox={viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle
          className={cn("stroke-progress-fill", className)}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
        />

        {/* Progress */}
        <motion.circle
          className={cn("stroke-progress-indicator")}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={percentage}
          strokeLinecap={shape}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
          animate={{ strokeDashoffset: percentage }}
          initial={{ strokeDashoffset: circumference }}
          transition={{ duration: duration, ease: "easeInOut" }}
        />
      </svg>
     
    </div>
  );
};