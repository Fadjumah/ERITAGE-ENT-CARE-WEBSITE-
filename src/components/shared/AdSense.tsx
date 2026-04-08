import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  className?: string;
}

/**
 * AdSense Component
 * 
 * Strategic ad placement guidelines for AdSense approval:
 * - Only place ads on content-rich pages (blog articles, health tips)
 * - Avoid ads on transactional pages (booking, contact forms)
 * - Maintain high content-to-ad ratio (at least 3:1)
 * - Never place ads above the fold on landing pages
 * - Ensure ads don't interfere with navigation or CTAs
 */
const AdSense = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  className = ''
}: AdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Only load ad once and only in production-like environment
    if (isLoaded.current || !adRef.current) return;
    
    try {
      // Check if adsbygoogle is available
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense loading error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container my-6 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1241677876393680"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdSense;
