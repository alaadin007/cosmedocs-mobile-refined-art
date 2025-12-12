import { ReactNode, useRef, useState, useEffect, HTMLAttributes } from 'react';

interface LazyMotionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, transform: 'translateY(20px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
  },
  slideLeft: {
    initial: { opacity: 0, transform: 'translateX(-20px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  slideRight: {
    initial: { opacity: 0, transform: 'translateX(20px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
  },
  scale: {
    initial: { opacity: 0, transform: 'scale(0.95)' },
    animate: { opacity: 1, transform: 'scale(1)' },
  },
};

export default function LazyMotion({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = '',
  style,
  ...props
}: LazyMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const anim = animations[animation];
  const currentStyle = isVisible ? anim.animate : anim.initial;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...currentStyle,
        transition: `all ${duration}s ease-out ${delay}s`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
