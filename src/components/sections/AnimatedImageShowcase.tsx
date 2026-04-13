import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

import pediatricExam from '@/assets/ent-pediatric-exam.jpg';
import earMicroscopy from '@/assets/ent-ear-microscopy.jpg';
import otoscopyExam from '@/assets/ent-otoscopy-exam.jpg';
import throatExam from '@/assets/ent-throat-exam.jpg';

interface AnimatedImageProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
}

const AnimatedImage = ({ src, alt, delay = 0, className }: AnimatedImageProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden rounded-xl shadow-lg transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
};

// ── Slide-Left Carousel ────────────────────────────────────────────────────────
interface SlideLeftProps {
  images: { src: string; alt: string }[];
  className?: string;
}

const SlideLeftCarousel = ({ images, className }: SlideLeftProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const advance = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [advance, paused]);

  return (
    <div
      ref={ref}
      className={cn(
        'relative max-w-4xl mx-auto transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide track */}
      <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                className={cn(
                  'w-full h-full object-cover transition-transform duration-[7000ms] ease-linear',
                  i === current ? 'scale-110' : 'scale-100'
                )}
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Caption */}
              <p className="absolute bottom-4 left-5 text-white/90 text-sm font-medium tracking-wide drop-shadow">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-1 rounded-full transition-all duration-500',
              i === current
                ? 'w-10 bg-primary'
                : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/60'
            )}
          />
        ))}
      </div>
    </div>
  );
};

// ── Public component ───────────────────────────────────────────────────────────
interface AnimatedImageShowcaseProps {
  variant?: 'grid' | 'staggered' | 'horizontal' | 'slideLeft';
  className?: string;
}

const AnimatedImageShowcase = ({ variant = 'grid', className }: AnimatedImageShowcaseProps) => {
  const images = [
    { src: pediatricExam,  alt: 'Pediatric ENT examination at Eritage ENT Care' },
    { src: earMicroscopy,  alt: 'Ear microscopy procedure for detailed diagnosis' },
    { src: otoscopyExam,   alt: 'Otoscopy examination of the ear canal' },
    { src: throatExam,     alt: 'Throat examination with specialised ENT equipment' },
  ];

  if (variant === 'slideLeft') {
    return <SlideLeftCarousel images={images} className={className} />;
  }

  if (variant === 'horizontal') {
    return (
      <div className={cn('overflow-hidden py-8', className)}>
        <div className="flex gap-6 animate-scroll">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'staggered') {
    return (
      <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-4', className)}>
        {images.map((img, index) => (
          <AnimatedImage
            key={index}
            src={img.src}
            alt={img.alt}
            delay={index * 150}
            className={cn('aspect-square', index % 2 === 0 ? 'md:mt-8' : 'md:mb-8')}
          />
        ))}
      </div>
    );
  }

  // Default grid variant
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6', className)}>
      {images.map((img, index) => (
        <AnimatedImage
          key={index}
          src={img.src}
          alt={img.alt}
          delay={index * 150}
          className="aspect-[4/3]"
        />
      ))}
    </div>
  );
};

export default AnimatedImageShowcase;
