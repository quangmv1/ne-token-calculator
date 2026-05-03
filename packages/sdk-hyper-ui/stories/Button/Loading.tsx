
import { cn } from "../../lib/utils";
import Lottie from "lottie-react";

import LoadingAnimation from '../../public/loading.json'


interface LoadingProps {
  size?: number;
  className?: string;
  styles?: React.CSSProperties;
}

export const Loading = (props: LoadingProps) => {
  const { size= 24, className, styles } = props;

  return (
    <Lottie
      className={cn(className)}
      style={{
        width : size,
        height : size,
        ...styles,
      }}
      animationData={LoadingAnimation}
      loop={true}
    />
  );
};

