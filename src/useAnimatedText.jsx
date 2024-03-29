// useAnimatedText.js
import { useState, useEffect } from 'react';

function useAnimatedText(words, letterSpeed = 150, eraseSpeed = 75, delay = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, reverse ? eraseSpeed : letterSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, delay, words, letterSpeed, eraseSpeed]);

  return words[index].substring(0, subIndex);
}

export default useAnimatedText;
