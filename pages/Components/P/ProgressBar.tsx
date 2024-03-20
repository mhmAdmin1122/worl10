

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = ({percentage}:any) => {
//   const [progressWidth, setProgressWidth] = useState(0);
  
  const [progressWidth, setProgressWidth] = useState(0);
  const countingRef = useRef(null);
  const [inViewRef, inView] = useInView();

  useEffect(() => {
    setProgressWidth(percentage);
  }, [percentage]);
  
  useEffect(() => {
    

    if (inView) {
      const duration = 5000; // Animation duration in milliseconds
      const increment = Math.ceil(progressWidth / (duration / 16)); // Update every 16ms for smoother animation

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current <= progressWidth) {
            setProgressWidth(current);
        } else {
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, progressWidth]);

  return (
    <div className="progress-bar-container w-[120px] bg-black h-3">
      <div className="progress-bar bg-blue-500" style={{ width: `${progressWidth}%` }}></div>
    </div>
  );
};

export default ProgressBar;
