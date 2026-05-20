import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  /** width:height ratio for the wrapper, prevents CLS. e.g. "16/9" */
  aspectRatio?: string;
  /** If true, fills parent (absolute inset-0). Use for background videos. */
  fill?: boolean;
  /** Distance in px before viewport to begin loading. */
  rootMargin?: string;
}

/**
 * Lazy-mounts a muted, looping, autoplaying <video> when it nears the viewport.
 * - preload="none" until visible
 * - pauses + releases resources when out of view
 * - responsive via aspectRatio wrapper (no layout shift)
 */
const LazyVideo = ({
  src,
  poster,
  className = "",
  ariaLabel,
  aspectRatio,
  fill = false,
  rootMargin = "300px",
}: LazyVideoProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || shouldLoad) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, shouldLoad]);

  // Pause when scrolled away, resume when back — saves CPU/bandwidth
  useEffect(() => {
    const el = wrapperRef.current;
    const v = videoRef.current;
    if (!el || !v || !shouldLoad) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  const wrapperStyle = aspectRatio ? { aspectRatio } : undefined;
  const wrapperCls = fill
    ? `absolute inset-0 ${className}`
    : `relative w-full ${className}`;
  const videoCls = fill
    ? "absolute inset-0 w-full h-full object-cover"
    : "w-full h-auto block";

  return (
    <div ref={wrapperRef} className={wrapperCls} style={wrapperStyle}>
      {shouldLoad && (
        <video
          ref={videoRef}
          className={videoCls}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
          aria-hidden={ariaLabel ? undefined : true}
        />
      )}
    </div>
  );
};

export default LazyVideo;
