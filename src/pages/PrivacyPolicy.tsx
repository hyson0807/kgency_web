import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Layout } from '../components/Layout';

const PrivacyPolicy: React.FC = () => {
  const { currentTheme } = useTheme();

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: `${currentTheme.spacing[8]} ${currentTheme.spacing[4]}`,
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: currentTheme.spacing[12],
  };

  const titleStyle = {
    fontSize: currentTheme.typography.fontSize['3xl'],
    fontWeight: currentTheme.typography.fontWeight.bold,
    color: currentTheme.colors.text.primary,
    marginBottom: currentTheme.spacing[4],
  };

  const subtitleStyle = {
    fontSize: currentTheme.typography.fontSize.lg,
    color: currentTheme.colors.text.secondary,
    lineHeight: currentTheme.typography.lineHeight.relaxed,
  };

  const lastUpdatedStyle = {
    fontSize: currentTheme.typography.fontSize.sm,
    color: currentTheme.colors.text.tertiary,
    marginTop: currentTheme.spacing[4],
  };

  const sectionStyle = {
    marginBottom: currentTheme.spacing[8],
  };

  const sectionTitleStyle = {
    fontSize: currentTheme.typography.fontSize.xl,
    fontWeight: currentTheme.typography.fontWeight.semibold,
    color: currentTheme.colors.text.primary,
    marginBottom: currentTheme.spacing[4],
    display: 'flex',
    alignItems: 'center',
    gap: currentTheme.spacing[3],
  };

  const subSectionTitleStyle = {
    fontSize: currentTheme.typography.fontSize.lg,
    fontWeight: currentTheme.typography.fontWeight.medium,
    color: currentTheme.colors.text.primary,
    marginTop: currentTheme.spacing[4],
    marginBottom: currentTheme.spacing[2],
  };

  const paragraphStyle = {
    color: currentTheme.colors.text.secondary,
    lineHeight: currentTheme.typography.lineHeight.relaxed,
    marginBottom: currentTheme.spacing[4],
  };

  const listStyle = {
    color: currentTheme.colors.text.secondary,
    lineHeight: currentTheme.typography.lineHeight.relaxed,
    paddingLeft: currentTheme.spacing[6],
    marginBottom: currentTheme.spacing[4],
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: currentTheme.spacing[4],
    marginBottom: currentTheme.spacing[4],
  };

  const tableHeaderStyle = {
    backgroundColor: currentTheme.colors.surfaces.panel,
    padding: currentTheme.spacing[3],
    textAlign: 'left' as const,
    fontSize: currentTheme.typography.fontSize.sm,
    fontWeight: currentTheme.typography.fontWeight.semibold,
    color: currentTheme.colors.text.primary,
    border: `1px solid ${currentTheme.colors.border.primary}`,
  };

  const tableCellStyle = {
    padding: currentTheme.spacing[3],
    fontSize: currentTheme.typography.fontSize.sm,
    color: currentTheme.colors.text.secondary,
    border: `1px solid ${currentTheme.colors.border.primary}`,
    verticalAlign: 'top' as const,
  };

  const highlightBoxStyle = {
    backgroundColor: currentTheme.colors.surfaces.panel,
    border: `1px solid ${currentTheme.colors.border.primary}`,
    borderRadius: currentTheme.borderRadius.md,
    padding: currentTheme.spacing[4],
    marginBottom: currentTheme.spacing[4],
  };

  const contactBoxStyle = {
    backgroundColor: currentTheme.colors.surfaces.foreground,
    border: `1px solid ${currentTheme.colors.border.primary}`,
    borderRadius: currentTheme.borderRadius.lg,
    padding: currentTheme.spacing[6],
    textAlign: 'center' as const,
    marginTop: currentTheme.spacing[8],
  };

  return (
    <Layout>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <Badge variant="primary" style={{ marginBottom: currentTheme.spacing[4] }}>
            개인정보처리방침
          </Badge>
          <h1 style={titleStyle}>
            Kgency 개인정보처리방침
          </h1>
          <p style={subtitleStyle}>
            Kgency는 사용자의 개인정보를 중요시하며, 개인정보보호법에 따라 정보를 보호하고 있습니다.
          </p>
          <p style={lastUpdatedStyle}>
            시행일: 2024년 1월 1일
          </p>
        </div>

        {/* 1. 개인정보 수집 항목 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            📋 1. 개인정보 수집 항목
          </div>
          
          <h3 style={subSectionTitleStyle}>가. 필수 수집 항목</h3>
          <ul style={listStyle}>
            <li><strong>구직자:</strong> 이름, 이메일 주소, 전화번호, 생년월일, 국적, 비자 상태</li>
            <li><strong>기업회원:</strong> 담당자명, 회사명, 사업자등록번호, 이메일 주소, 전화번호</li>
            <li><strong>공통:</strong> 서비스 이용기록, 접속 로그, IP 주소, 쿠키</li>
          </ul>

          <h3 style={subSectionTitleStyle}>나. 선택 수집 항목</h3>
          <ul style={listStyle}>
            <li>학력사항, 경력사항, 자격증, 어학능력, 포트폴리오</li>
            <li>프로필 사진, 자기소개서</li>
            <li>희망 근무지역, 희망 연봉</li>
          </ul>

          <h3 style={subSectionTitleStyle}>다. 자동 수집 항목</h3>
          <ul style={listStyle}>
            <li>기기정보 (모델명, OS 버전, 기기 식별자)</li>
            <li>서비스 이용기록, 앱 사용 패턴</li>
            <li>위치정보 (선택적, 동의 시에만)</li>
          </ul>
        </Card>

        {/* 2. 개인정보 수집 및 이용 목적 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            🎯 2. 개인정보 수집 및 이용 목적
          </div>
          
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>목적</th>
                <th style={tableHeaderStyle}>상세 내용</th>
                <th style={tableHeaderStyle}>법적 근거</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>회원 관리</td>
                <td style={tableCellStyle}>
                  회원가입, 본인확인, 서비스 부정이용 방지, 고지사항 전달
                </td>
                <td style={tableCellStyle}>계약 이행</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>매칭 서비스 제공</td>
                <td style={tableCellStyle}>
                  구직자-기업 간 매칭, 면접 일정 조율, 채용 프로세스 지원
                </td>
                <td style={tableCellStyle}>계약 이행</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>맞춤형 서비스 제공</td>
                <td style={tableCellStyle}>
                  추천 알고리즘 운영, 개인화된 채용 정보 제공
                </td>
                <td style={tableCellStyle}>정당한 이익</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>마케팅 및 광고</td>
                <td style={tableCellStyle}>
                  이벤트 및 혜택 정보 제공, 서비스 홍보
                </td>
                <td style={tableCellStyle}>동의</td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* 3. 개인정보 보관 및 파기 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            🗄️ 3. 개인정보 보관 및 파기
          </div>
          
          <h3 style={subSectionTitleStyle}>가. 보관 기간</h3>
          <ul style={listStyle}>
            <li><strong>회원 정보:</strong> 회원 탈퇴 시까지</li>
            <li><strong>채용 관련 정보:</strong> 채용 종료 후 3년</li>
            <li><strong>마케팅 정보:</strong> 동의 철회 시까지</li>
          </ul>

          <h3 style={subSectionTitleStyle}>나. 법령에 따른 보관</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>보관 항목</th>
                <th style={tableHeaderStyle}>보관 기간</th>
                <th style={tableHeaderStyle}>법적 근거</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>계약 또는 청약철회 기록</td>
                <td style={tableCellStyle}>5년</td>
                <td style={tableCellStyle}>전자상거래법</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>대금결제 및 재화 공급 기록</td>
                <td style={tableCellStyle}>5년</td>
                <td style={tableCellStyle}>전자상거래법</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>소비자 불만 또는 분쟁처리 기록</td>
                <td style={tableCellStyle}>3년</td>
                <td style={tableCellStyle}>전자상거래법</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>로그인 기록</td>
                <td style={tableCellStyle}>3개월</td>
                <td style={tableCellStyle}>통신비밀보호법</td>
              </tr>
            </tbody>
          </table>

          <h3 style={subSectionTitleStyle}>다. 파기 방법</h3>
          <ul style={listStyle}>
            <li><strong>전자적 파일:</strong> 복구 불가능한 방법으로 영구 삭제</li>
            <li><strong>종이 문서:</strong> 분쇄기로 분쇄 또는 소각</li>
          </ul>
        </Card>

        {/* 4. 제3자 제공 및 위탁 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            🤝 4. 개인정보 제3자 제공 및 처리 위탁
          </div>
          
          <h3 style={subSectionTitleStyle}>가. 제3자 제공</h3>
          <p style={paragraphStyle}>
            Kgency는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다. 
            다만, 다음의 경우는 예외로 합니다:
          </p>
          <ul style={listStyle}>
            <li>사용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의하거나 수사기관의 요구가 있는 경우</li>
            <li>채용 프로세스 진행을 위해 사용자가 지원한 기업에 제공하는 경우</li>
          </ul>

          <h3 style={subSectionTitleStyle}>나. 처리 위탁</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>수탁업체</th>
                <th style={tableHeaderStyle}>위탁 업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>Amazon Web Services (AWS)</td>
                <td style={tableCellStyle}>클라우드 서버 운영 및 데이터 저장</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>Google Firebase</td>
                <td style={tableCellStyle}>푸시 알림 서비스</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>(주)나이스페이먼츠</td>
                <td style={tableCellStyle}>결제 대행 서비스</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>SendGrid</td>
                <td style={tableCellStyle}>이메일 발송 서비스</td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* 5. 사용자 권리 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            ✅ 5. 정보주체의 권리와 행사 방법
          </div>
          
          <p style={paragraphStyle}>
            사용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
          </p>
          
          <div style={highlightBoxStyle}>
            <ul style={{ ...listStyle, marginBottom: 0 }}>
              <li><strong>개인정보 열람 요구:</strong> 보유 중인 개인정보 확인</li>
              <li><strong>정정·삭제 요구:</strong> 잘못된 정보의 수정 또는 삭제</li>
              <li><strong>처리정지 요구:</strong> 개인정보 처리 중단 요청</li>
              <li><strong>동의 철회:</strong> 수집·이용 동의 철회</li>
            </ul>
          </div>

          <p style={paragraphStyle}>
            권리 행사는 앱 내 '설정 → 개인정보 관리' 메뉴 또는 이메일(privacy@kgency.com)을 통해 가능합니다.
          </p>
        </Card>

        {/* 6. 아동 보호 정책 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            👶 6. 만 14세 미만 아동의 개인정보 보호
          </div>
          
          <div style={highlightBoxStyle}>
            <p style={{ ...paragraphStyle, marginBottom: 0, fontWeight: currentTheme.typography.fontWeight.medium }}>
              ⚠️ Kgency는 만 14세 미만 아동의 회원가입을 제한하고 있습니다.
            </p>
          </div>

          <p style={paragraphStyle}>
            만 14세 미만 아동의 개인정보를 수집하지 않으며, 부득이하게 수집이 필요한 경우 
            법정대리인의 동의를 받은 후 수집하고 있습니다. 만약 만 14세 미만 아동의 개인정보가 
            수집된 사실이 확인되면 즉시 파기하겠습니다.
          </p>
        </Card>

        {/* 7. 개인정보 보호 조치 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            🔒 7. 개인정보 보호를 위한 기술적·관리적 조치
          </div>
          
          <h3 style={subSectionTitleStyle}>가. 기술적 조치</h3>
          <ul style={listStyle}>
            <li>개인정보 암호화 (SSL/TLS 프로토콜 사용)</li>
            <li>비밀번호 단방향 암호화 저장</li>
            <li>해킹 방지를 위한 보안 시스템 운영</li>
            <li>정기적인 보안 취약점 점검</li>
          </ul>

          <h3 style={subSectionTitleStyle}>나. 관리적 조치</h3>
          <ul style={listStyle}>
            <li>개인정보 접근 권한 최소화</li>
            <li>직원 대상 정기 보안 교육 실시</li>
            <li>개인정보보호 내부관리계획 수립 및 시행</li>
            <li>개인정보 처리 현황 정기 점검</li>
          </ul>
        </Card>

        {/* 8. 쿠키 정책 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            🍪 8. 쿠키 사용에 관한 사항
          </div>
          
          <h3 style={subSectionTitleStyle}>가. 쿠키 사용 목적</h3>
          <ul style={listStyle}>
            <li>로그인 상태 유지</li>
            <li>사용자 맞춤형 서비스 제공</li>
            <li>서비스 이용 통계 분석</li>
          </ul>

          <h3 style={subSectionTitleStyle}>나. 쿠키 거부 방법</h3>
          <p style={paragraphStyle}>
            사용자는 브라우저 설정을 통해 쿠키를 거부할 수 있습니다. 
            다만, 쿠키를 거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
          <ul style={listStyle}>
            <li><strong>Chrome:</strong> 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
            <li><strong>Safari:</strong> 환경설정 → 개인정보 보호 → 쿠키 차단</li>
          </ul>
        </Card>

        {/* 9. 개인정보 관련 문의처 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            📞 9. 개인정보 보호책임자 및 문의처
          </div>
          
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{ ...tableCellStyle, fontWeight: currentTheme.typography.fontWeight.semibold }}>
                  개인정보 보호책임자
                </td>
                <td style={tableCellStyle}>김현수</td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, fontWeight: currentTheme.typography.fontWeight.semibold }}>
                  소속/직위
                </td>
                <td style={tableCellStyle}>정보보호팀 / 팀장</td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, fontWeight: currentTheme.typography.fontWeight.semibold }}>
                  이메일
                </td>
                <td style={tableCellStyle}>privacy@kgency.com</td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, fontWeight: currentTheme.typography.fontWeight.semibold }}>
                  전화번호
                </td>
                <td style={tableCellStyle}>02-1234-5678</td>
              </tr>
            </tbody>
          </table>

          <h3 style={subSectionTitleStyle}>기타 신고/상담 기관</h3>
          <ul style={listStyle}>
            <li>개인정보침해신고센터: (국번없이) 118</li>
            <li>개인정보보호위원회: 1833-6972</li>
            <li>대검찰청 사이버수사과: (국번없이) 1301</li>
            <li>경찰청 사이버수사국: (국번없이) 182</li>
          </ul>
        </Card>

        {/* 10. 개정 이력 */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            📅 10. 개인정보처리방침 변경 사항
          </div>
          
          <p style={paragraphStyle}>
            이 개인정보처리방침은 2024년 1월 1일부터 적용됩니다. 
            변경 사항이 있을 경우 시행일 7일 전에 공지사항을 통해 알려드립니다.
          </p>
          
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>버전</th>
                <th style={tableHeaderStyle}>시행일</th>
                <th style={tableHeaderStyle}>주요 변경사항</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>1.0</td>
                <td style={tableCellStyle}>2024.01.01</td>
                <td style={tableCellStyle}>최초 제정</td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* Contact Box */}
        <div style={contactBoxStyle}>
          <h3 style={{ 
            fontSize: currentTheme.typography.fontSize.xl,
            fontWeight: currentTheme.typography.fontWeight.bold,
            color: currentTheme.colors.text.primary,
            marginBottom: currentTheme.spacing[4] 
          }}>
            개인정보 관련 문의
          </h3>
          <p style={{ 
            color: currentTheme.colors.text.secondary,
            marginBottom: currentTheme.spacing[6] 
          }}>
            개인정보 처리와 관련하여 궁금하신 사항이 있으시면 언제든지 문의해 주세요.
          </p>
          <div style={{ marginBottom: currentTheme.spacing[2] }}>
            <strong style={{ fontSize: currentTheme.typography.fontSize.lg, color: currentTheme.colors.text.primary }}>
              📧 welkit.answer@gmail.com
            </strong>
          </div>
          <p style={{ 
            fontSize: currentTheme.typography.fontSize.sm,
            color: currentTheme.colors.text.tertiary 
          }}>
            영업일 기준 24시간 이내 답변 드립니다.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;