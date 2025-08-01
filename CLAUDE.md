# Kgency 외국인 채용 플랫폼 홈페이지 제작 가이드

## 🚨 핵심 원칙

1. **Linear Design System 컴포넌트만 사용** - 새로운 UI 컴포넌트 금지
2. **테마 시스템 필수** - 인라인 스타일 금지, `useTheme()` 사용
3. **TypeScript 필수** - 모든 props 타입 정의
4. **반응형 우선** - 모바일 퍼스트 접근

## 📦 사용 가능한 컴포넌트

### Layout & Navigation
- `Container` - 최대 너비 제한 (`maxWidth="xl"`)
- `Grid` - 반응형 그리드 (`columns={{ sm: 1, md: 2, lg: 3 }}`)
- `Section` - 콘텐츠 섹션 (`spacing="lg"`)
- `Navbar` - 상단 네비게이션 (Full Width)
- `Footer` - 하단 푸터 (Full Width)

### Content Components
- `Hero` - 히어로 섹션 (Full Width, `variant="gradient"`)
- `FeatureCard` - 기능 소개 카드
- `Testimonial` - 고객 후기
- `TeamCard` - 팀 멤버 소개
- `Card` - 기본 카드

### Interactive Components
- `Button` - CTA 버튼 (`variant="primary|secondary|ghost"`)
- `ContactForm` - 문의 폼
- `ThemeToggle` - 다크모드 전환
- `Badge` - 라벨/태그

## 🎯 Kgency 홈페이지 구성

### 1. Header 구현
```tsx
<Navbar
  logo="Kgency"
  items={[
    { label: '서비스 소개', href: '#about' },
    { label: '기업 서비스', href: '#companies' },
    { label: '구직자 서비스', href: '#jobseekers' },
    { label: '성공사례', href: '#success-stories' }
  ]}
  actions={[
    { type: 'button', variant: 'ghost', text: '기업 회원가입' },
    { type: 'button', variant: 'primary', text: '구직자 회원가입' }
  ]}
  sticky={true}
/>
```

### 2. Hero Section
```tsx
<Hero
  badge={{ text: "글로벌 인재 매칭 플랫폼", variant: "primary" }}
  title="외국인 인재와 기업을 연결하는 스마트 매칭 플랫폼"
  subtitle="양방향 매칭으로 즉시 면접 확정"
  description="기업과 구직자가 서로 관심을 표현하면 바로 면접이 성사되는 혁신적인 채용 시스템"
  primaryAction={{ text: "무료로 시작하기", href: "/register" }}
  secondaryAction={{ text: "서비스 소개 보기", href: "#about" }}
  variant="gradient"
  size="xl"
  stats={[
    { value: "1,000+", label: "성공적인 매칭" },
    { value: "500+", label: "등록된 기업" },
    { value: "10,000+", label: "활성 구직자" }
  ]}
/>
```

### 3. 주요 특징 섹션
```tsx
<Section spacing="xl">
  <Container maxWidth="xl">
    <Grid columns={2} gap="8">
      <FeatureCard
        icon="⚡"
        title="즉시 매칭"
        description="상호 관심 표현 시 자동 면접 스케줄링"
        stats={{ value: "50%", label: "시간 단축" }}
        highlight={true}
      />
      <FeatureCard
        icon="🌍"
        title="12개국어 지원"
        description="원활한 글로벌 소통을 위한 다국어 인터페이스"
        stats={{ value: "12", label: "지원 언어" }}
      />
    </Grid>
  </Container>
</Section>
```

### 4. 성공 사례 섹션
```tsx
<Section spacing="xl">
  <Container maxWidth="xl">
    <Grid columns={2} gap="8">
      <Testimonial
        content="Kgency 덕분에 짧은 시간에 원하는 인재를 찾았습니다."
        author={{
          name: "김현수",
          role: "HR 팀장",
          company: "테크기업 A"
        }}
        rating={5}
        variant="featured"
      />
      <Testimonial
        content="복잡한 과정 없이 한국에서 꿈을 이룰 수 있었어요."
        author={{
          name: "Sarah Johnson",
          role: "소프트웨어 개발자",
          company: "핀란드 → 한국 취업 성공"
        }}
        rating={5}
        variant="featured"
      />
    </Grid>
  </Container>
</Section>
```

