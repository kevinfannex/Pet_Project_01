import { useRef, useEffect, useState } from "react";

/**
 * Simple IntersectionObserver hook.
 * Returns a tuple: [ref, inView]
 * `threshold` is the proportion of the element that must be visible before `inView` becomes true.
 */
export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [ref, inView];
}

/**
 * Helper to generate animation style based on visibility and optional delay.
 * `vis` – boolean from useInView indicating if element is in view.
 * `delay` – optional number (seconds) to stagger animations.
 */
export function rv(vis, delay = 0) {
  const base = {
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.6s ease-out ${delay}s`
  };
  return base;
}
