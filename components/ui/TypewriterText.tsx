"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterTextProps {
  words: readonly string[];
  className?: string;
  /** ms per character when typing */
  typingSpeed?: number;
  /** ms per character when deleting */
  deletingSpeed?: number;
  /** ms to hold a fully typed word */
  pause?: number;
}

/**
 * Cycles through `words` with a typewriter effect.
 * Under prefers-reduced-motion it simply rotates the full words.
 */
export function TypewriterText({
  words,
  className = "",
  typingSpeed = 85,
  deletingSpeed = 40,
  pause = 1500,
}: TypewriterTextProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Reduced motion: swap whole words on a timer, no per-character typing.
  useEffect(() => {
    if (!reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2500);
    return () => clearInterval(id);
  }, [reduceMotion, words.length]);

  useEffect(() => {
    if (reduceMotion) return;
    const current = words[index];
    const atFull = !deleting && sub === current.length;
    const atEmpty = deleting && sub === 0;
    const delay = atFull ? pause : atEmpty ? 400 : deleting ? deletingSpeed : typingSpeed;

    // All state transitions run inside the timeout (never synchronously in the effect body).
    const id = setTimeout(() => {
      if (atFull) {
        setDeleting(true);
      } else if (atEmpty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setSub((s) => s + (deleting ? -1 : 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [sub, deleting, index, words, reduceMotion, typingSpeed, deletingSpeed, pause]);

  const text = reduceMotion ? words[index] : words[index].slice(0, sub);

  return (
    <span className={className}>
      <span aria-live="polite">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] animate-blink bg-gradient-to-b from-primary to-secondary align-middle"
        style={{ height: "1em" }}
      />
    </span>
  );
}
