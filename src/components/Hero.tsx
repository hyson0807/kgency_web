import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Button } from './Button';
import { Badge } from './Badge';
import { FadeInElement } from './FadeInElement';

export interface HeroProps {
  badge?: {
    text: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  };
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    poster?: string;
  };
  stats?: Array<{
    value: string | number;
    label: string;
    animate?: boolean;
  }>;
  features?: Array<{
    icon: string;
    text: string;
  }>;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'gradient' | 'minimal' | 'interactive';
  style?: React.CSSProperties;
}

// 반응형 훅
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export const Hero: React.FC<HeroProps> = ({
  badge,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  media,
  stats,
  features,
  backgroundImage,
  backgroundOverlay = true,
  textAlign = 'center',
  size = 'lg',
  variant = 'default',
  style
}) => {
  const { currentTheme } = useTheme();
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});
  const windowWidth = useWindowWidth();

  // Animated counter for stats
  useEffect(() => {
    if (!stats) return;
    
    stats.forEach((stat, index) => {
      if (stat.animate && typeof stat.value === 'number') {
        let startValue = 0;
        const endValue = stat.value;
        const duration = 2000; // 2 seconds
        const incrementTime = Math.abs(Math.floor(duration / endValue));
        
        const timer = setInterval(() => {
          startValue += 1;
          setAnimatedStats(prev => ({ ...prev, [index]: startValue }));
          if (startValue === endValue) {
            clearInterval(timer);
          }
        }, incrementTime);
      }
    });
  }, [stats]);


  // Animated background particles for interactive variant
  const particleElements = variant === 'interactive' ? Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      style={{
        position: 'absolute',
        width: Math.random() * 4 + 2 + 'px',
        height: Math.random() * 4 + 2 + 'px',
        backgroundColor: currentTheme.colors.primary[300],
        borderRadius: '50%',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        opacity: Math.random() * 0.5 + 0.2,
        animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
      }}
    />
  )) : [];

  const sizeConfig = {
    sm: {
      padding: `${currentTheme.spacing[16]} 0`,
      titleSize: currentTheme.typography.fontSize['3xl'],
      subtitleSize: currentTheme.typography.fontSize.xl,
      descriptionSize: currentTheme.typography.fontSize.base,
      maxWidth: '600px',
    },
    md: {
      padding: `${currentTheme.spacing[20]} 0`,
      titleSize: currentTheme.typography.fontSize['4xl'],
      subtitleSize: currentTheme.typography.fontSize['2xl'],
      descriptionSize: currentTheme.typography.fontSize.lg,
      maxWidth: '700px',
    },
    lg: {
      padding: `${currentTheme.spacing[24]} 0`,
      titleSize: currentTheme.typography.fontSize['5xl'],
      subtitleSize: currentTheme.typography.fontSize['3xl'],
      descriptionSize: currentTheme.typography.fontSize.xl,
      maxWidth: '800px',
    },
    xl: {
      padding: `${currentTheme.spacing[32]} 0`,
      titleSize: currentTheme.typography.fontSize['6xl'],
      subtitleSize: currentTheme.typography.fontSize['4xl'],
      descriptionSize: currentTheme.typography.fontSize['2xl'],
      maxWidth: '900px',
    },
  };

  const config = sizeConfig[size];

  const getBackgroundStyle = () => {
    switch (variant) {
      case 'gradient':
        return {
          background: `linear-gradient(135deg, ${currentTheme.colors.primary[600]} 0%, ${currentTheme.colors.primary[800]} 100%)`,
          color: currentTheme.colors.text.inverse,
        };
      case 'interactive':
        return {
          background: `linear-gradient(135deg, ${currentTheme.colors.primary[50]} 0%, ${currentTheme.colors.primary[100]} 100%)`,
          position: 'relative' as const,
        };
      case 'minimal':
        return {
          backgroundColor: 'transparent',
        };
      default:
        return {
          backgroundColor: backgroundImage 
            ? 'transparent' 
            : currentTheme.colors.surfaces.background,
        };
    }
  };

  const heroStyle = {
    position: 'relative' as const,
    overflow: 'hidden',
    ...getBackgroundStyle(),
    ...style,
  };

  const backgroundStyle = backgroundImage ? {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 1,
  } : {};

  const overlayStyle = backgroundImage && backgroundOverlay ? {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: variant === 'gradient' 
      ? 'rgba(0, 0, 0, 0.15)' 
      : 'rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  } : {};

  // 반응형 패딩 계산
  const getResponsivePadding = () => {
    if (windowWidth < 768) {
      // 모바일: 좌우 패딩 더 크게
      return `${config.padding} ${currentTheme.spacing[8]}`;
    } else if (windowWidth < 1024) {
      // 태블릿: 중간 패딩
      return `${config.padding} ${currentTheme.spacing[6]}`;
    } else {
      // 데스크톱: 기본 패딩
      return `${config.padding} ${currentTheme.spacing[6]}`;
    }
  };

  const containerStyle = {
    position: 'relative' as const,
    zIndex: 3,
    maxWidth: '1400px',
    margin: '0 auto',
    padding: getResponsivePadding(),
    display: 'grid',
    gridTemplateColumns: media ? '1fr 1fr' : '1fr',
    gap: currentTheme.spacing[12],
    alignItems: 'center',
    minHeight: media ? 'auto' : '60vh',
  };

  // 콘텐츠 영역에 추가 패딩 적용
  const getContentPadding = () => {
    if (windowWidth < 768) {
      // 모바일: 텍스트 영역에 좌우 패딩 추가
      return `0 ${currentTheme.spacing[4]}`;
    }
    return '0';
  };

  const contentStyle = {
    textAlign: textAlign,
    maxWidth: textAlign === 'center' ? config.maxWidth : '100%',
    margin: textAlign === 'center' ? '0 auto' : '0',
    padding: getContentPadding(),
  };

  // 배경 이미지에 가장 잘 대비되는 색상 옵션들:
  // 옵션 1: 순수 흰색 계열 (현재)
  // 옵션 2: '#fef9e3' (따뜻한 크림색) - 더 부드러운 대비
  // 옵션 3: '#f0f4ff' (차가운 밝은 파란색) - 시원한 느낌
  // 옵션 4: '#fffbeb' (따뜻한 아이보리) - 고급스러운 느낌
  
  const titleColor = variant === 'gradient' || backgroundImage 
    ? '#ffffff'  // 순수 흰색 - 최고 대비
    : currentTheme.colors.text.primary;

  const subtitleColor = variant === 'gradient' || backgroundImage 
    ? '#f0f9ff'  // 매우 밝은 파란색 틴트 - 시각적 계층
    : currentTheme.colors.text.accent;

  const descriptionColor = variant === 'gradient' || backgroundImage 
    ? '#e2e8f0'  // 밝은 회색 - 읽기 쉬운 대비
    : currentTheme.colors.text.secondary;

  const mediaStyle = {
    borderRadius: currentTheme.borderRadius.xl,
    overflow: 'hidden',
    boxShadow: currentTheme.shadows.xl,
  };

  const ActionButton: React.FC<{ action: { text: string; onClick?: () => void; href?: string }; variant: 'primary' | 'secondary' }> = ({ action, variant: btnVariant }) => {
    const props = {
      variant: btnVariant,
      size: 'lg' as const,
      onClick: action.onClick,
      style: { minWidth: '140px' }
    };

    if (action.href) {
      return (
        <a href={action.href} style={{ textDecoration: 'none' }}>
          <Button {...props}>
            {action.text}
          </Button>
        </a>
      );
    }

    return <Button {...props}>{action.text}</Button>;
  };

  return (
    <section style={heroStyle}>
      {backgroundImage && <div style={backgroundStyle} />}
      {backgroundImage && backgroundOverlay && <div style={overlayStyle} />}
      
      <div style={containerStyle}>
        <div style={contentStyle}>
          {badge && (
            <FadeInElement delay={0.1} direction="up">
              <div style={{ marginBottom: currentTheme.spacing[4] }}>
                <Badge variant={badge.variant} size="md">
                  {badge.text}
                </Badge>
              </div>
            </FadeInElement>
          )}

          {subtitle && (
            <FadeInElement delay={0.3} direction="up">
              <h2 style={{
                fontSize: config.subtitleSize,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: subtitleColor,
                fontFamily: currentTheme.typography.fontFamily.display,
                margin: 0,
                marginBottom: currentTheme.spacing[2],
                lineHeight: currentTheme.typography.lineHeight.tight,
                textShadow: backgroundImage ? '1px 1px 6px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 0, 0, 0.3)' : 'none',
              }}>
                {subtitle}
              </h2>
            </FadeInElement>
          )}

          <FadeInElement delay={0.5} direction="up">
            <h1 style={{
              fontSize: config.titleSize,
              fontWeight: currentTheme.typography.fontWeight.bold,
              color: titleColor,
              fontFamily: currentTheme.typography.fontFamily.display,
              margin: 0,
              marginBottom: description ? currentTheme.spacing[6] : currentTheme.spacing[8],
              lineHeight: currentTheme.typography.lineHeight.tight,
              letterSpacing: currentTheme.typography.letterSpacing.tight,
              textShadow: backgroundImage ? '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 12px rgba(0, 0, 0, 0.3)' : 'none',
            }}>
              {title}
            </h1>
          </FadeInElement>

          {description && (
            <FadeInElement delay={0.7} direction="up">
              <p style={{
                fontSize: config.descriptionSize,
                color: descriptionColor,
                fontFamily: currentTheme.typography.fontFamily.primary,
                lineHeight: currentTheme.typography.lineHeight.relaxed,
                maxWidth: textAlign === 'center' ? '600px' : '100%',
                margin: textAlign === 'center' ? `0 auto ${currentTheme.spacing[8]}` : `0 0 ${currentTheme.spacing[8]}`,
                textShadow: backgroundImage ? '1px 1px 4px rgba(0, 0, 0, 0.6), 0 0 6px rgba(0, 0, 0, 0.3)' : 'none',
              }}>
                {description}
              </p>
            </FadeInElement>
          )}

          {(primaryAction || secondaryAction) && (
            <FadeInElement delay={0.9} direction="up">
              <div style={{
                display: 'flex',
                gap: currentTheme.spacing[4],
                justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
                flexWrap: 'wrap',
              }}>
                {primaryAction && (
                  <ActionButton action={primaryAction} variant="primary" />
                )}
                {secondaryAction && (
                  <ActionButton action={secondaryAction} variant="secondary" />
                )}
              </div>
            </FadeInElement>
          )}

          {features && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: currentTheme.spacing[4],
              justifyContent: textAlign === 'center' ? 'center' : 'flex-start',
              marginTop: currentTheme.spacing[8],
            }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: currentTheme.spacing[2],
                    padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
                    backgroundColor: variant === 'gradient' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : currentTheme.colors.surfaces.panel,
                    borderRadius: currentTheme.borderRadius.full,
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: variant === 'gradient' 
                      ? currentTheme.colors.text.inverse 
                      : currentTheme.colors.text.secondary,
                  }}
                >
                  <span style={{ fontSize: '1.2em' }}>{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          )}

          {stats && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`,
              gap: currentTheme.spacing[8],
              marginTop: currentTheme.spacing[12],
              padding: currentTheme.spacing[6],
              backgroundColor: variant === 'gradient' 
                ? 'rgba(255, 255, 255, 0.1)' 
                : currentTheme.colors.surfaces.elevated,
              borderRadius: currentTheme.borderRadius.xl,
              backdropFilter: 'blur(10px)',
            }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: currentTheme.typography.fontSize['3xl'],
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: variant === 'gradient' 
                      ? currentTheme.colors.text.inverse 
                      : currentTheme.colors.primary[600],
                    marginBottom: currentTheme.spacing[2],
                  }}>
                    {stat.animate && typeof stat.value === 'number' 
                      ? (animatedStats[index] || 0).toLocaleString()
                      : typeof stat.value === 'string' 
                        ? stat.value 
                        : stat.value.toLocaleString()
                    }
                  </div>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: variant === 'gradient' 
                      ? 'rgba(255, 255, 255, 0.8)' 
                      : currentTheme.colors.text.secondary,
                    fontWeight: currentTheme.typography.fontWeight.medium,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {media && (
          <div style={mediaStyle}>
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt={media.alt || ''}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            ) : (
              <video
                src={media.src}
                poster={media.poster}
                controls
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            )}
          </div>
        )}
      </div>
      
      {/* Animated particles for interactive variant */}
      {variant === 'interactive' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1,
        }}>
          {particleElements}
        </div>
      )}
      

      
      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
      `}</style>
    </section>
  );
};