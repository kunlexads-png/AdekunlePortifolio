
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const fullText = texts[currentTextIndex] ?? '';

    const delay =
      !isDeleting && currentText === fullText
        ? pauseTime
        : isDeleting
          ? deletingSpeed
          : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (currentText === fullText) {
          setIsDeleting(true);
        } else {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((index) => (index + 1) % texts.length);
        }
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    texts,
    currentTextIndex,
    currentText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span
      className="inline-block min-h-[1.5em] text-emerald-600 dark:text-emerald-400"
      aria-live="polite"
    >
      <span>{currentText || '\u00A0'}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[0.9em] bg-emerald-600 dark:bg-emerald-400 ml-1 align-middle"
        aria-hidden="true"
      />
    </span>
  );
};

export default TypingText;