### 5. CTA 섹션
```tsx
<Section spacing="xl" style={{ backgroundColor: currentTheme.colors.primary[600] }}>
  <Container maxWidth="xl">
    <div style={{ textAlign: 'center', color: currentTheme.colors.text.inverse }}>
      <h2>지금 바로 시작하세요</h2>
      <p>글로벌 인재와 기업을 연결하는 혁신적인 매칭 플랫폼</p>
      <div style={{ display: 'flex', gap: currentTheme.spacing[4], justifyContent: 'center', marginTop: currentTheme.spacing[8] }}>
        <Button variant="secondary" size="lg">기업 회원가입</Button>
        <Button variant="ghost" size="lg">구직자 회원가입</Button>
      </div>
    </div>
  </Container>
</Section>
```

### 6. Footer
```tsx
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
```

## 🎨 테마 시스템 사용법

### 테마 접근
```tsx
import { useTheme } from '@/theme/ThemeProvider';

const Component = () => {
  const { currentTheme } = useTheme();
  
  return (
    <div style={{
      backgroundColor: currentTheme.colors.surfaces.background,
      color: currentTheme.colors.text.primary,
      padding: currentTheme.spacing[4]
    }}>
      콘텐츠
    </div>
  );
};
```

### 주요 테마 값
- **Colors**: `primary[500]`, `surfaces.background`, `text.primary`
- **Spacing**: `spacing[4]` (1rem), `spacing[8]` (2rem)
- **Typography**: `fontSize.xl`, `fontWeight.bold`
- **Border Radius**: `borderRadius.md`

## 🌍 다국어 지원

### 12개 지원 언어
한국어, 영어, 베트남어, 태국어, 인도네시아어, 필리핀어, 미얀마어, 캄보디아어, 네팔어, 방글라데시어, 스리랑카어, 몽골어

### 언어 선택 컴포넌트
```tsx
const LanguageSelector = () => {
  const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
    // ... 12개 언어
  ];
  
  return (
    <select onChange={handleLanguageChange}>
      {languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  );
};
```

## 📱 반응형 패턴

### 전체 너비 vs 컨테이너
```tsx
{/* Full Width Sections */}
<Navbar />
<Hero />

{/* Container Sections */}
<Layout>
  <Container maxWidth="xl">
    <Section>
      <Grid columns={{ sm: 1, md: 2, lg: 3 }}>
        {/* 콘텐츠 */}
      </Grid>
    </Section>
  </Container>
</Layout>

<Footer />
```

## 🔍 주요 메시지 및 핵심 키워드

### 메인 헤드라인
- "외국인 인재와 기업을 연결하는 스마트 매칭 플랫폼"
- "양방향 매칭으로 즉시 면접 확정"
- "글로벌 인재 채용의 새로운 기준, Kgency"

### 핵심 키워드
외국인 채용, 글로벌 인재, 양방향 매칭, 즉시 면접, 스마트 리크루팅, 12개국어 지원

### 차별화 포인트
1. **즉시 매칭**: 상호 관심 표현 시 자동 면접 스케줄링
2. **12개국어 지원**: 원활한 글로벌 소통
3. **검증된 성과**: 50% 시간 단축, 95% 만족도

## ⚡ 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 타입 체크
npm run typecheck
```

## ✅ 개발 체크리스트

- [ ] Linear Design System 컴포넌트만 사용
- [ ] 테마 시스템으로 스타일링 (하드코딩 금지)
- [ ] TypeScript 타입 정의
- [ ] 반응형 디자인 구현
- [ ] 12개국어 지원 확인
- [ ] 성능 최적화 (이미지 lazy loading)
- [ ] SEO 메타 태그 설정

## 🚫 금지사항

1. **인라인 스타일로 색상 하드코딩**
2. **커스텀 CSS 파일 생성**
3. **중복 컴포넌트 생성**
4. **localStorage/sessionStorage 사용** (메모리 상태만 사용)

이 가이드를 따라 일관성 있고 유지보수가 쉬운 Kgency 홈페이지를 제작하세요!