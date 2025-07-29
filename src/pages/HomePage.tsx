import React from 'react';
import { useNavigate } from 'react-router-dom';
import webHomeImage from '../assets/images/webHome.jpg';
import {
  Layout,
  Container,
  Section,
  Grid,
  Navbar,
  Hero,
  FeatureCard,
  Card,
  Testimonial,
  Button,
  ContactForm,
  Footer,
  Badge
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

export const HomePage: React.FC = () => {
  const { currentTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Navigation */}
      <Navbar
        logo="Kgency"
        items={[
          { label: '서비스 소개', href: '#about' },
          { label: '기업 서비스', href: '#companies' },
          { label: '구직자 서비스', href: '#jobseekers' },
          { label: '성공사례', href: '#success-stories' },
          { label: '고객지원', href: '#support' }
        ]}
        actions={
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/components')}
          >
            🎨 컴포넌트 데모
          </Button>
        }
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

      {/* 개발자를 위한 섹션 */}
      <Section spacing="md" style={{ 
        backgroundColor: currentTheme.colors.surfaces.panel,
        borderTop: `1px solid ${currentTheme.colors.border.primary}`,
        borderBottom: `1px solid ${currentTheme.colors.border.primary}`
      }}>
        <Container maxWidth="xl">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: currentTheme.spacing[4]
          }}>
            <div>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.semibold,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[1]
              }}>
                🎨 개발자를 위한 컴포넌트 라이브러리
              </h3>
              <p style={{
                color: currentTheme.colors.text.secondary,
                fontSize: currentTheme.typography.fontSize.sm,
                margin: 0
              }}>
                Linear 디자인 시스템 기반의 재사용 가능한 UI 컴포넌트를 확인해보세요
              </p>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: currentTheme.spacing[3],
              alignItems: 'center'
            }}>
              <Button
                variant="secondary"
                size="md"
                onClick={() => navigate('/components')}
              >
                🎨 컴포넌트 데모 보기
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const heroExamplesWindow = window.open('', '_blank');
                  if (heroExamplesWindow) {
                    heroExamplesWindow.document.write(`
                      <!DOCTYPE html>
                      <html>
                      <head>
                        <title>Kgency Hero Examples</title>
                        <style>
                          body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; }
                          .container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
                          .header { text-align: center; margin-bottom: 60px; }
                          .title { font-size: 48px; font-weight: 700; margin-bottom: 16px; color: #1f2937; }
                          .subtitle { font-size: 20px; color: #6b7280; margin-bottom: 32px; line-height: 1.6; }
                          .section { margin-bottom: 60px; }
                          .section-title { font-size: 28px; font-weight: 600; margin-bottom: 24px; color: #1f2937; display: flex; align-items: center; gap: 12px; }
                          .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 32px; }
                          .feature-card { background: white; padding: 24px; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                          .feature-title { font-weight: 600; margin-bottom: 8px; color: #1f2937; }
                          .feature-desc { color: #6b7280; font-size: 14px; line-height: 1.5; }
                          .code-block { background: #1f2937; color: #e5e7eb; padding: 20px; border-radius: 8px; font-family: 'SF Mono', Monaco, monospace; font-size: 14px; overflow-x: auto; }
                          .highlight { background: #dbeafe; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 24px 0; }
                          .badge { display: inline-block; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 500; }
                          .badge-new { background: #dcfce7; color: #166534; }
                          .badge-feature { background: #fef3c7; color: #92400e; }
                        </style>
                      </head>
                      <body>
                        <div class="container">
                          <div class="header">
                            <h1 class="title">🎨 Kgency Hero 컴포넌트</h1>
                            <p class="subtitle">새로운 기능과 인터랙티브 요소가 추가된 차세대 Hero 컴포넌트</p>
                            <div style="display: flex; justify-content: center; gap: 12px; margin-top: 24px;">
                              <span class="badge badge-new">✨ 새로운 기능</span>
                              <span class="badge badge-feature">🚀 인터랙티브</span>
                            </div>
                          </div>
                          
                          <div class="section">
                            <h2 class="section-title">📊 새로운 주요 기능</h2>
                            <div class="feature-grid">
                              <div class="feature-card">
                                <div class="feature-title">🔢 애니메이션 통계 카운터</div>
                                <div class="feature-desc">숫자가 0부터 목표값까지 부드럽게 증가하는 애니메이션 효과</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">🔔 실시간 알림 시스템</div>
                                <div class="feature-desc">오른쪽 하단에 매칭/가입 알림이 실시간으로 표시</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">✨ 인터랙티브 파티클</div>
                                <div class="feature-desc">배경에 떠다니는 파티클 효과로 생동감 연출</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">🏷️ 기능 태그</div>
                                <div class="feature-desc">주요 기능을 아이콘과 함께 시각적으로 표시</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">🎨 향상된 디자인</div>
                                <div class="feature-desc">블러 효과와 그라디언트로 모던한 느낌</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">📱 완전 반응형</div>
                                <div class="feature-desc">모든 디바이스에서 완벽한 사용자 경험</div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="section">
                            <h2 class="section-title">🎯 4가지 Hero 스타일</h2>
                            <div class="feature-grid">
                              <div class="feature-card">
                                <div class="feature-title">1. 그라디언트 히어로</div>
                                <div class="feature-desc">아름다운 그라디언트 배경과 통계, 기능 태그 포함</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">2. 인터랙티브 히어로</div>
                                <div class="feature-desc">파티클 배경과 실시간 알림으로 생동감 연출</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">3. 미디어 히어로</div>
                                <div class="feature-desc">비디오나 이미지와 함께 표시되는 스타일</div>
                              </div>
                              <div class="feature-card">
                                <div class="feature-title">4. 배경 이미지 히어로</div>
                                <div class="feature-desc">풀스크린 배경 이미지와 오버레이 효과</div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="section">
                            <h2 class="section-title">💻 사용 방법</h2>
                            <div class="highlight">
                              <strong>📁 파일 위치:</strong> 
                              <code>src/pages/home/KgencyHeroExample.tsx</code>
                            </div>
                            
                            <div class="code-block">
import { Hero } from '../../components/Hero';

// 애니메이션 통계 예시
const stats = [
  { value: 1247, label: '성공적인 매칭', animate: true },
  { value: '500+', label: '등록된 기업' },
  { value: 12584, label: '활성 구직자', animate: true }
];

// 실시간 알림 예시
const notifications = [
  {
    id: '1',
    message: '방금 전 김민수님이 매칭에 성공했습니다!',
    type: 'success'
  }
];

<Hero
  variant="interactive"
  stats={stats}
  notifications={notifications}
  features={[
    { icon: '⚡', text: '즉시 매칭' },
    { icon: '🌍', text: '12개국어 지원' }
  ]}
  // ... 기타 props
/>
                            </div>
                          </div>
                          
                          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 16px; text-align: center; color: white; margin-top: 60px;">
                            <h3 style="margin-bottom: 16px; font-size: 24px;">🚀 지금 바로 사용해보세요!</h3>
                            <p style="margin-bottom: 24px; opacity: 0.9;">Components 페이지에서 실제 동작하는 Hero 컴포넌트를 확인할 수 있습니다.</p>
                            <div style="font-size: 14px; opacity: 0.8;">
                              ✨ CLAUDE.md 가이드라인 준수 • 🎨 Linear 디자인 시스템 • 🔥 최신 React 기술
                            </div>
                          </div>
                        </div>
                      </body>
                      </html>
                    `);
                    heroExamplesWindow.document.close();
                  }
                }}
              >
                🎨 Hero 예시 보기
              </Button>
            </div>
          </div>
        </Container>
      </Section>

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
                { flag: '🇻🇳', name: 'Vietnam', nameKr: '베트남', angle: 0, distance: 180 },
                { flag: '🇹🇭', name: 'Thailand', nameKr: '태국', angle: 30, distance: 160 },
                { flag: '🇮🇩', name: 'Indonesia', nameKr: '인도네시아', angle: 60, distance: 170 },
                { flag: '🇵🇭', name: 'Philippines', nameKr: '필리핀', angle: 90, distance: 150 },
                { flag: '🇲🇲', name: 'Myanmar', nameKr: '미얀마', angle: 120, distance: 165 },
                { flag: '🇰🇭', name: 'Cambodia', nameKr: '캄보디아', angle: 150, distance: 155 },
                { flag: '🇳🇵', name: 'Nepal', nameKr: '네팔', angle: 180, distance: 170 },
                { flag: '🇧🇩', name: 'Bangladesh', nameKr: '방글라데시', angle: 210, distance: 160 },
                { flag: '🇱🇰', name: 'Sri Lanka', nameKr: '스리랑카', angle: 240, distance: 175 },
                { flag: '🇲🇳', name: 'Mongolia', nameKr: '몽골', angle: 270, distance: 165 },
                { flag: '🇺🇿', name: 'Uzbekistan', nameKr: '우즈베키스탄', angle: 300, distance: 155 },
                { flag: '🇰🇿', name: 'Kazakhstan', nameKr: '카자흐스탄', angle: 330, distance: 170 }
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
                        border: `3px solid ${currentTheme.colors.primary[200]}`,
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

            {/* Statistics */}
            <div style={{ marginTop: currentTheme.spacing[8] }}>
              <Grid columns={4} gap="6">
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize['3xl'],
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: currentTheme.colors.primary[600],
                    marginBottom: currentTheme.spacing[2]
                  }}>
                    12
                  </div>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: currentTheme.colors.text.secondary
                  }}>
                    연결 국가
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize['3xl'],
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: currentTheme.colors.primary[600],
                    marginBottom: currentTheme.spacing[2]
                  }}>
                    10K+
                  </div>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: currentTheme.colors.text.secondary
                  }}>
                    등록 인재
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize['3xl'],
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: currentTheme.colors.primary[600],
                    marginBottom: currentTheme.spacing[2]
                  }}>
                    500+
                  </div>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: currentTheme.colors.text.secondary
                  }}>
                    파트너 기업
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize['3xl'],
                    fontWeight: currentTheme.typography.fontWeight.bold,
                    color: currentTheme.colors.primary[600],
                    marginBottom: currentTheme.spacing[2]
                  }}>
                    95%
                  </div>
                  <div style={{
                    fontSize: currentTheme.typography.fontSize.sm,
                    color: currentTheme.colors.text.secondary
                  }}>
                    매칭 성공률
                  </div>
                </div>
              </Grid>
            </div>

            {/* Key Features */}
            <div style={{ marginTop: currentTheme.spacing[8] }}>
              <Grid columns={3} gap="6">
                <FeatureCard
                  icon="🌏"
                  title="글로벌 네트워크"
                  description="12개국 우수 인재 풀에 직접 접근하여 최적의 매칭을 제공합니다."
                  variant="minimal"
                />
                <FeatureCard
                  icon="⚡"
                  title="실시간 연결"
                  description="AI 기반 매칭 시스템으로 즉시 최적의 인재와 기업을 연결합니다."
                  variant="minimal"
                />
                <FeatureCard
                  icon="🤝"
                  title="양방향 매칭"
                  description="기업과 인재가 상호 관심을 표현하면 바로 면접이 성사됩니다."
                  variant="minimal"
                />
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
          <Grid columns={2} gap="12">
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
                <FeatureCard
                  icon="🌐"
                  title="글로벌 인재 풀 접근"
                  description="전 세계 12개국 이상의 검증된 우수 외국인 인재"
                  variant="minimal"
                />
                
                <FeatureCard
                  icon="⚡"
                  title="효율적인 채용 프로세스"
                  description="기존 대비 최대 50% 시간 단축, 유의미한 면접만 진행"
                  variant="minimal"
                />
                
                <FeatureCard
                  icon="📊"
                  title="데이터 기반 의사결정"
                  description="인재 프로필, 스킬 매칭률, 이전 매칭 기록 등 상세 데이터"
                  variant="minimal"
                />
              </Grid>
              
              <div style={{ marginTop: currentTheme.spacing[8] }}>
                <Button variant="primary" size="lg">
                  기업 서비스 자세히 보기
                </Button>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: currentTheme.colors.surfaces.elevated,
              borderRadius: currentTheme.borderRadius.lg,
              padding: currentTheme.spacing[12],
              minHeight: '400px'
            }}>
              <div style={{
                fontSize: '4rem',
                textAlign: 'center',
                color: currentTheme.colors.text.accent
              }}>
                🏢
                <div style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  marginTop: currentTheme.spacing[4],
                  color: currentTheme.colors.text.secondary
                }}>
                  기업 서비스 이미지
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 구직자를 위한 서비스 */}
      <Section spacing="xl" id="jobseekers">
        <Container maxWidth="xl">
          <Grid columns={2} gap="12">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: currentTheme.colors.surfaces.elevated,
              borderRadius: currentTheme.borderRadius.lg,
              padding: currentTheme.spacing[12],
              minHeight: '400px'
            }}>
              <div style={{
                fontSize: '4rem',
                textAlign: 'center',
                color: currentTheme.colors.semantic.success
              }}>
                👥
                <div style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  marginTop: currentTheme.spacing[4],
                  color: currentTheme.colors.text.secondary
                }}>
                  구직자 서비스 이미지
                </div>
              </div>
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
                <FeatureCard
                  icon="🏢"
                  title="한국 취업 기회"
                  description="검증된 한국 기업과의 직접 매칭 기회"
                  variant="minimal"
                />
                
                <FeatureCard
                  icon="🚀"
                  title="간편한 지원 프로세스"
                  description="원클릭 지원과 동시에 즉시 피드백"
                  variant="minimal"
                />
                
                <FeatureCard
                  icon="🎓"
                  title="취업 지원 서비스"
                  description="이력서 최적화, 면접 코칭, 정착 지원 정보"
                  variant="minimal"
                />
              </Grid>
              
              <div style={{ marginTop: currentTheme.spacing[8] }}>
                <Button variant="secondary" size="lg">
                  구직자 서비스 자세히 보기
                </Button>
              </div>
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
          
          <Grid columns={3} gap="8">
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[8],
              backgroundColor: currentTheme.colors.surfaces.background
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: currentTheme.spacing[4],
                color: currentTheme.colors.text.accent
              }}>
                📝
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
            
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[8],
              backgroundColor: currentTheme.colors.surfaces.background
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: currentTheme.spacing[4],
                color: currentTheme.colors.text.accent
              }}>
                🎯
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
            
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[8],
              backgroundColor: currentTheme.colors.surfaces.background
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: currentTheme.spacing[4],
                color: currentTheme.colors.text.accent
              }}>
                💼
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
          </Grid>
        </Container>
      </Section>

      {/* 성공 사례 섹션 */}
      <Section spacing="xl" id="success-stories">
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
              성공 사례
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary
            }}>
              실제 매칭 성공 스토리
            </p>
          </div>
          
          <Grid columns={2} gap="8">
            <Testimonial
              content="Kgency 덕분에 짧은 시간에 원하는 인재를 찾았습니다. 양방향 매칭 시스템이 정말 효과적이었어요."
              author={{
                name: "김현수",
                role: "HR 팀장",
                company: "테크기업 A"
              }}
              rating={5}
              variant="featured"
            />
            
            <Testimonial
              content="복잡한 과정 없이 한국에서 꿈을 이룰 수 있었어요. Kgency는 정말 혁신적인 플랫폼입니다."
              author={{
                name: "Sarah Johnson",
                role: "소프트웨어 개발자",
                company: "핀란드 → 한국 취업 성공"
              }}
              rating={5}
              variant="featured"
            />
          </Grid>
          
          {/* 수치로 보는 성과 */}
          <div style={{ 
            marginTop: currentTheme.spacing[16],
            textAlign: 'center'
          }}>
            <Grid columns={3} gap="8">
              <div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['3xl'],
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.text.accent,
                  marginBottom: currentTheme.spacing[2]
                }}>
                  14일
                </div>
                <p style={{ color: currentTheme.colors.text.secondary }}>
                  평균 채용 기간
                </p>
              </div>
              
              <div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['3xl'],
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.text.accent,
                  marginBottom: currentTheme.spacing[2]
                }}>
                  95%
                </div>
                <p style={{ color: currentTheme.colors.text.secondary }}>
                  사용자 만족도
                </p>
              </div>
              
              <div>
                <div style={{ 
                  fontSize: currentTheme.typography.fontSize['3xl'],
                  fontWeight: currentTheme.typography.fontWeight.bold,
                  color: currentTheme.colors.text.accent,
                  marginBottom: currentTheme.spacing[2]
                }}>
                  87%
                </div>
                <p style={{ color: currentTheme.colors.text.secondary }}>
                  초기 정착률
                </p>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* 신뢰성 구축 섹션 */}
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
              신뢰할 수 있는 플랫폼
            </h2>
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary
            }}>
              검증된 파트너십과 보안 시스템
            </p>
          </div>
          
          {/* 파트너십 표시 */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: currentTheme.spacing[8],
            marginBottom: currentTheme.spacing[12],
            opacity: 0.7
          }}>
            <Badge variant="secondary" size="lg">정부기관</Badge>
            <Badge variant="secondary" size="lg">파트너기업</Badge>
            <Badge variant="secondary" size="lg">외국인지원센터</Badge>
          </div>
          
          {/* 인증 및 보안 */}
          <Grid columns={3} gap="8">
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[6],
              backgroundColor: currentTheme.colors.surfaces.background
            }}>
              <Badge variant="success" size="lg" style={{ marginBottom: currentTheme.spacing[4] }}>
                ISMS 인증
              </Badge>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.semibold,
                marginBottom: currentTheme.spacing[2],
                color: currentTheme.colors.text.primary
              }}>
                정보보호 관리체계
              </h3>
              <p style={{ color: currentTheme.colors.text.secondary }}>
                안전한 개인정보 보호
              </p>
            </Card>
            
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[6],
              backgroundColor: currentTheme.colors.surfaces.background
            }}>
              <Badge variant="primary" size="lg" style={{ marginBottom: currentTheme.spacing[4] }}>
                혁신기술 수상
              </Badge>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.semibold,
                marginBottom: currentTheme.spacing[2],
                color: currentTheme.colors.text.primary
              }}>
                기술력 인정
              </h3>
              <p style={{ color: currentTheme.colors.text.secondary }}>
                AI 매칭 기술 우수성
              </p>
            </Card>
            
            <Card style={{ 
              textAlign: 'center', 
              padding: currentTheme.spacing[6],
              backgroundColor: currentTheme.colors.surfaces.background
            }}>
              <Badge variant="info" size="lg" style={{ marginBottom: currentTheme.spacing[4] }}>
                GDPR 준수
              </Badge>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.semibold,
                marginBottom: currentTheme.spacing[2],
                color: currentTheme.colors.text.primary
              }}>
                글로벌 표준
              </h3>
              <p style={{ color: currentTheme.colors.text.secondary }}>
                국제 개인정보보호 기준
              </p>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA 섹션 */}
      <Section 
        spacing="xl" 
        style={{ backgroundColor: currentTheme.colors.text.accent }}
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
      <Section spacing="xl" id="contact">
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