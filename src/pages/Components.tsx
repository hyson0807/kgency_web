import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ImageCard } from '../components/ImageCard';
import { FeatureCard } from '../components/FeatureCard';
import { AppStoreCard } from '../components/AppStoreCard';
import { Carousel, type CarouselItem } from '../components/Carousel';
import { Input } from '../components/Input';
import { Badge } from '../components/Badge';
import { Layout, Container, Grid, Section } from '../components/Layout';
import { Navbar, type NavItem } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Testimonial } from '../components/Testimonial';
import { TeamCard } from '../components/TeamCard';
import { ContactForm, type ContactFormData } from '../components/ContactForm';
import { useTheme } from '../theme/ThemeProvider';

// CSS animations
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
  styleSheet.type = 'text/css';
  styleSheet.innerText = animationStyles;
  document.head.appendChild(styleSheet);
}

export const ComponentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const { currentTheme, mode } = useTheme();

  // Sample images for demo (using placeholder service)
  const sampleImages = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  ];

  // Carousel items
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      content: (
        <ImageCard
          image={sampleImages[0]}
          title="Modern Office Space"
          description="A beautifully designed modern office environment that promotes creativity and collaboration."
          badge={{ text: "Featured", variant: "primary" }}
          footer={
            <div style={{ display: 'flex', gap: currentTheme.spacing[2] }}>
              <Button variant="primary" size="sm">View Details</Button>
              <Button variant="secondary" size="sm">Share</Button>
            </div>
          }
        />
      )
    },
    {
      id: 2,
      content: (
        <ImageCard
          image={sampleImages[1]}
          title="Development Workspace"
          description="Clean and organized development environment with all the tools you need for productivity."
          badge={{ text: "Popular", variant: "success" }}
          footer={
            <div style={{ display: 'flex', gap: currentTheme.spacing[2] }}>
              <Button variant="primary" size="sm">Explore</Button>
              <Button variant="secondary" size="sm">Save</Button>
            </div>
          }
        />
      )
    },
    {
      id: 3,
      content: (
        <ImageCard
          image={sampleImages[2]}
          title="Creative Studio"
          description="Inspiring workspace designed for creative professionals and innovative thinking."
          badge={{ text: "New", variant: "info" }}
          footer={
            <div style={{ display: 'flex', gap: currentTheme.spacing[2] }}>
              <Button variant="primary" size="sm">Learn More</Button>
              <Button variant="secondary" size="sm">Contact</Button>
            </div>
          }
        />
      )
    }
  ];

  // Navigation items for demo
  const navItems: NavItem[] = [
    { label: 'Home', href: '#', active: true },
    { label: 'Products', href: '#' },
    { label: 'Features', href: '#', badge: { text: 'New', variant: 'primary' } },
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length < 3 && e.target.value.length > 0) {
      setInputError('최소 3글자 이상 입력해주세요');
    } else {
      setInputError('');
    }
  };

  return (
    <>
      {/* Full Width Navigation */}
      <Navbar
        logo="Kgency"
        items={[
          { label: 'Product', href: '#' },
          { label: 'Company', href: '#' },
          { label: 'Resources', href: '#' },
          { label: 'Pricing', href: '#' },
        ]}
        actions={
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => navigate('/')}
          >
            🏠 홈으로
          </Button>
        }
        sticky={true}
      />

      {/* Full Width Hero Sections */}
      <div style={{ marginBottom: currentTheme.spacing[12] }}>
        <Hero
          title="Welcome to Linear"
          subtitle="The issue tracking tool your team will actually love"
          description="Linear helps streamline software projects, sprints, tasks, and bug tracking. It's built for high-performance teams."
          primaryAction={{ text: 'Get Started', href: '#' }}
          secondaryAction={{ text: 'Learn More', href: '#' }}
          variant="default"
          size="xl"
          textAlign="center"
        />
      </div>

      <div style={{ marginBottom: currentTheme.spacing[12] }}>
        <Hero
          title="Built for developers"
          subtitle="Ship faster with Linear"
          description="Experience the power of Linear's streamlined workflow and intuitive design."
          primaryAction={{ text: 'Try Linear', href: '#' }}
          variant="gradient"
          size="lg"
          textAlign="left"
        />
      </div>

      <div style={{ marginBottom: currentTheme.spacing[12] }}>
        <Hero
          title="Simple. Fast. Reliable."
          description="Everything you need to manage your projects effectively."
          primaryAction={{ text: 'Start Building', href: '#' }}
          variant="minimal"
          size="md"
          textAlign="center"
        />
      </div>

      <Layout>
      {/* Full Width Header Section */}
      <div style={{ marginBottom: currentTheme.spacing[16] }}>
        <Container maxWidth="xl">
          <Section>
            <div style={{ textAlign: 'center', marginBottom: currentTheme.spacing[12] }}>
              <h1 style={{
                fontSize: currentTheme.typography.fontSize['4xl'],
                fontWeight: currentTheme.typography.fontWeight.bold,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.display,
              }}>
                Linear Official UI Components
              </h1>
              <p style={{
                fontSize: currentTheme.typography.fontSize.lg,
                color: currentTheme.colors.text.secondary,
                fontFamily: currentTheme.typography.fontFamily.primary,
                marginBottom: currentTheme.spacing[2],
              }}>
                Linear Official Theme 2.0 기반의 재사용 가능한 컴포넌트들
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: currentTheme.spacing[2],
                padding: `${currentTheme.spacing[2]} ${currentTheme.spacing[4]}`,
                backgroundColor: currentTheme.colors.surfaces.panel,
                borderRadius: currentTheme.borderRadius.full,
                fontSize: currentTheme.typography.fontSize.sm,
                color: currentTheme.colors.text.tertiary,
                marginBottom: currentTheme.spacing[6],
              }}>
                <span style={{ color: mode === 'light' ? '☀️' : '🌙' }}>{mode === 'light' ? '☀️' : '🌙'}</span>
                {mode} mode • Inter font • LCH color space
              </div>
            </div>
          </Section>
        </Container>
      </div>

      {/* Full Width Hero Section */}
      <div style={{ marginBottom: currentTheme.spacing[16] }}>
        <Card style={{ 
          margin: 0,
          borderRadius: 0,
          border: 'none',
          borderTop: `1px solid ${currentTheme.colors.border.primary}`,
          borderBottom: `1px solid ${currentTheme.colors.border.primary}`,
        }}>
          <div style={{ 
            textAlign: 'center',
            padding: `${currentTheme.spacing[8]} 0`,
            backgroundColor: currentTheme.colors.surfaces.foreground,
          }}>
            <Container maxWidth="xl">
              <div style={{ textAlign: 'center', marginBottom: currentTheme.spacing[6] }}>
                <h2 style={{
                  fontSize: currentTheme.typography.fontSize['2xl'],
                  fontWeight: currentTheme.typography.fontWeight.semibold,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Hero Components (Full Width)
                </h2>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: currentTheme.spacing[3],
                  marginBottom: currentTheme.spacing[6],
                }}>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => {
                      // Open Kgency Hero examples in new window/tab
                      const heroExamplesWindow = window.open('', '_blank');
                      if (heroExamplesWindow) {
                        heroExamplesWindow.document.write(`
                          <!DOCTYPE html>
                          <html>
                          <head>
                            <title>Kgency Hero Examples</title>
                            <style>
                              body { margin: 0; font-family: Inter, system-ui, sans-serif; }
                              .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
                              .section-title { font-size: 24px; font-weight: 600; margin: 40px 0 20px 0; color: #1f2937; }
                              .description { color: #6b7280; margin-bottom: 30px; line-height: 1.6; }
                            </style>
                          </head>
                          <body>
                            <div class="container">
                              <h1>🎨 Kgency Hero 컴포넌트 예시</h1>
                              <p class="description">
                                새롭게 업그레이드된 Hero 컴포넌트의 다양한 스타일과 기능을 확인해보세요. 
                                애니메이션 통계, 실시간 알림, 인터랙티브 파티클 등의 기능이 포함되어 있습니다.
                              </p>
                              
                              <div class="section-title">📊 주요 기능</div>
                              <ul>
                                <li><strong>애니메이션 통계 카운터:</strong> 숫자가 0부터 목표값까지 애니메이션으로 증가</li>
                                <li><strong>실시간 알림 시스템:</strong> 오른쪽 하단에 매칭/가입 알림 표시</li>
                                <li><strong>인터랙티브 파티클:</strong> 떠다니는 파티클 효과로 생동감 연출</li>
                                <li><strong>기능 태그:</strong> 주요 기능을 아이콘과 함께 시각적으로 표시</li>
                                <li><strong>향상된 디자인:</strong> 블러 효과와 그라디언트로 모던한 느낌</li>
                              </ul>
                              
                              <div class="section-title">🚀 4가지 Hero 스타일</div>
                              <ol>
                                <li><strong>그라디언트 히어로:</strong> 통계와 기능 태그 포함</li>
                                <li><strong>인터랙티브 히어로:</strong> 파티클 배경 + 실시간 알림</li>
                                <li><strong>미디어 히어로:</strong> 비디오/이미지와 함께 표시</li>
                                <li><strong>배경 이미지 히어로:</strong> 풀스크린 배경 이미지</li>
                              </ol>
                              
                              <div class="section-title">💻 사용 방법</div>
                              <p>개발자 도구를 열고 다음 위치의 파일을 확인하세요:</p>
                              <code style="background: #f3f4f6; padding: 10px; display: block; border-radius: 6px; margin: 10px 0;">
                                src/pages/home/KgencyHeroExample.tsx
                              </code>
                              
                              <div style="margin-top: 40px; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
                                <strong>📝 개발 노트:</strong> 
                                이 Hero 컴포넌트는 CLAUDE.md 가이드라인에 따라 제작되었으며, 
                                Kgency 외국인 채용 플랫폼에 최적화되어 있습니다.
                              </div>
                            </div>
                          </body>
                          </html>
                        `);
                        heroExamplesWindow.document.close();
                      }
                    }}
                  >
                    🎨 Kgency Hero 예시 보기
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => {
                      // Copy the import statement to clipboard
                      const importText = 'import { KgencyHeroExample } from "../pages/home/KgencyHeroExample";';
                      navigator.clipboard.writeText(importText).then(() => {
                        alert('Import 구문이 클립보드에 복사되었습니다!');
                      });
                    }}
                  >
                    📋 Import 복사
                  </Button>
                </div>
              </div>
              
              <div style={{ marginBottom: currentTheme.spacing[8] }}>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Default Hero
                </h3>
                <Hero
                  badge={{ text: "New Feature", variant: "primary" }}
                  title="Build faster with Linear UI"
                  subtitle="The modern component library"
                  description="Create beautiful, consistent interfaces with our comprehensive design system. Built for developers who care about quality and speed."
                  primaryAction={{ text: "Get Started", onClick: () => alert('Get Started clicked!') }}
                  secondaryAction={{ text: "Learn More", onClick: () => alert('Learn More clicked!') }}
                  size="md"
                />
              </div>

              <div style={{ marginBottom: currentTheme.spacing[8] }}>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Hero with Media
                </h3>
                <Hero
                  title="Design meets functionality"
                  description="Experience the perfect blend of beautiful design and powerful functionality with our component library."
                  primaryAction={{ text: "Explore Components", onClick: () => alert('Exploring!') }}
                  media={{
                    type: 'image',
                    src: sampleImages[0],
                    alt: 'Product showcase'
                  }}
                  textAlign="left"
                  size="md"
                />
              </div>
            </Container>
          </div>
        </Card>
      </div>

      {/* Gradient Hero Full Width */}
      <div style={{ marginBottom: currentTheme.spacing[16] }}>
        <Hero
          title="Powerful. Simple. Linear."
          description="The issue tracking tool your team will actually love to use. Streamline your workflow and ship faster."
          primaryAction={{ text: "Start Free Trial", onClick: () => alert('Trial started!') }}
          secondaryAction={{ text: "Watch Demo", onClick: () => alert('Watching demo!') }}
          variant="gradient"
          size="lg"
        />
      </div>

      {/* Full Width Navigation Section */}
      <div style={{ marginBottom: currentTheme.spacing[16] }}>
        <div style={{ 
          backgroundColor: currentTheme.colors.surfaces.foreground,
          borderTop: `1px solid ${currentTheme.colors.border.primary}`,
          borderBottom: `1px solid ${currentTheme.colors.border.primary}`,
          padding: `${currentTheme.spacing[8]} 0`
        }}>
          <Container maxWidth="xl">
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
              textAlign: 'center',
            }}>
              Navigation (Full Width)
            </h2>
            
            <div style={{ marginBottom: currentTheme.spacing[6] }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
                textAlign: 'center',
              }}>
                Default Navbar
              </h3>
            </div>
          </Container>
          
          <Navbar
            logo={<span style={{ fontSize: '24px' }}>⚡</span>}
            logoText="Linear UI"
            items={navItems}
            actions={
              <div style={{ display: 'flex', gap: currentTheme.spacing[2] }}>
                <Button variant="secondary" size="sm">Sign In</Button>
                <Button variant="primary" size="sm">Sign Up</Button>
              </div>
            }
            sticky={false}
          />
          
          <Container maxWidth="xl">
            <div style={{ marginTop: currentTheme.spacing[6] }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
                textAlign: 'center',
              }}>
                Transparent Navbar
              </h3>
              <div style={{ 
                position: 'relative',
                background: `linear-gradient(135deg, ${currentTheme.colors.primary[100]} 0%, ${currentTheme.colors.primary[50]} 100%)`,
                borderRadius: currentTheme.borderRadius.xl,
                overflow: 'hidden',
              }}>
                <Navbar
                  logo={<span style={{ fontSize: '24px' }}>🚀</span>}
                  logoText="Product"
                  items={navItems.slice(0, 4)}
                  actions={
                    <Button variant="primary" size="sm">
                      Get Started
                    </Button>
                  }
                  transparent={true}
                  sticky={false}
                />
                <div style={{ padding: currentTheme.spacing[8], textAlign: 'center' }}>
                  <p style={{ color: currentTheme.colors.text.secondary }}>
                    Background content to show transparency effect
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Regular Components Container */}
      <Container maxWidth="xl">
        <Section>

          {/* Buttons Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Buttons
            </h2>
            <Grid columns={2} gap="6">
              <div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Primary Buttons
                </h3>
                <div style={{ display: 'flex', gap: currentTheme.spacing[3], flexWrap: 'wrap' }}>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Secondary Buttons
                </h3>
                <div style={{ display: 'flex', gap: currentTheme.spacing[3], flexWrap: 'wrap' }}>
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="md">Medium</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                </div>
              </div>
            </Grid>
          </Card>

          {/* Inputs Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Input Fields
            </h2>
            <Grid columns={2} gap="6">
              <div>
                <Input 
                  label="기본 입력 필드" 
                  placeholder="텍스트를 입력하세요"
                  value={inputValue}
                  onChange={handleInputChange}
                  error={inputError}
                />
              </div>
              <div>
                <Input 
                  label="이메일" 
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <Input 
                  label="비밀번호" 
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              <div>
                <Input 
                  label="비활성화된 필드" 
                  placeholder="비활성화됨"
                  disabled
                />
              </div>
            </Grid>
          </Card>

          {/* Badges Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Badges
            </h2>
            <Grid columns={2} gap="6">
              <div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Variants
                </h3>
                <div style={{ display: 'flex', gap: currentTheme.spacing[3], flexWrap: 'wrap' }}>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              <div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Sizes
                </h3>
                <div style={{ display: 'flex', gap: currentTheme.spacing[3], flexWrap: 'wrap', alignItems: 'center' }}>
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
            </Grid>
          </Card>

          {/* Cards Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Cards
            </h2>
            <Grid columns={3} gap="6">
              <Card>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[3],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  기본 카드
                </h3>
                <p style={{
                  color: currentTheme.colors.text.secondary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  이것은 기본 카드 컴포넌트입니다. 호버 효과가 적용됩니다.
                </p>
                <Button variant="primary" size="sm">액션</Button>
              </Card>
              
              <Card>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[3],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  상태 카드
                </h3>
                <div style={{ marginBottom: currentTheme.spacing[4] }}>
                  <Badge variant="success" size="sm">활성</Badge>
                </div>
                <p style={{
                  color: currentTheme.colors.text.secondary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  배지와 함께 사용하는 카드 예시입니다.
                </p>
                <Button variant="secondary" size="sm">자세히 보기</Button>
              </Card>
              
              <Card hover={false}>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[3],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  정적 카드
                </h3>
                <p style={{
                  color: currentTheme.colors.text.secondary,
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  호버 효과가 비활성화된 카드입니다.
                </p>
              </Card>
            </Grid>
          </Card>

          {/* Image Cards Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Image Cards
            </h2>
            <Grid columns={3} gap="6">
              <ImageCard
                image={sampleImages[0]}
                title="Office Setup"
                description="Modern workspace with clean design and natural lighting."
                badge={{ text: "Featured", variant: "primary" }}
                footer={
                  <div style={{ display: 'flex', gap: currentTheme.spacing[2] }}>
                    <Button variant="primary" size="sm">View</Button>
                    <Button variant="secondary" size="sm">Share</Button>
                  </div>
                }
              />
              
              <ImageCard
                image={sampleImages[1]}
                title="Development"
                description="Perfect environment for coding and development work."
                badge={{ text: "Popular", variant: "success" }}
                footer={
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: currentTheme.typography.fontSize.sm,
                      color: currentTheme.colors.text.tertiary 
                    }}>
                      4.8 ★
                    </span>
                    <Button variant="secondary" size="sm">Explore</Button>
                  </div>
                }
              />
              
              <ImageCard
                image={sampleImages[2]}
                title="Creative Space"
                description="Inspiring workspace for creative professionals."
              >
                <div style={{ 
                  display: 'flex', 
                  gap: currentTheme.spacing[1],
                  marginBottom: currentTheme.spacing[3]
                }}>
                  <Badge variant="info" size="sm">Design</Badge>
                  <Badge variant="secondary" size="sm">Creative</Badge>
                </div>
                <Button variant="primary" size="sm" style={{ width: '100%' }}>
                  Get Started
                </Button>
              </ImageCard>
            </Grid>
          </Card>

          {/* Carousel Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Carousel
            </h2>
            
            <div style={{ marginBottom: currentTheme.spacing[6] }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
              }}>
                Single Item Carousel
              </h3>
              <Carousel
                items={carouselItems}
                autoPlay={true}
                autoPlayInterval={4000}
                showDots={true}
                showArrows={true}
                itemsPerView={1}
                style={{ height: '420px' }}
              />
            </div>

            <div style={{ marginBottom: currentTheme.spacing[6] }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
              }}>
                Multi-Item Carousel
              </h3>
              <Carousel
                items={[
                  ...carouselItems,
                  {
                    id: 4,
                    content: (
                      <ImageCard
                        image={sampleImages[3]}
                        title="Tech Hub"
                        description="State-of-the-art technology workspace."
                        badge={{ text: "Hot", variant: "warning" }}
                      />
                    )
                  },
                  {
                    id: 5,
                    content: (
                      <ImageCard
                        image={sampleImages[4]}
                        title="AI Workspace"
                        description="Future-focused environment for AI development."
                        badge={{ text: "AI", variant: "info" }}
                      />
                    )
                  }
                ]}
                autoPlay={false}
                showDots={true}
                showArrows={true}
                itemsPerView={2}
                gap={20}
                style={{ height: '420px' }}
              />
            </div>

            <div>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
              }}>
                Minimal Carousel (No Controls)
              </h3>
              <Carousel
                items={carouselItems.slice(0, 2)}
                autoPlay={true}
                autoPlayInterval={3000}
                showDots={false}
                showArrows={false}
                itemsPerView={1}
                style={{ height: '420px' }}
              />
            </div>
          </Card>

          {/* Layout Section */}
          <Card>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Layout Components
            </h2>
            <p style={{
              color: currentTheme.colors.text.secondary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              이 페이지는 Layout, Container, Grid, Section 컴포넌트를 사용하여 구성되었습니다.
            </p>
            <div style={{
              padding: currentTheme.spacing[4],
              backgroundColor: currentTheme.colors.surfaces.panel,
              borderRadius: currentTheme.borderRadius.md,
              border: `1px solid ${currentTheme.colors.border.secondary}`,
            }}>
              <code style={{
                fontSize: currentTheme.typography.fontSize.sm,
                color: currentTheme.colors.text.primary,
                fontFamily: currentTheme.typography.fontFamily.mono,
              }}>
                {'<Layout> > <Container> > <Section> > <Grid>'}
              </code>
            </div>
          </Card>


          {/* Global Connection Hub Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
              textAlign: 'center',
            }}>
              글로벌 인재 연결 허브
            </h2>
            
            <p style={{
              fontSize: currentTheme.typography.fontSize.lg,
              color: currentTheme.colors.text.secondary,
              textAlign: 'center',
              marginBottom: currentTheme.spacing[8],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              한국을 중심으로 12개국의 우수한 인재들과 기업을 연결합니다
            </p>

            {/* Global Connection Visualization */}
            <div style={{
              position: 'relative',
              minHeight: '500px',
              background: `linear-gradient(135deg, ${currentTheme.colors.primary[50]} 0%, ${currentTheme.colors.surfaces.background} 100%)`,
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

          {/* Testimonials Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Customer Testimonials
            </h2>
            
            <Grid columns={2} gap="6">
              <Testimonial
                content="Linear has completely transformed how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%."
                author={{
                  name: "Sarah Johnson",
                  role: "CTO",
                  company: "TechCorp",
                  avatar: "https://i.pravatar.cc/150?img=1"
                }}
                rating={5}
                variant="featured"
              />
              
              <Testimonial
                content="The best project management tool we've ever used. It's fast, reliable, and the team loves using it every day."
                author={{
                  name: "Mike Chen",
                  role: "Product Manager",
                  company: "StartupXYZ"
                }}
                rating={5}
              />
              
              <Testimonial
                content="Switching to Linear was the best decision for our engineering team. The keyboard shortcuts and integrations save us hours every week."
                author={{
                  name: "Emily Davis",
                  role: "Engineering Lead",
                  company: "DevStudio"
                }}
                rating={4}
                variant="minimal"
                size="sm"
              />
              
              <Testimonial
                content="Linear's simplicity is its superpower. No bloat, just the features we need to ship faster."
                author={{
                  name: "Alex Kim",
                  role: "Founder",
                  company: "AI Innovations"
                }}
                size="sm"
              />
            </Grid>
          </Card>

          {/* Team Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Meet Our Team
            </h2>
            
            <Grid columns={3} gap="6">
              <TeamCard
                name="John Smith"
                role="CEO & Co-founder"
                bio="Passionate about building tools that developers love. 15+ years in software engineering."
                avatar="https://i.pravatar.cc/150?img=4"
                social={{
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  email: "john@example.com"
                }}
              />
              
              <TeamCard
                name="Maria Garcia"
                role="Head of Design"
                bio="Creating beautiful and functional interfaces. Former design lead at major tech companies."
                avatar="https://i.pravatar.cc/150?img=5"
                social={{
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com"
                }}
              />
              
              <TeamCard
                name="David Park"
                role="VP Engineering"
                bio="Building scalable systems and leading engineering teams for over a decade."
                avatar="https://i.pravatar.cc/150?img=6"
                social={{
                  linkedin: "https://linkedin.com",
                  github: "https://github.com"
                }}
              />
              
              <TeamCard
                name="Lisa Wong"
                role="Product Manager"
                variant="compact"
                avatar="https://i.pravatar.cc/150?img=9"
                social={{
                  linkedin: "https://linkedin.com"
                }}
              />
              
              <TeamCard
                name="James Wilson"
                role="Marketing Director"
                variant="compact"
                social={{
                  twitter: "https://twitter.com"
                }}
              />
              
              <TeamCard
                name="Anna Lee"
                role="Customer Success"
                variant="compact"
                avatar="https://i.pravatar.cc/150?img=10"
              />
            </Grid>
            
            <div style={{ marginTop: currentTheme.spacing[8] }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
              }}>
                Detailed Team Member
              </h3>
              <TeamCard
                name="Robert Johnson"
                role="Chief Technology Officer"
                bio="Leading the technical vision and strategy. Previously built and scaled engineering teams at Fortune 500 companies. Passionate about emerging technologies and their practical applications in solving real-world problems."
                avatar="https://i.pravatar.cc/150?img=8"
                variant="detailed"
                social={{
                  linkedin: "https://linkedin.com",
                  twitter: "https://twitter.com",
                  github: "https://github.com",
                  email: "robert@example.com"
                }}
              />
            </div>
          </Card>

          {/* Contact Form Section */}
          <Card style={{ marginBottom: currentTheme.spacing[8] }}>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Contact Forms
            </h2>
            
            <Grid columns={2} gap="8">
              <div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Default Contact Form
                </h3>
                <ContactForm
                  onSubmit={(data: ContactFormData) => {
                    console.log('Form submitted:', data);
                    alert('Thank you for your message! We\'ll get back to you soon.');
                  }}
                />
              </div>
              
              <div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Minimal Form
                </h3>
                <ContactForm
                  variant="minimal"
                  fields={{
                    name: false,
                    email: true,
                    phone: false,
                    company: false,
                    subject: false,
                    message: true
                  }}
                  submitText="Send"
                  onSubmit={(data: ContactFormData) => {
                    console.log('Minimal form submitted:', data);
                    alert('Message sent!');
                  }}
                />
              </div>
              
              <div>
                <h3 style={{
                  fontSize: currentTheme.typography.fontSize.lg,
                  fontWeight: currentTheme.typography.fontWeight.medium,
                  color: currentTheme.colors.text.primary,
                  marginBottom: currentTheme.spacing[4],
                  fontFamily: currentTheme.typography.fontFamily.primary,
                }}>
                  Detailed Form
                </h3>
                <ContactForm
                  variant="bordered"
                  fields={{
                    name: true,
                    email: true,
                    phone: true,
                    company: true,
                    subject: true,
                    message: true
                  }}
                  submitText="Submit Inquiry"
                  onSubmit={(data: ContactFormData) => {
                    console.log('Detailed form submitted:', data);
                    alert('We have received your inquiry!');
                  }}
                />
              </div>
            </Grid>
          </Card>

          {/* App Store Cards Section */}
          <Card>
            <h2 style={{
              fontSize: currentTheme.typography.fontSize['2xl'],
              fontWeight: currentTheme.typography.fontWeight.semibold,
              color: currentTheme.colors.text.primary,
              marginBottom: currentTheme.spacing[6],
              fontFamily: currentTheme.typography.fontFamily.primary,
            }}>
              Download Our App
            </h2>
            
            <div style={{ marginBottom: currentTheme.spacing[8] }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
              }}>
                App Store Cards
              </h3>
              <Grid columns={3} gap="6">
                <AppStoreCard
                  platform="ios"
                  appName="Linear Mobile"
                  description="iOS용 네이티브 앱으로 최적화된 사용자 경험을 제공합니다."
                  rating={{ score: 4.8, count: "2.1K" }}
                  badge={{ text: "Editor's Choice", variant: "success" }}
                  downloadUrl="https://apps.apple.com"
                  variant="card"
                />
                
                <AppStoreCard
                  platform="android"
                  appName="Linear Mobile"
                  description="Android 전용 앱으로 Google Play에서 다운로드 가능합니다."
                  rating={{ score: 4.6, count: "5.2K" }}
                  badge={{ text: "Top Rated", variant: "primary" }}
                  downloadUrl="https://play.google.com"
                  variant="card"
                />
                
                <AppStoreCard
                  platform="web"
                  appName="Linear Web"
                  description="브라우저에서 바로 사용할 수 있는 웹 애플리케이션입니다."
                  rating={{ score: 4.9, count: "12K" }}
                  badge={{ text: "Beta", variant: "warning" }}
                  downloadUrl="https://linear.app"
                  variant="card"
                />
              </Grid>
            </div>

            <div style={{ marginBottom: currentTheme.spacing[8] }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
              }}>
                Button Style Download Links
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: currentTheme.spacing[4], 
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <AppStoreCard
                  platform="ios"
                  appName="Linear Mobile"
                  downloadUrl="https://apps.apple.com"
                  variant="button"
                  size="lg"
                />
                
                <AppStoreCard
                  platform="android"
                  appName="Linear Mobile"
                  downloadUrl="https://play.google.com"
                  variant="button"
                  size="lg"
                />
                
                <AppStoreCard
                  platform="web"
                  appName="Linear Web"
                  downloadUrl="https://linear.app"
                  variant="button"
                  size="lg"
                />
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize.lg,
                fontWeight: currentTheme.typography.fontWeight.medium,
                color: currentTheme.colors.text.primary,
                marginBottom: currentTheme.spacing[4],
                fontFamily: currentTheme.typography.fontFamily.primary,
              }}>
                Different Sizes
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: currentTheme.spacing[3], 
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <AppStoreCard
                  platform="ios"
                  appName="iOS App"
                  downloadUrl="https://apps.apple.com"
                  variant="button"
                  size="sm"
                />
                
                <AppStoreCard
                  platform="android"
                  appName="Android App"
                  downloadUrl="https://play.google.com"
                  variant="button"
                  size="md"
                />
                
                <AppStoreCard
                  platform="web"
                  appName="Web App"
                  downloadUrl="https://linear.app"
                  variant="button"
                  size="lg"
                />
              </div>
            </div>
          </Card>
        </Section>
      </Container>
    </Layout>

    {/* Full Width Footer */}
    <Footer
      sections={[
        {
          title: 'Product',
          links: [
            { label: 'Features', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'API', href: '#' },
            { label: 'Changelog', href: '#' },
          ]
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' },
          ]
        },
        {
          title: 'Resources',
          links: [
            { label: 'Documentation', href: '#' },
            { label: 'Help Center', href: '#' },
            { label: 'Community', href: '#' },
            { label: 'Status', href: '#' },
          ]
        }
      ]}
      socialLinks={[
        { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
        { name: 'GitHub', href: 'https://github.com', icon: '⚡' },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
      ]}
      newsletter={{
        title: 'Stay updated',
        description: '최신 뉴스와 업데이트를 받아보세요.',
        placeholder: 'Enter your email',
        buttonText: 'Subscribe',
        onSubmit: (email: string) => console.log('Newsletter signup:', email)
      }}
      bottomText="© 2024 Your Company. All rights reserved."
    />
    </>
  );
};