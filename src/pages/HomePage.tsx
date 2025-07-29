import React, { useState, useEffect } from 'react';
import webHomeImage from '../assets/images/webHome.jpg';
import kgencyLogo from '../assets/images/kgency_logo.png';
import {
  Layout,
  Container,
  Section,
  Grid,
  Navbar,
  Hero,
  FeatureCard,
  Card,
  TeamCard,
  AppStoreCard,
  Button,
  ContactForm,
  Footer,
  Badge,
  FadeInElement
} from '../components';
import { useTheme } from '../theme/ThemeProvider';

// CSS animations for global connection hub
const animationStyles = `
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .country-node {
    transition: all 0.3s ease;
  }
  
  .country-node:hover {
    transform: scale(1.1) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = animationStyles;
  document.head.appendChild(styleSheet);
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

export const HomePage: React.FC = () => {
  const { currentTheme } = useTheme();
  const windowWidth = useWindowWidth();

  // 반응형 columns 계산
  const getColumns = (mobile: 1 | 2 | 3 | 4 | 6 | 12, tablet: 1 | 2 | 3 | 4 | 6 | 12, desktop: 1 | 2 | 3 | 4 | 6 | 12): 1 | 2 | 3 | 4 | 6 | 12 => {
    if (windowWidth < 768) return mobile;
    if (windowWidth < 1024) return tablet;
    return desktop;
  };

  return (
    <Layout>
      {/* Navigation */}
      <Navbar
        logo="Kgency"
        items={[
          { label: '서비스 소개', href: '#about' },
          { label: '기업 서비스', href: '#companies' },
          { label: '구직자 서비스', href: '#jobseekers' },
          { label: '고객 리뷰', href: '#reviews' },
          { label: '고객지원', href: '#support' }
        ]}
        sticky={true}
      />

      {/* Hero Section */}
      <Hero
        badge={{ text: "글로벌 인재 매칭 플랫폼", variant: "primary" }}
        title="외국인 인재와 기업을 연결하는 스마트 매칭 플랫폼"
        subtitle="양방향 매칭으로 즉시 면접 확정"
        description="기업과 구직자가 서로 관심을 표현하면 바로 면접이 성사되는 혁신적인 채용 시스템"
        primaryAction={{ 
          text: "무료로 시작하기", 
          href: "/register" 
        }}
        secondaryAction={{ 
          text: "서비스 소개 보기", 
          href: "#about" 
        }}
        backgroundImage={webHomeImage}
        backgroundOverlay={true}
        variant="gradient"
        size="xl"
      />


      {/* 글로벌 인재 연결 허브 섹션 */}
      <Section spacing="xl" id="about" style={{ backgroundColor: currentTheme.colors.surfaces.background }}>
        <Container maxWidth="xl">
          <Card style={{ 
            marginBottom: currentTheme.spacing[8],
            backgroundColor: currentTheme.colors.surfaces.background,
            border: 'none',
            boxShadow: 'none'
          }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[6],
              color: currentTheme.colors.text.primary,
              textAlign: 'center',
            }}>
              글로벌 인재 연결 허브
            </h2>
            
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary,
              textAlign: 'center',
              marginBottom: currentTheme.spacing[8],
            }}>
              한국을 중심으로 12개국의 우수한 인재들과 기업을 연결합니다
            </p>

            {/* Global Connection Visualization */}
            <div style={{
              position: 'relative',
              minHeight: '500px',
              background: `linear-gradient(135deg, rgba(94, 106, 210, 0.1) 0%, ${currentTheme.colors.surfaces.background} 100%)`,
              borderRadius: currentTheme.borderRadius.xl,
              padding: currentTheme.spacing[8],
              overflow: 'hidden'
            }}>
              {/* Central Hub - Korea */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120px',
                height: '120px',
                backgroundColor: currentTheme.colors.primary[500],
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 32px ${currentTheme.colors.primary[200]}`,
                zIndex: 10
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '4px' }}>🇰🇷</div>
                <div style={{
                  color: 'white',
                  fontSize: currentTheme.typography.fontSize.sm,
                  fontWeight: currentTheme.typography.fontWeight.semibold,
                  textAlign: 'center'
                }}>
                  한국<br/>Korea
                </div>
              </div>

              {/* Country Nodes */}
              {[
                { flag: '🇻🇳', name: 'Vietnam', nameKr: '베트남', angle: 15, distance: 400 },
                { flag: '🇹🇭', name: 'Thailand', nameKr: '태국', angle: 45, distance: 200 },
                { flag: '🇮🇩', name: 'Indonesia', nameKr: '인도네시아', angle: 85, distance: 175 },
                { flag: '🇵🇭', name: 'Philippines', nameKr: '필리핀', angle: 130, distance: 220 },
                { flag: '🇲🇲', name: 'Myanmar', nameKr: '미얀마', angle: 160, distance: 320 },
                { flag: '🇰🇭', name: 'Cambodia', nameKr: '캄보디아', angle: 175, distance: 420 },
                { flag: '🇳🇵', name: 'Nepal', nameKr: '네팔', angle: 200, distance: 360 },
                { flag: '🇧🇩', name: 'Bangladesh', nameKr: '방글라데시', angle: 220, distance: 250 },
                { flag: '🇱🇰', name: 'Sri Lanka', nameKr: '스리랑카', angle: 250, distance: 180 },
                { flag: '🇲🇳', name: 'Mongolia', nameKr: '몽골', angle: 295, distance: 200 },
                { flag: '🇺🇿', name: 'Uzbekistan', nameKr: '우즈베키스탄', angle: 330, distance: 350 },
                { flag: '🇰🇿', name: 'Kazakhstan', nameKr: '카자흐스탄', angle: 350, distance: 400 }
              ].map((country, index) => {
                const radian = (country.angle * Math.PI) / 180;
                const x = Math.cos(radian) * country.distance;
                const y = Math.sin(radian) * country.distance;
                
                return (
                  <div key={index}>
                    {/* Connection Line */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: `${country.distance}px`,
                      height: '2px',
                      backgroundColor: currentTheme.colors.primary[300],
                      transformOrigin: '0 50%',
                      transform: `translate(0, -50%) rotate(${country.angle}deg)`,
                      opacity: 0.6,
                      animation: `pulse 3s infinite ${index * 0.2}s`
                    }} />
                    
                    {/* Country Node */}
                    <div 
                      className="country-node"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        width: '80px',
                        height: '80px',
                        backgroundColor: currentTheme.colors.surfaces.background,
                        border: `1px solid ${currentTheme.colors.primary[200]}`,
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: currentTheme.shadows.md,
                        cursor: 'pointer'
                      }}>
                      <div style={{ fontSize: '1.5rem', marginBottom: '2px' }}>{country.flag}</div>
                      <div style={{
                        fontSize: currentTheme.typography.fontSize.xs,
                        fontWeight: currentTheme.typography.fontWeight.medium,
                        color: currentTheme.colors.text.primary,
                        textAlign: 'center',
                        lineHeight: '1.2'
                      }}>
                        {country.nameKr}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Floating Particles */}
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  backgroundColor: currentTheme.colors.primary[400],
                  borderRadius: '50%',
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animation: `float 4s infinite ${i * 0.5}s`,
                  opacity: 0.7
                }} />
              ))}
            </div>


            {/* Key Features */}
            <div style={{ marginTop: currentTheme.spacing[8] }}>
              <Grid columns={getColumns(1, 1, 3)} gap="6">
                <FadeInElement delay={0.2} direction="up">
                  <FeatureCard
                    icon="01"
                    title="글로벌 네트워크"
                    description="12개국 우수 인재 풀에 직접 접근하여 최적의 매칭을 제공합니다."
                    variant="minimal"
                  />
                </FadeInElement>
                <FadeInElement delay={0.4} direction="up">
                  <FeatureCard
                    icon="02"
                    title="실시간 연결"
                    description="AI 기반 매칭 시스템으로 즉시 최적의 인재와 기업을 연결합니다."
                    variant="minimal"
                  />
                </FadeInElement>
                <FadeInElement delay={0.6} direction="up">
                  <FeatureCard
                    icon="03"
                    title="양방향 매칭"
                    description="기업과 인재가 상호 관심을 표현하면 바로 면접이 성사됩니다."
                    variant="minimal"
                  />
                </FadeInElement>
              </Grid>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 기업을 위한 서비스 */}
      <Section 
        spacing="xl" 
        id="companies"
        style={{ backgroundColor: currentTheme.colors.surfaces.foreground }}
      >
        <Container maxWidth="xl">
          <Grid columns={getColumns(1, 2, 2)} gap="12">
            <div>
              <h2 style={{
                fontSize: currentTheme.typography.fontSize['2xl'],
                fontWeight: currentTheme.typography.fontWeight.bold,
                marginBottom: currentTheme.spacing[8],
                color: currentTheme.colors.text.primary
              }}>
                기업을 위한 서비스
              </h2>
              <Grid columns={1} gap="6">
                <FadeInElement delay={0.2} direction="left">
                  <FeatureCard
                    icon="🌐"
                    title="글로벌 인재 풀 접근"
                    description="전 세계 12개국 이상의 검증된 우수 외국인 인재"
                    variant="minimal"
                  />
                </FadeInElement>
                
                <FadeInElement delay={0.4} direction="left">
                  <FeatureCard
                    icon="⚡"
                    title="효율적인 채용 프로세스"
                    description="기존 대비 최대 50% 시간 단축, 유의미한 면접만 진행"
                    variant="minimal"
                  />
                </FadeInElement>
                
                <FadeInElement delay={0.6} direction="left">
                  <FeatureCard
                    icon="📊"
                    title="데이터 기반 의사결정"
                    description="인재 프로필, 스킬 매칭률, 이전 매칭 기록 등 상세 데이터"
                    variant="minimal"
                  />
                </FadeInElement>
              </Grid>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: currentTheme.colors.surfaces.elevated,
              borderRadius: currentTheme.borderRadius.lg,
              padding: currentTheme.spacing[8],
              minHeight: '400px',
              overflow: 'hidden'
            }}>
              <img 
                src={webHomeImage} 
                alt="기업 서비스 - 글로벌 인재 매칭"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: currentTheme.borderRadius.md,
                  filter: 'brightness(0.9) contrast(1.1)'
                }}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 구직자를 위한 서비스 */}
      <Section spacing="xl" id="jobseekers">
        <Container maxWidth="xl">
          <Grid columns={getColumns(1, 2, 2)} gap="12">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: currentTheme.colors.surfaces.elevated,
              borderRadius: currentTheme.borderRadius.lg,
              padding: currentTheme.spacing[8],
              minHeight: '400px',
              overflow: 'hidden'
            }}>
              <img 
                src={webHomeImage} 
                alt="구직자 서비스 - 한국 취업 기회"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: currentTheme.borderRadius.md,
                  filter: 'brightness(0.95) contrast(1.05)'
                }}
              />
            </div>
            
            <div>
              <h2 style={{
                fontSize: currentTheme.typography.fontSize['2xl'],
                fontWeight: currentTheme.typography.fontWeight.bold,
                marginBottom: currentTheme.spacing[8],
                color: currentTheme.colors.text.primary
              }}>
                구직자를 위한 서비스
              </h2>
              <Grid columns={1} gap="6">
                <FadeInElement delay={0.2} direction="right">
                  <FeatureCard
                    icon="🏢"
                    title="한국 취업 기회"
                    description="검증된 한국 기업과의 직접 매칭 기회"
                    variant="minimal"
                  />
                </FadeInElement>
                
                <FadeInElement delay={0.4} direction="right">
                  <FeatureCard
                    icon="🚀"
                    title="간편한 지원 프로세스"
                    description="원클릭 지원과 동시에 즉시 피드백"
                    variant="minimal"
                  />
                </FadeInElement>
                
                <FadeInElement delay={0.6} direction="right">
                  <FeatureCard
                    icon="🎓"
                    title="취업 지원 서비스"
                    description="이력서 최적화, 면접 코칭, 정착 지원 정보"
                    variant="minimal"
                  />
                </FadeInElement>
              </Grid>

            </div>
          </Grid>
        </Container>
      </Section>

      {/* 작동 원리 섹션 */}
      <Section 
        spacing="xl" 
        style={{ backgroundColor: currentTheme.colors.surfaces.foreground }}
      >
        <Container maxWidth="xl">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: currentTheme.spacing[16],
            color: currentTheme.colors.text.primary
          }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[4]
            }}>
              3단계 간단 프로세스
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary
            }}>
              Kgency의 혁신적인 매칭 시스템
            </p>
          </div>
          
          <Grid columns={getColumns(1, 1, 3)} gap="8">
            <FadeInElement delay={0.2} direction="up">
              <Card style={{ 
                textAlign: 'center', 
                padding: currentTheme.spacing[8],
                backgroundColor: currentTheme.colors.surfaces.background
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: currentTheme.spacing[4],
                  color: currentTheme.colors.primary[500]
                }}>
                  ✍️
                </div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.semibold,
                  marginBottom: currentTheme.spacing[2],
                  color: currentTheme.colors.text.primary
                }}>
                  1. 프로필 등록
                </h3>
                <p style={{ color: currentTheme.colors.text.secondary }}>
                  기업은 채용 포지션, 구직자는 이력서/경력 정보 입력
                </p>
              </Card>
            </FadeInElement>
            
            <FadeInElement delay={0.4} direction="up">
              <Card style={{ 
                textAlign: 'center', 
                padding: currentTheme.spacing[8],
                backgroundColor: currentTheme.colors.surfaces.background
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: currentTheme.spacing[4],
                  color: currentTheme.colors.primary[500]
                }}>
                  🔍
                </div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.semibold,
                  marginBottom: currentTheme.spacing[2],
                  color: currentTheme.colors.text.primary
                }}>
                  2. 스마트 매칭
                </h3>
                <p style={{ color: currentTheme.colors.text.secondary }}>
                  정교한 알고리즘이 상호 프로필 분석 및 추천
                </p>
              </Card>
            </FadeInElement>
            
            <FadeInElement delay={0.6} direction="up">
              <Card style={{ 
                textAlign: 'center', 
                padding: currentTheme.spacing[8],
                backgroundColor: currentTheme.colors.surfaces.background
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: currentTheme.spacing[4],
                  color: currentTheme.colors.primary[500]
                }}>
                  🤝
                </div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.semibold,
                  marginBottom: currentTheme.spacing[2],
                  color: currentTheme.colors.text.primary
                }}>
                  3. 즉시 면접
                </h3>
                <p style={{ color: currentTheme.colors.text.secondary }}>
                  매칭률 90% 이상 시 즉시 면접 일정 선택 가능
                </p>
              </Card>
            </FadeInElement>
          </Grid>
        </Container>
      </Section>

      {/* 고객 리뷰 섹션 */}
      <Section spacing="xl" id="reviews" style={{ backgroundColor: currentTheme.colors.surfaces.background }}>
        <Container maxWidth="xl">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: currentTheme.spacing[16]
          }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[4],
              color: currentTheme.colors.text.primary
            }}>
              고객 리뷰
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary
            }}>
              Kgency와 함께한 고객들의 실제 경험담을 들어보세요
            </p>
          </div>
          
          {/* 통계 섹션 */}
          <div style={{ 
            marginBottom: currentTheme.spacing[16]
          }}>
            <Grid columns={getColumns(1, 1, 3)} gap="8">
              <FadeInElement delay={0.2} direction="up">
                <div style={{ 
                  textAlign: 'center',
                  padding: currentTheme.spacing[6],
                  backgroundColor: currentTheme.colors.surfaces.elevated,
                  borderRadius: currentTheme.borderRadius.lg
                }}>
                  <div style={{ 
                    fontSize: currentTheme.typography.fontSize['3xl'], 
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: currentTheme.colors.primary[600],
                    marginBottom: currentTheme.spacing[2]
                  }}>
                    14일
                  </div>
                  <div style={{ 
                    fontSize: currentTheme.typography.fontSize.sm, 
                    color: currentTheme.colors.text.secondary
                  }}>
                    평균 채용 기간
                  </div>
                </div>
              </FadeInElement>
              <FadeInElement delay={0.4} direction="up">
                <div style={{ 
                  textAlign: 'center',
                  padding: currentTheme.spacing[6],
                  backgroundColor: currentTheme.colors.surfaces.elevated,
                  borderRadius: currentTheme.borderRadius.lg
                }}>
                  <div style={{ 
                    fontSize: currentTheme.typography.fontSize['3xl'], 
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: currentTheme.colors.semantic.success,
                    marginBottom: currentTheme.spacing[2]
                  }}>
                    95%
                  </div>
                  <div style={{ 
                    fontSize: currentTheme.typography.fontSize.sm, 
                    color: currentTheme.colors.text.secondary
                  }}>
                    사용자 만족도
                  </div>
                </div>
              </FadeInElement>
              <FadeInElement delay={0.6} direction="up">
                <div style={{ 
                  textAlign: 'center',
                  padding: currentTheme.spacing[6],
                  backgroundColor: currentTheme.colors.surfaces.elevated,
                  borderRadius: currentTheme.borderRadius.lg
                }}>
                  <div style={{ 
                    fontSize: currentTheme.typography.fontSize['3xl'], 
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: currentTheme.colors.text.accent,
                    marginBottom: currentTheme.spacing[2]
                  }}>
                    87%
                  </div>
                  <div style={{ 
                    fontSize: currentTheme.typography.fontSize.sm, 
                    color: currentTheme.colors.text.secondary
                  }}>
                    초기 정착률
                  </div>
                </div>
              </FadeInElement>
            </Grid>
          </div>
          
          {/* 리뷰 카드들 */}
          <Grid columns={getColumns(1, 1, 2)} gap="8">
            <FadeInElement delay={0.2} direction="left">
              <Card style={{ 
                padding: currentTheme.spacing[8],
                backgroundColor: currentTheme.colors.surfaces.elevated,
                borderRadius: currentTheme.borderRadius.lg
              }}>
              <div style={{ marginBottom: currentTheme.spacing[4] }}>
                <div style={{ 
                  display: 'flex', 
                  gap: currentTheme.spacing[1], 
                  marginBottom: currentTheme.spacing[3]
                }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ 
                      color: currentTheme.colors.primary[500], 
                      fontSize: currentTheme.typography.fontSize.lg 
                    }}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p style={{
                  fontSize: currentTheme.typography.fontSize.base,
                  color: currentTheme.colors.text.primary,
                  lineHeight: 1.6,
                  marginBottom: currentTheme.spacing[4]
                }}>
                  "Kgency 덕분에 짧은 시간에 원하는 인재를 찾았습니다. 양방향 매칭 시스템이 정말 효과적이었어요."
                </p>
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: currentTheme.spacing[3]
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: currentTheme.colors.primary[100],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.semibold,
                  color: currentTheme.colors.primary[600]
                }}>
                  김
                </div>
                <div>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize.base,
                    fontWeight: currentTheme.typography.fontWeight.semibold,
                    color: currentTheme.colors.text.primary,
                    marginBottom: currentTheme.spacing[1]
                  }}>
                    김현수
                  </div>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: currentTheme.colors.text.secondary
                  }}>
                    HR 팀장 • 테크기업 A
                  </div>
                </div>
              </div>
              </Card>
            </FadeInElement>
            
            <FadeInElement delay={0.4} direction="right">
              <Card style={{ 
                padding: currentTheme.spacing[8],
                backgroundColor: currentTheme.colors.surfaces.elevated,
                borderRadius: currentTheme.borderRadius.lg
              }}>
                <div style={{ marginBottom: currentTheme.spacing[4] }}>
                  <div style={{ 
                    display: 'flex', 
                    gap: currentTheme.spacing[1], 
                    marginBottom: currentTheme.spacing[3]
                  }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ 
                        color: currentTheme.colors.primary[500], 
                        fontSize: currentTheme.typography.fontSize.lg 
                      }}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p style={{
                    fontSize: currentTheme.typography.fontSize.base,
                    color: currentTheme.colors.text.primary,
                    lineHeight: 1.6,
                    marginBottom: currentTheme.spacing[4]
                  }}>
                    "복잡한 과정 없이 한국에서 꿈을 이룰 수 있었어요. Kgency는 정말 혁신적인 플랫폼입니다."
                  </p>
                </div>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: currentTheme.spacing[3]
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: currentTheme.colors.semantic.success + '20',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: currentTheme.typography.fontSize.lg,
                    fontWeight: currentTheme.typography.fontWeight.semibold,
                    color: currentTheme.colors.semantic.success
                  }}>
                    S
                  </div>
                  <div>
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.base,
                      fontWeight: currentTheme.typography.fontWeight.semibold,
                      color: currentTheme.colors.text.primary,
                      marginBottom: currentTheme.spacing[1]
                    }}>
                      Sarah Johnson
                    </div>
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.sm,
                      color: currentTheme.colors.text.secondary
                    }}>
                      소프트웨어 개발자 • 핀란드 → 한국 취업 성공
                    </div>
                  </div>
                </div>
              </Card>
            </FadeInElement>
            
            <FadeInElement delay={0.6} direction="left">
              <Card style={{ 
                padding: currentTheme.spacing[8],
                backgroundColor: currentTheme.colors.surfaces.elevated,
                borderRadius: currentTheme.borderRadius.lg
              }}>
                <div style={{ marginBottom: currentTheme.spacing[4] }}>
                  <div style={{ 
                    display: 'flex', 
                    gap: currentTheme.spacing[1], 
                    marginBottom: currentTheme.spacing[3]
                  }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ 
                        color: currentTheme.colors.primary[500], 
                        fontSize: currentTheme.typography.fontSize.lg 
                      }}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p style={{
                    fontSize: currentTheme.typography.fontSize.base,
                    color: currentTheme.colors.text.primary,
                    lineHeight: 1.6,
                    marginBottom: currentTheme.spacing[4]
                  }}>
                    "전문적이고 빠른 매칭 서비스로 글로벌 인재를 효율적으로 채용할 수 있었습니다."
                  </p>
                </div>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: currentTheme.spacing[3]
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: currentTheme.colors.text.accent + '20',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: currentTheme.typography.fontSize.lg,
                    fontWeight: currentTheme.typography.fontWeight.semibold,
                    color: currentTheme.colors.text.accent
                  }}>
                    박
                  </div>
                  <div>
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.base,
                      fontWeight: currentTheme.typography.fontWeight.semibold,
                      color: currentTheme.colors.text.primary,
                      marginBottom: currentTheme.spacing[1]
                    }}>
                      박지영
                    </div>
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.sm,
                      color: currentTheme.colors.text.secondary
                    }}>
                      경영지원팀 이사 • 제조기업 B
                    </div>
                  </div>
                </div>
              </Card>
            </FadeInElement>
            
            <FadeInElement delay={0.8} direction="right">
              <Card style={{ 
                padding: currentTheme.spacing[8],
                backgroundColor: currentTheme.colors.surfaces.elevated,
                borderRadius: currentTheme.borderRadius.lg
              }}>
                <div style={{ marginBottom: currentTheme.spacing[4] }}>
                  <div style={{ 
                    display: 'flex', 
                    gap: currentTheme.spacing[1], 
                    marginBottom: currentTheme.spacing[3]
                  }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ 
                        color: currentTheme.colors.primary[500], 
                        fontSize: currentTheme.typography.fontSize.lg 
                      }}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p style={{
                    fontSize: currentTheme.typography.fontSize.base,
                    color: currentTheme.colors.text.primary,
                    lineHeight: 1.6,
                    marginBottom: currentTheme.spacing[4]
                  }}>
                    "비자 준비부터 정착까지 원스톱 서비스로 안전하게 한국에서 커리어를 시작했습니다."
                  </p>
                </div>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: currentTheme.spacing[3]
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: currentTheme.colors.primary[100],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: currentTheme.typography.fontSize.lg,
                    fontWeight: currentTheme.typography.fontWeight.semibold,
                    color: currentTheme.colors.primary[600]
                  }}>
                    N
                  </div>
                  <div>
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.base,
                      fontWeight: currentTheme.typography.fontWeight.semibold,
                      color: currentTheme.colors.text.primary,
                      marginBottom: currentTheme.spacing[1]
                    }}>
                      Nguyen Van An
                    </div>
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.sm,
                      color: currentTheme.colors.text.secondary
                    }}>
                      기계 엔지니어 • 베트남 → 한국 취업 성공
                    </div>
                  </div>
                </div>
              </Card>
            </FadeInElement>
          </Grid>
        </Container>
      </Section>

      {/* 팀 소개 섹션 */}
      <Section spacing="xl">
        <Container maxWidth="xl">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: currentTheme.spacing[16]
          }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[4],
              color: currentTheme.colors.text.primary
            }}>
              Kgency 팀을 소개합니다
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary
            }}>
              글로벌 인재 매칭의 전문가들이 함께합니다
            </p>
          </div>
          
          <Grid columns={getColumns(1, 2, 3)} gap="8">
            <TeamCard
              name="김민수"
              role="CEO & 공동창업자"
              bio="글로벌 HR 분야에서 15년 경력을 쌓으며, 외국인 인재 채용의 혁신을 이끌고 있습니다."
              avatar="https://i.pravatar.cc/150?img=1"
              social={{
                linkedin: "https://linkedin.com/in/kimminsu",
                email: "minsu.kim@kgency.com"
              }}
              variant="detailed"
            />
            
            <TeamCard
              name="이영희"
              role="CTO & 기술총괄"
              bio="AI 매칭 알고리즘과 플랫폼 개발을 담당하며, 기술 혁신을 통해 더 나은 매칭을 만들어가고 있습니다."
              avatar="https://i.pravatar.cc/150?img=5"
              social={{
                linkedin: "https://linkedin.com/in/leeyounghee",
                github: "https://github.com/younghee-lee"
              }}
              variant="detailed"
            />
            
            <TeamCard
              name="박준영"
              role="Head of Global Relations"
              bio="12개국 파트너십 구축과 글로벌 네트워크 확장을 이끌며, 국경을 넘나드는 인재 매칭을 실현합니다."
              avatar="https://i.pravatar.cc/150?img=8"
              social={{
                linkedin: "https://linkedin.com/in/parkjunyoung",
                twitter: "https://twitter.com/junyoung_park"
              }}
              variant="detailed"
            />
          </Grid>
          
          {/* 추가 팀원 (컴팩트 버전) */}
          <div style={{ marginTop: currentTheme.spacing[12] }}>
            <Grid columns={getColumns(2, 4, 4)} gap="6">
              <TeamCard
                name="최서연"
                role="Product Manager"
                avatar="https://i.pravatar.cc/150?img=9"
                variant="compact"
                social={{
                  linkedin: "https://linkedin.com/in/choiseoyeon"
                }}
              />
              
              <TeamCard
                name="김태현"
                role="UX Designer"
                avatar="https://i.pravatar.cc/150?img=6"
                variant="compact"
                social={{
                  linkedin: "https://linkedin.com/in/kimtaehyun"
                }}
              />
              
              <TeamCard
                name="장민정"
                role="Marketing Director"
                avatar="https://i.pravatar.cc/150?img=10"
                variant="compact"
                social={{
                  linkedin: "https://linkedin.com/in/jangminjung"
                }}
              />
              
              <TeamCard
                name="정수빈"
                role="Customer Success"
                avatar="https://i.pravatar.cc/150?img=3"
                variant="compact"
                social={{
                  email: "subin.jung@kgency.com"
                }}
              />
            </Grid>
          </div>
        </Container>
      </Section>

      {/* 앱 다운로드 섹션 */}
      <Section 
        spacing="xl" 
        style={{ backgroundColor: currentTheme.colors.surfaces.foreground }}
      >
        <Container maxWidth="xl">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: currentTheme.spacing[16]
          }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[4],
              color: currentTheme.colors.text.primary
            }}>
              Kgency 앱으로 더 편리하게
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary
            }}>
              언제 어디서나 최적의 매칭 기회를 놓치지 마세요
            </p>
          </div>
          
          {/* 앱 카드 형태 */}
          <div style={{ marginBottom: currentTheme.spacing[12] }}>
            <Grid columns={getColumns(1, 1, 3)} gap="8">
              <AppStoreCard
                platform="ios"
                appName="Kgency"
                appIcon={kgencyLogo}
                description="iPhone과 iPad에서 사용할 수 있는 네이티브 앱으로 최적화된 매칭 경험을 제공합니다."
                rating={{ score: 4.8, count: "1.2K" }}
                badge={{ text: "Editor's Choice", variant: "success" }}
                downloadUrl="https://apps.apple.com/kgency"
                variant="card"
              />
              
              <AppStoreCard
                platform="android"
                appName="Kgency"
                appIcon={kgencyLogo}
                description="Android 기기에서 빠르고 안정적인 글로벌 인재 매칭 서비스를 경험하세요."
                rating={{ score: 4.7, count: "2.5K" }}
                badge={{ text: "Top Rated", variant: "primary" }}
                downloadUrl="https://play.google.com/store/apps/kgency"
                variant="card"
              />
              
              <AppStoreCard
                platform="web"
                appName="Kgency Web"
                appIcon={kgencyLogo}
                description="웹 브라우저에서 바로 이용할 수 있는 반응형 웹 애플리케이션입니다."
                rating={{ score: 4.9, count: "5.8K" }}
                badge={{ text: "Most Popular", variant: "info" }}
                downloadUrl="https://app.kgency.com"
                variant="card"
              />
            </Grid>
          </div>



          {/* 앱 주요 기능 */}
          <div style={{ 
            backgroundColor: currentTheme.colors.surfaces.background,
            borderRadius: currentTheme.borderRadius.xl,
            padding: currentTheme.spacing[8],
            marginTop: currentTheme.spacing[8]
          }}>
            <h4 style={{
              fontSize: currentTheme.typography.fontSize.lg,
              fontWeight: currentTheme.typography.fontWeight.semibold,
              textAlign: 'center',
              marginBottom: currentTheme.spacing[6],
              color: currentTheme.colors.text.primary
            }}>
              📱 모바일 앱 주요 기능
            </h4>
            
            <Grid columns={getColumns(1, 1, 3)} gap="6">
              <FeatureCard
                icon="🔔"
                title="실시간 알림"
                description="새로운 매칭과 면접 일정을 즉시 받아보세요"
                variant="minimal"
                size="sm"
              />
              
              <FeatureCard
                icon="💬"
                title="인앱 채팅"
                description="기업과 구직자 간 직접 소통이 가능합니다"
                variant="minimal"
                size="sm"
              />
              
              <FeatureCard
                icon="📊"
                title="매칭 현황"
                description="나의 매칭 상태와 진행 현황을 한눈에"
                variant="minimal"
                size="sm"
              />
            </Grid>
          </div>
        </Container>
      </Section>

      {/* 신뢰성 구축 섹션 */}
      <Section 
        spacing="xl" 
        style={{ 
          backgroundColor: currentTheme.colors.surfaces.foreground,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* 미묘한 배경 패턴 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, ${currentTheme.colors.primary[200]}10 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${currentTheme.colors.primary[300]}08 0%, transparent 50%)`,
          pointerEvents: 'none'
        }} />
        
        <Container maxWidth="xl" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: currentTheme.spacing[16]
          }}>
            <Badge 
              variant="secondary" 
              size="md" 
              style={{ 
                marginBottom: currentTheme.spacing[4],
                backgroundColor: `${currentTheme.colors.primary[500]}15`,
                color: currentTheme.colors.primary[600],
                border: `1px solid ${currentTheme.colors.primary[200]}`
              }}
            >
              신뢰할 수 있는 플랫폼
            </Badge>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[6],
              color: currentTheme.colors.text.primary,
              letterSpacing: '-0.02em'
            }}>
              검증된 보안과 신뢰성
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              정부기관 인증 및 국제 보안 표준을 준수하는 안전한 플랫폼
            </p>
          </div>
          
          {/* 파트너십 표시 */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: currentTheme.spacing[8],
            marginBottom: currentTheme.spacing[16],
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: currentTheme.spacing[2],
              padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
              backgroundColor: currentTheme.colors.surfaces.background,
              borderRadius: currentTheme.borderRadius.full,
              fontSize: currentTheme.typography.fontSize.sm,
              color: currentTheme.colors.text.secondary
            }}>
              <div style={{ width: 6, height: 6, backgroundColor: currentTheme.colors.primary[500], borderRadius: '50%' }} />
              대한민국 고용노동부
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: currentTheme.spacing[2],
              padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
              backgroundColor: currentTheme.colors.surfaces.background,
              borderRadius: currentTheme.borderRadius.full,
              fontSize: currentTheme.typography.fontSize.sm,
              color: currentTheme.colors.text.secondary
            }}>
              <div style={{ width: 6, height: 6, backgroundColor: currentTheme.colors.primary[400], borderRadius: '50%' }} />
              글로벌 파트너 네트워크
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: currentTheme.spacing[2],
              padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
              backgroundColor: currentTheme.colors.surfaces.background,
              borderRadius: currentTheme.borderRadius.full,
              fontSize: currentTheme.typography.fontSize.sm,
              color: currentTheme.colors.text.secondary
            }}>
              <div style={{ width: 6, height: 6, backgroundColor: currentTheme.colors.semantic.success, borderRadius: '50%' }} />
              외국인 지원센터 협력
            </div>
          </div>
          
          {/* 인증 및 보안 카드 */}
          <Grid columns={getColumns(1, 1, 3)} gap="8">
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[8],
              backgroundColor: currentTheme.colors.surfaces.background,
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.elevated;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = currentTheme.shadows.lg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.background;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = currentTheme.shadows.sm;
            }}>
              <div style={{
                width: 48,
                height: 48,
                margin: '0 auto',
                marginBottom: currentTheme.spacing[4],
                backgroundColor: `${currentTheme.colors.semantic.success}15`,
                borderRadius: currentTheme.borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                🛡️
              </div>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.semibold,
                marginBottom: currentTheme.spacing[2],
                color: currentTheme.colors.text.primary
              }}>
                ISMS-P 인증
              </h3>
              <p style={{
                fontSize: currentTheme.typography.fontSize.sm,
                color: currentTheme.colors.text.secondary,
                lineHeight: 1.5
              }}>
                정보보호 및 개인정보보호 국가 인증 획득
              </p>
            </Card>
            
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[8],
              backgroundColor: currentTheme.colors.surfaces.background,
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.elevated;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = currentTheme.shadows.lg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.background;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = currentTheme.shadows.sm;
            }}>
              <div style={{
                width: 48,
                height: 48,
                margin: '0 auto',
                marginBottom: currentTheme.spacing[4],
                backgroundColor: `${currentTheme.colors.primary[500]}15`,
                borderRadius: currentTheme.borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                🔐
              </div>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.semibold,
                marginBottom: currentTheme.spacing[2],
                color: currentTheme.colors.text.primary
              }}>
                256bit SSL 암호화
              </h3>
              <p style={{
                fontSize: currentTheme.typography.fontSize.sm,
                color: currentTheme.colors.text.secondary,
                lineHeight: 1.5
              }}>
                금융권 수준의 데이터 암호화 적용
              </p>
            </Card>
            
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[8],
              backgroundColor: currentTheme.colors.surfaces.background,
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.elevated;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = currentTheme.shadows.lg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.background;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = currentTheme.shadows.sm;
            }}>
              <div style={{
                width: 48,
                height: 48,
                margin: '0 auto',
                marginBottom: currentTheme.spacing[4],
                backgroundColor: `${currentTheme.colors.text.accent}15`,
                borderRadius: currentTheme.borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📊
              </div>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.semibold,
                marginBottom: currentTheme.spacing[2],
                color: currentTheme.colors.text.primary
              }}>
                24/7 실시간 모니터링
              </h3>
              <p style={{
                fontSize: currentTheme.typography.fontSize.sm,
                color: currentTheme.colors.text.secondary,
                lineHeight: 1.5
              }}>
                AI 기반 이상 탐지 시스템 운영
              </p>
            </Card>
          </Grid>
          
          {/* 신뢰성 지표 */}
          <div style={{
            marginTop: currentTheme.spacing[16],
            padding: currentTheme.spacing[6],
            backgroundColor: currentTheme.colors.surfaces.background,
            borderRadius: currentTheme.borderRadius.lg,
            textAlign: 'center'
          }}>
            <Grid columns={getColumns(1, 2, 4)} gap="6">
              <div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['2xl'], 
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.primary[600],
                  marginBottom: currentTheme.spacing[1]
                }}>
                  99.9%
                </div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize.sm, 
                  color: currentTheme.colors.text.secondary
                }}>
                  서비스 가동률
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['2xl'], 
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.semantic.success,
                  marginBottom: currentTheme.spacing[1]
                }}>
                  0
                </div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize.sm, 
                  color: currentTheme.colors.text.secondary
                }}>
                  보안 사고
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['2xl'], 
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.text.accent,
                  marginBottom: currentTheme.spacing[1]
                }}>
                  100K+
                </div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize.sm, 
                  color: currentTheme.colors.text.secondary
                }}>
                  보호된 데이터
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['2xl'], 
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.primary[600],
                  marginBottom: currentTheme.spacing[1]
                }}>
                  A+
                </div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize.sm, 
                  color: currentTheme.colors.text.secondary
                }}>
                  보안 등급
                </div>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* CTA 섹션 */}
      <Section 
        spacing="xl" 
        style={{ backgroundColor: currentTheme.colors.surfaces.background, }}
      >
        <Container maxWidth="xl">
          <div style={{ 
            textAlign: 'center',
            color: currentTheme.colors.text.inverse
          }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[4],
              color: 'white'
            }}>
              지금 바로 시작하세요
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              marginBottom: currentTheme.spacing[8],
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              글로벌 인재와 기업을 연결하는 혁신적인 매칭 플랫폼
            </p>
            
            <div style={{ 
              display: 'flex',
              gap: currentTheme.spacing[4],
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Button 
                variant="secondary" 
                size="lg"
                style={{ minWidth: '200px' }}
              >
                기업 회원가입
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                style={{ 
                  minWidth: '200px',
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  color: 'white'
                }}
              >
                구직자 회원가입
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form 섹션 */}
      <Section spacing="xl" id="support" style={{backgroundColor: currentTheme.colors.surfaces.foreground}}>
        <Container maxWidth="md">
          <div style={{ 
            textAlign: 'center', 
            marginBottom: currentTheme.spacing[12]
          }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['3xl'],
              fontWeight: currentTheme.typography.fontWeight.bold,
              marginBottom: currentTheme.spacing[4],
              color: currentTheme.colors.text.primary
            }}>
              문의하기
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary
            }}>
              궁금한 점이 있으시면 언제든 연락주세요
            </p>
          </div>
          
          <ContactForm
            onSubmit={(data) => {
              console.log('문의 접수:', data);
            }}
            variant="bordered"
            submitText="문의 보내기"
          />
        </Container>
      </Section>

      {/* Footer */}
      <Footer
        logo="Kgency"
        description="외국인 인재와 기업을 연결하는 스마트 매칭 플랫폼"
        sections={[
          {
            title: '서비스',
            links: [
              { label: '기업 서비스', href: '/companies' },
              { label: '구직자 서비스', href: '/jobseekers' },
              { label: '성공사례', href: '/success-stories' },
              { label: '요금제', href: '/pricing' }
            ]
          },
          {
            title: '지원',
            links: [
              { label: 'FAQ', href: '/faq' },
              { label: '1:1 문의', href: '/contact' },
              { label: '공지사항', href: '/notices' },
              { label: '가이드', href: '/guide' }
            ]
          },
          {
            title: '회사',
            links: [
              { label: '회사소개', href: '/about' },
              { label: '채용정보', href: '/careers' },
              { label: '보도자료', href: '/press' },
              { label: '블로그', href: '/blog' }
            ]
          },
          {
            title: '법률',
            links: [
              { label: '이용약관', href: '/terms' },
              { label: '개인정보처리방침', href: '/privacy' },
              { label: '환불정책', href: '/refund' },
              { label: '사업자정보', href: '/business-info' }
            ]
          }
        ]}
        socialLinks={[
          { name: 'LinkedIn', href: 'https://linkedin.com/company/kgency', icon: '💼' },
          { name: 'Facebook', href: 'https://facebook.com/kgency', icon: '📘' },
          { name: 'Instagram', href: 'https://instagram.com/kgency', icon: '📸' },
          { name: 'YouTube', href: 'https://youtube.com/kgency', icon: '📺' }
        ]}
        bottomText="© 2024 Kgency Inc. All rights reserved."
      />

    </Layout>
  );
};

export default HomePage;