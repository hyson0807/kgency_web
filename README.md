# Kgency 외국인 채용 플랫폼 

![Kgency Logo](./src/assets/images/kgency_logo.png)

> 외국인 인재와 기업을 연결하는 스마트 매칭 플랫폼

## 🌟 프로젝트 개요

Kgency는 양방향 매칭 시스템을 통해 외국인 인재와 한국 기업을 효율적으로 연결하는 혁신적인 채용 플랫폼입니다. 기업과 구직자가 서로 관심을 표현하면 즉시 면접이 성사되는 시스템으로, 글로벌 인재 채용의 비효율성을 해소합니다.

### 🎯 핵심 기능

- **즉시 매칭**: 상호 관심 표현 시 자동 면접 스케줄링
- **12개국어 지원**: 원활한 글로벌 소통을 위한 다국어 인터페이스
- **양방향 매칭**: 기업과 구직자 모두가 선택권을 가지는 공정한 시스템
- **실시간 알림**: 매칭 현황과 지원 상태를 즉시 확인

### 📊 성과 지표

- 성공적인 매칭: **1,000+**
- 등록된 기업: **500+**
- 활성 구직자: **10,000+**
- 시간 단축: **50%**
- 사용자 만족도: **95%**

## 🛠 기술 스택

### Frontend
- **React 18** - 최신 React 기능 활용
- **TypeScript** - 타입 안전성 보장
- **Vite** - 빠른 개발 환경
- **Linear Design System** - 일관된 UI/UX

### 개발 도구
- **ESLint** - 코드 품질 관리
- **React Hooks** - 상태 관리 및 사이드 이펙트
- **CSS-in-JS** - 동적 스타일링

### 애니메이션
- **Intersection Observer API** - 뷰포트 기반 애니메이션
- **CSS Transitions** - 부드러운 UI 전환

## 🚀 빠른 시작

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-org/kgency_web.git
cd kgency_web

# 종속성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 코드 품질 검사
npm run lint
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Hero.tsx
│   ├── Layout.tsx
│   ├── FadeInElement.tsx
│   └── ...
├── pages/              # 페이지 컴포넌트
│   └── HomePage.tsx
├── theme/              # 테마 시스템
│   ├── ThemeProvider.tsx
│   ├── theme.ts
│   └── useStyles.ts
├── hooks/              # 커스텀 훅
│   └── useIntersectionObserver.ts
├── assets/             # 정적 자산
│   └── images/
└── main.tsx           # 애플리케이션 진입점
```

## 🎨 디자인 시스템

### Linear Design System 준수

본 프로젝트는 Linear의 공식 디자인 시스템을 기반으로 구축되었습니다.

#### 주요 컴포넌트

- **Layout**: `Container`, `Grid`, `Section`
- **Navigation**: `Navbar`, `Footer`
- **Content**: `Hero`, `FeatureCard`, `Testimonial`
- **Interactive**: `Button`, `ContactForm`, `Badge`

#### 테마 시스템

```typescript
// 테마 사용 예시
const { currentTheme } = useTheme();

const styles = {
  backgroundColor: currentTheme.colors.surfaces.background,
  color: currentTheme.colors.text.primary,
  padding: currentTheme.spacing[4]
};
```

### 반응형 디자인

- **Mobile First**: 모바일 우선 접근 방식
- **Breakpoints**: 스마트폰, 태블릿, 데스크톱 대응
- **Flexible Grid**: 다양한 화면 크기 지원

## ✨ 애니메이션 시스템

### Intersection Observer 기반 애니메이션

```typescript
// FadeInElement 사용 예시
<FadeInElement delay={0.2} direction="up">
  <FeatureCard title="즉시 매칭" />
</FadeInElement>
```

### 지원하는 애니메이션

- **방향**: `up`, `down`, `left`, `right`
- **타이밍**: 커스터마이즈 가능한 딜레이
- **순차 등장**: 스태거드 애니메이션

## 🌍 다국어 지원

### 지원 언어 (12개국)

- 🇰🇷 한국어
- 🇺🇸 English
- 🇻🇳 Tiếng Việt
- 🇹🇭 ภาษาไทย
- 🇮🇩 Bahasa Indonesia
- 🇵🇭 Filipino
- 🇲🇲 မြန်မာ
- 🇰🇭 ខ្មែរ
- 🇳🇵 नेपाली
- 🇧🇩 বাংলা
- 🇱🇰 සිංහල
- 🇲🇳 Монгол

## 🛡️ 보안 및 신뢰성

### 인증 및 보안

- **ISMS-P 인증**: 정보보호 및 개인정보보호 국가 인증
- **256bit SSL 암호화**: 금융권 수준의 데이터 보호
- **24/7 모니터링**: AI 기반 이상 탐지 시스템

### 성능 지표

- 서비스 가동률: **99.9%**
- 보안 사고: **0건**
- 보안 등급: **A+**

## 📝 개발 가이드라인

### 코딩 규칙

1. **Linear Design System 컴포넌트만 사용**
2. **테마 시스템 필수 사용** - 인라인 스타일 금지
3. **TypeScript 타입 정의 필수**
4. **반응형 디자인 구현**

### 금지사항

- ❌ 인라인 스타일로 색상 하드코딩
- ❌ 커스텀 CSS 파일 생성
- ❌ 중복 컴포넌트 생성
- ❌ localStorage/sessionStorage 사용

### 체크리스트

- [ ] Linear Design System 컴포넌트 사용
- [ ] 테마 시스템 적용
- [ ] TypeScript 타입 정의
- [ ] 반응형 디자인
- [ ] Intersection Observer 애니메이션
- [ ] ESLint 규칙 준수

## 🤝 기여하기

### 개발 프로세스

1. 이슈 생성 또는 기존 이슈 선택
2. 브랜치 생성: `feature/기능명` 또는 `fix/수정사항`
3. 개발 진행
4. 린팅 및 타입 체크: `npm run lint`
5. Pull Request 생성

### 커밋 메시지 규칙

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 업무 수정
```

## 📞 문의 및 지원

- **웹사이트**: [https://kgency.com](https://kgency.com)
- **이메일**: simsgood0807@gmail.com
- **문서**: [개발자 가이드](./CLAUDE.md)

## 📄 라이선스

이 프로젝트는 [MIT License](LICENSE)를 따릅니다.

---

**Kgency** - 글로벌 인재 채용의 새로운 기준 🌟