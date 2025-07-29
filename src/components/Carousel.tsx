import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme/ThemeProvider';

export interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
  image?: string;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  itemsPerView?: number;
  gap?: number;
  style?: React.CSSProperties;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  itemsPerView = 1,
  gap = 16,
  style
}) => {
  const { currentTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const totalSlides = Math.ceil(items.length / itemsPerView);

  useEffect(() => {
    if (autoPlay && !isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, totalSlides, isHovering]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const translateX = -currentIndex * 100;

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: currentTheme.borderRadius.lg,
        backgroundColor: currentTheme.colors.surfaces.elevated,
        border: `1px solid ${currentTheme.colors.border.primary}`,
        ...style,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main Carousel Container */}
      <div
        style={{
          display: 'flex',
          transform: `translateX(${translateX}%)`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              minWidth: '100%',
              display: 'flex',
              gap: `${gap}px`,
              padding: currentTheme.spacing[4],
            }}
          >
            {items
              .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
              .map((item) => (
                <div
                  key={item.id}
                  style={{
                    flex: `0 0 calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})`,
                  }}
                >
                  {item.content}
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            style={{
              position: 'absolute',
              left: currentTheme.spacing[2],
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: currentTheme.borderRadius.full,
              backgroundColor: currentTheme.colors.surfaces.background,
              border: `1px solid ${currentTheme.colors.border.primary}`,
              color: currentTheme.colors.text.primary,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              opacity: isHovering ? 1 : 0.7,
              transition: 'all 0.2s ease',
              zIndex: 10,
              boxShadow: currentTheme.shadows.sm,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.background;
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              right: currentTheme.spacing[2],
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: currentTheme.borderRadius.full,
              backgroundColor: currentTheme.colors.surfaces.background,
              border: `1px solid ${currentTheme.colors.border.primary}`,
              color: currentTheme.colors.text.primary,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              opacity: isHovering ? 1 : 0.7,
              transition: 'all 0.2s ease',
              zIndex: 10,
              boxShadow: currentTheme.shadows.sm,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.background;
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ›
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && totalSlides > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: currentTheme.spacing[3],
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: currentTheme.spacing[2],
            zIndex: 10,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: currentTheme.borderRadius.full,
                border: 'none',
                backgroundColor: index === currentIndex 
                  ? currentTheme.colors.primary[500] 
                  : currentTheme.colors.border.primary,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                opacity: index === currentIndex ? 1 : 0.6,
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = currentTheme.colors.primary[300];
                  e.currentTarget.style.opacity = '0.8';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = currentTheme.colors.border.primary;
                  e.currentTarget.style.opacity = '0.6';
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};