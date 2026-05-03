// Filename: CountDown
// Created: ToanPS
// 29.01.2026


import { cn } from "../../lib/utils";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface CountdownProps {
  className?: string;
  value?: number;

  size?: number;
  strokeWidth?: number;
  color?: string;
  trailColor?: string;
  loop?: boolean;
  onComplete?: () => void;
}

export const Countdown = ({
  className,
  value,
  loop = false,
  size = 50,
  color = "#FFD60A",
  trailColor = "#FFFFFF1A",
  strokeWidth = 4,
}: CountdownProps) => {
  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    return <div>{remainingTime}</div>;
  };

  return (
    <div className={cn("inline-block typo-ui-2xsmall-strong", className)}>
      <CountdownCircleTimer
        duration={value || 10}
        size={size}
        strokeWidth={strokeWidth}
        isPlaying
        colors={color as `#${string}`}
        trailColor={trailColor as `#${string}`}
        onComplete={() => ({ shouldRepeat: loop, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
