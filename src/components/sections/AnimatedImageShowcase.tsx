import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

// Import all ENT procedure images
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
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        animation: isVisible ? `float 6s ease-in-out infinite ${delay}ms` : 'none'
      }}
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

interface AnimatedImageShowcaseProps {
  variant?: 'grid' | 'staggered' | 'horizontal';
  className?: string;
}

const AnimatedImageShowcase = ({ variant = 'grid', className }: AnimatedImageShowcaseProps) => {
  const images = [
    { src: pediatricExam, alt: 'Pediatric ENT examination at Eritage ENT Care' },
    { src: earMicroscopy, alt: 'Ear microscopy procedure for detailed diagnosis' },
    { src: otoscopyExam, alt: 'Otoscopy examination of the ear canal' },
    { src: throatExam, alt: 'Throat examination with specialized ENT equipment' },
  ];

  if (variant === 'horizontal') {
    return (
      <div className={cn('overflow-hidden py-8', className)}>
        <div className="flex gap-6 animate-scroll">
          {[...images, ...images].map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg"
              style={{ animation: `float 6s ease-in-out infinite ${index * 200}ms` }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
            className={cn(
              'aspect-square',
              index % 2 === 0 ? 'md:mt-8' : 'md:mb-8'
            )}
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
