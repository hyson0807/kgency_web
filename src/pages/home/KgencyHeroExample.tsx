import React from 'react';
import { Hero } from '../../components/Hero';

export const KgencyHeroExample: React.FC = () => {
  // Sample data for the enhanced hero
  const heroStats = [
    { value: 1247, label: '성공적인 매칭', animate: true },
    { value: '500+', label: '등록된 기업' },
    { value: 12584, label: '활성 구직자', animate: true }
  ];

  const heroFeatures = [
    { icon: '⚡', text: '즉시 매칭' },
    { icon: '🌍', text: '12개국어 지원' },
    { icon: '🎯', text: '90% 매칭 정확도' },
    { icon: '🔒', text: '안전한 개인정보 보호' }
  ];


  return (
    <div>
      {/* 기본 그라디언트 히어로 */}
      <Hero
        badge={{ text: "글로벌 인재 매칭 플랫폼", variant: "primary" }}
        subtitle="혁신적인 양방향 매칭 시스템"
        title="외국인 인재와 기업을 연결하는 스마트 플랫폼"
        description="기업과 구직자가 서로 관심을 표현하면 바로 면접이 성사되는 혁신적인 채용 시스템으로, 글로벌 인재 채용의 비효율성을 해소합니다."
        primaryAction={{
          text: "무료로 시작하기",
          href: "/register"
        }}
        secondaryAction={{
          text: "서비스 소개 보기", 
          href: "#about"
        }}
        variant="gradient"
        size="xl"
        stats={heroStats}
        features={heroFeatures}
      />

      {/* 인터랙티브 히어로 (파티클 배경 + 실시간 알림) */}
      <Hero
        badge={{ text: "실시간 매칭 현황", variant: "success" }}
        subtitle="지금 이 순간에도"
        title="새로운 인연이 만들어지고 있습니다"
        description="Kgency 플랫폼에서 매일 수십 건의 성공적인 매칭이 이루어지고 있습니다. 당신도 지금 바로 시작해보세요!"
        primaryAction={{
          text: "지금 매칭받기",
          href: "/matching"
        }}
        secondaryAction={{
          text: "성공 사례 보기",
          href: "/success-stories"
        }}
        variant="interactive"
        size="lg"
        features={[
          { icon: '🔥', text: '실시간 매칭' },
          { icon: '💼', text: '즉시 면접 확정' },
          { icon: '🌐', text: '글로벌 네트워크' }
        ]}
        stats={[
          { value: 28, label: '오늘의 매칭', animate: true },
          { value: '95%', label: '사용자 만족도' },
          { value: 847, label: '이번 주 신규 가입', animate: true }
        ]}
      />

      {/* 미디어가 포함된 히어로 */}
      <Hero
        badge={{ text: "Kgency 소개 영상", variant: "info" }}
        title="3분만에 알아보는 Kgency"
        description="Kgency가 어떻게 외국인 인재와 한국 기업을 효과적으로 연결하는지 영상으로 확인해보세요."
        primaryAction={{
          text: "지금 시작하기",
          href: "/register"
        }}
        media={{
          type: 'video',
          src: '/videos/kgency-intro.mp4',
          poster: '/images/hero/video-poster.jpg'
        }}
        variant="default"
        size="lg"
        textAlign="left"
      />

      {/* 배경 이미지가 있는 히어로 */}
      <Hero
        badge={{ text: "글로벌 인재", variant: "secondary" }}
        title="세계 각국의 우수한 인재들"
        subtitle="한국에서의 새로운 기회를 기다리고 있습니다"
        description="12개국 이상의 검증된 외국인 인재들이 한국 기업과의 매칭을 기다리고 있습니다. 지금 바로 만나보세요!"
        primaryAction={{
          text: "인재 찾기",
          href: "/companies/register"
        }}
        secondaryAction={{
          text: "인재 풀 보기",
          href: "/talent-pool"
        }}
        backgroundImage="/images/hero/global-talent-bg.jpg"
        backgroundOverlay={true}
        variant="default"
        size="xl"
        features={[
          { icon: '🇰🇷', text: '한국 취업 희망' },
          { icon: '🎓', text: '검증된 학력' },
          { icon: '💻', text: '전문 기술 보유' },
          { icon: '🗣️', text: '다국어 가능' }
        ]}
      />
    </div>
  );
};

export default KgencyHeroExample;