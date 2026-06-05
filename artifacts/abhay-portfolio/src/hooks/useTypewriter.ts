import { useState, useEffect } from 'react';

interface TypewriterOptions {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
}: TypewriterOptions) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (isTypingComplete) return;

    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      setText((current) => 
        isDeleting 
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      );

      let speed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === fullText) {
        speed = pauseDuration;
        if (i === strings.length - 1) {
          setIsTypingComplete(true);
          return;
        }
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        speed = 500;
      }

      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, typingSpeed, deletingSpeed, pauseDuration, isTypingComplete]);

  return { text, isTypingComplete };
}
