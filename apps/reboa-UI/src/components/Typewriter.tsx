import { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';

export interface TypewriterProps {
  text: string;
  speed?: number;
  loop?: boolean;
  delay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  loop = false,
  delay = 1000,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!loop) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    } else {
      if (!isDeleting && currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && currentIndex === text.length) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      } else if (isDeleting && currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }
    return undefined;
  }, [currentIndex, isDeleting, text, speed, loop, delay]);

  return (
    <div className={styles.typewriterContainer}>
      <span className={styles.typewriterText}>
        {displayText}
        <span className={styles.cursor}>|</span>
      </span>
    </div>
  );
};
