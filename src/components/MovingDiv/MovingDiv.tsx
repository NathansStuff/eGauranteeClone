'use client';

import { useEffect, useState } from 'react';

interface MovingDivProps {
  children: JSX.Element;
  maximumHeight: number;
  speedOfMovement: number;
  delayBetweenMovement: number;
  initialDelay?: number;
}

export function MovingDiv({
  children,
  maximumHeight,
  speedOfMovement,
  delayBetweenMovement,
  initialDelay = 0,
}: MovingDivProps): JSX.Element {
  const [topPosition, setTopPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for moving up, -1 for moving down
  const [isInitialDelayComplete, setIsInitialDelayComplete] = useState(false);

  useEffect(() => {
    let delayTimeout: ReturnType<typeof setTimeout>;

    if (initialDelay > 0) {
      delayTimeout = setTimeout(() => {
        setIsInitialDelayComplete(true);
      }, initialDelay);
    } else {
      setIsInitialDelayComplete(true);
    }

    return () => {
      clearTimeout(delayTimeout);
    };
  }, [initialDelay]);

  useEffect(() => {
    if (!isInitialDelayComplete) {
      return;
    }

    const id = setInterval(() => {
      setTopPosition((prev) => {
        // Once it reaches the top or goes higher than the maximumHeight, change the direction
        if (prev + direction * speedOfMovement >= maximumHeight && direction === 1) {
          setDirection(-1);
          return prev + direction * speedOfMovement; // Update the position
        }

        // Once it reaches the bottom, stop the animation and wait for the delay
        if (prev <= 0 && direction === -1) {
          clearInterval(id);
          setTimeout(() => {
            setDirection(1);
          }, delayBetweenMovement);
          return prev;
        }

        // Update the position
        return prev + direction * speedOfMovement;
      });
    }, 1000); // Set the interval delay to 1000 milliseconds (1 second)

    return () => {
      clearInterval(id);
    };
  }, [maximumHeight, speedOfMovement, delayBetweenMovement, direction, isInitialDelayComplete]);

  return (
    <div className='relative'>
      <div
        data-testid='MovingDiv'
        style={{
          bottom: `${topPosition}px`,
          position: 'absolute',
          transition: `bottom 1s linear`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
