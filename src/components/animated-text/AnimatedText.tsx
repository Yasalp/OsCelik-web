/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import "./AnimatedText.css";

interface AnimatedTextProps {
  texts?: string[];
  interval?: number;
}

const AnimatedText = ({ texts = [], interval = 3000 }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!texts || texts.length === 0) {
    return null;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500);
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <div className="animated-text-container">
      <div className="animated-text-wrapper">
        {texts.map((text, index) => (
          <span
            key={index}
            className={`animated-text ${
              index === currentIndex ? "visible" : "hidden"
            } 
              ${isAnimating ? "scaling" : ""}`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
