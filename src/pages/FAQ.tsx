import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Layout, Container, Section } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Badge } from '../components/Badge';
import { FadeInElement } from '../components/FadeInElement';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const { currentTheme } = useTheme();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      question: "Q: kgency는 어떤 앱인가요?",
      answer: "A: kgency는 구직자와 기업을 연결하는 스마트한 매칭 플랫폼입니다. AI 기반 매칭 알고리즘을 통해 최적의 일자리를 찾아드립니다."
    },
    {
      question: "Q: 회원가입은 어떻게 하나요?",
      answer: "A: 앱을 다운로드한 후 휴대폰 번호로 간편하게 가입할 수 있습니다. OTP 인증을 통해 안전하게 계정을 생성합니다."
    },
    {
      question: "Q: 구직자와 기업 계정을 모두 만들 수 있나요?",
      answer: "A: 하나의 휴대폰 번호로는 구직자 또는 기업 중 하나의 계정만 생성할 수 있습니다."
    },
    {
      question: "Q: 매칭은 어떻게 이루어지나요?",
      answer: "A: 프로필에 등록한 키워드와 선호 조건을 바탕으로 AI가 최적의 매칭을 제공합니다. 적합도는 0-100점으로 표시됩니다."
    },
    {
      question: "Q: 면접 일정은 어떻게 조율하나요?",
      answer: "A: 기업이 제시한 면접 가능 시간 중에서 선택하거나, 메시지를 통해 직접 조율할 수 있습니다."
    },
    {
      question: "Q: 앱 사용료가 있나요?",
      answer: "A: kgency는 무료로 사용할 수 있습니다."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Layout>
      <Navbar
        logo="Kgency"
        items={[
          { label: '홈', href: '/' },
          { label: '서비스 소개', href: '#about' },
          { label: '기업 서비스', href: '#companies' },
          { label: '구직자 서비스', href: '#jobseekers' }
        ]}

        sticky={true}
      />

      <Section spacing="xl" style={{ 
        backgroundColor: currentTheme.colors.surfaces.background,
        minHeight: '80vh'
      }}>
        <Container maxWidth="xl">
          <FadeInElement delay={0.2} direction="up">
            <div style={{ 
              textAlign: 'center', 
              marginBottom: currentTheme.spacing[16]
            }}>
              <Badge 
                variant="primary" 
                size="md" 
                style={{ 
                  marginBottom: currentTheme.spacing[4]
                }}
              >
                고객 지원
              </Badge>
              <h1 style={{
                fontSize: currentTheme.typography.fontSize['4xl'],
                fontWeight: currentTheme.typography.fontWeight.bold,
                marginBottom: currentTheme.spacing[4],
                color: currentTheme.colors.text.primary,
                letterSpacing: '-0.02em'
              }}>
                자주 묻는 질문
              </h1>
              <p style={{
                fontSize: currentTheme.typography.fontSize.xl,
                color: currentTheme.colors.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                Kgency 사용에 대한 궁금한 점들을 해결해보세요
              </p>
            </div>
          </FadeInElement>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqData.map((item, index) => (
              <FadeInElement key={index} delay={0.2 + index * 0.1} direction="up">
                <div 
                  style={{
                    marginBottom: currentTheme.spacing[4],
                    backgroundColor: currentTheme.colors.surfaces.elevated,
                    borderRadius: currentTheme.borderRadius.lg,
                    border: `1px solid ${currentTheme.colors.border.primary}`,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div 
                    style={{
                      padding: currentTheme.spacing[6],
                      cursor: 'pointer',
                      borderBottom: openItems.includes(index) 
                        ? `1px solid ${currentTheme.colors.border.primary}` 
                        : 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onClick={() => toggleItem(index)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.lg,
                      fontWeight: currentTheme.typography.fontWeight.semibold,
                      color: currentTheme.colors.text.primary,
                      flex: 1
                    }}>
                      {item.question}
                    </div>
                    <div style={{
                      fontSize: currentTheme.typography.fontSize.xl,
                      color: currentTheme.colors.primary[500],
                      transform: openItems.includes(index) ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      +
                    </div>
                  </div>
                  
                  {openItems.includes(index) && (
                    <div style={{
                      padding: currentTheme.spacing[6],
                      backgroundColor: currentTheme.colors.surfaces.background,
                      animation: 'fadeIn 0.3s ease'
                    }}>
                      <div style={{
                        fontSize: currentTheme.typography.fontSize.base,
                        color: currentTheme.colors.text.secondary,
                        lineHeight: 1.6
                      }}>
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              </FadeInElement>
            ))}
          </div>

          <FadeInElement delay={0.8} direction="up">
            <div style={{
              marginTop: currentTheme.spacing[16],
              padding: currentTheme.spacing[8],
              backgroundColor: currentTheme.colors.surfaces.elevated,
              borderRadius: currentTheme.borderRadius.xl,
              textAlign: 'center',
              border: `1px solid ${currentTheme.colors.border.primary}`
            }}>
              <h3 style={{
                fontSize: currentTheme.typography.fontSize['2xl'],
                fontWeight: currentTheme.typography.fontWeight.bold,
                marginBottom: currentTheme.spacing[4],
                color: currentTheme.colors.text.primary
              }}>
                더 궁금한 점이 있으신가요?
              </h3>
              <p style={{
                fontSize: currentTheme.typography.fontSize.base,
                color: currentTheme.colors.text.secondary,
                marginBottom: currentTheme.spacing[6],
                lineHeight: 1.6
              }}>
                언제든지 고객 지원팀에 문의해주세요. 빠른 시간 내에 답변드리겠습니다.
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: currentTheme.spacing[4],
                flexWrap: 'wrap'
              }}>
                <a 
                  href="mailto:support@kgency.com"
                  style={{
                    padding: `${currentTheme.spacing[3]} ${currentTheme.spacing[6]}`,
                    backgroundColor: currentTheme.colors.primary[500],
                    color: currentTheme.colors.text.inverse,
                    borderRadius: currentTheme.borderRadius.md,
                    textDecoration: 'none',
                    fontSize: currentTheme.typography.fontSize.base,
                    fontWeight: currentTheme.typography.fontWeight.medium,
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = currentTheme.colors.primary[600];
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = currentTheme.colors.primary[500];
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  📧 이메일 문의
                </a>
                <a 
                  href="/contact"
                  style={{
                    padding: `${currentTheme.spacing[3]} ${currentTheme.spacing[6]}`,
                    backgroundColor: 'transparent',
                    color: currentTheme.colors.text.primary,
                    border: `2px solid ${currentTheme.colors.border.primary}`,
                    borderRadius: currentTheme.borderRadius.md,
                    textDecoration: 'none',
                    fontSize: currentTheme.typography.fontSize.base,
                    fontWeight: currentTheme.typography.fontWeight.medium,
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = currentTheme.colors.surfaces.panel;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  💬 1:1 문의
                </a>
              </div>
            </div>
          </FadeInElement>
        </Container>
      </Section>

      <Footer
        logo="Kgency"
        description="외국인 인재와 기업을 연결하는 스마트 매칭 플랫폼"
        sections={[
          {
            title: '서비스',
            links: [
              { label: '기업 서비스', href: '/companies' },
              { label: '구직자 서비스', href: '/jobseekers' }
            ]
          },
          {
            title: '지원',
            links: [
              { label: 'FAQ', href: '/faq' },
              { label: '1:1 문의', href: '/contact' }
            ]
          }
        ]}
        bottomText="© 2024 Kgency Inc. All rights reserved."
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Layout>
  );
};

export default FAQ;