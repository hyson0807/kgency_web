import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Layout } from '../components/Layout';

const AccountDeletion: React.FC = () => {
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

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: currentTheme.spacing[3],
    marginBottom: currentTheme.spacing[4],
    padding: currentTheme.spacing[4],
    backgroundColor: currentTheme.colors.surfaces.panel,
    borderRadius: currentTheme.borderRadius.lg,
    border: `1px solid ${currentTheme.colors.border.primary}`,
  };

  const stepNumberStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: currentTheme.colors.primary[500],
    color: currentTheme.colors.text.inverse,
    fontSize: currentTheme.typography.fontSize.sm,
    fontWeight: currentTheme.typography.fontWeight.bold,
    flexShrink: 0,
  };

  const dataTableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: currentTheme.spacing[4],
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
            계정 삭제 정책
          </Badge>
          <h1 style={titleStyle}>
            계정 및 데이터 삭제 요청
          </h1>
          <p style={subtitleStyle}>
            Kgency 앱 사용자를 위한 계정 삭제 절차 및 데이터 처리 방침
          </p>
        </div>

        {/* App Info */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            📱 앱 정보
          </div>
          <div style={{ display: 'flex', gap: currentTheme.spacing[8], flexWrap: 'wrap' }}>
            <div>
              <strong>앱 이름:</strong> Kgency (케이전시)
            </div>
            <div>
              <strong>개발자:</strong> Kgency Inc.
            </div>
            <div>
              <strong>서비스:</strong> 외국인 인재 채용 매칭 플랫폼
            </div>
          </div>
        </Card>

        {/* Deletion Process */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            🗑️ 계정 삭제 절차
          </div>
          <p style={{ 
            color: currentTheme.colors.text.secondary, 
            marginBottom: currentTheme.spacing[6],
            fontSize: currentTheme.typography.fontSize.base 
          }}>
            계정 삭제를 요청하시려면 아래 단계를 따라 진행해 주세요:
          </p>
          
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <div style={stepNumberStyle}>1</div>
              <div>
                <strong style={{ color: currentTheme.colors.text.primary }}>삭제 요청 이메일 발송</strong>
                <p style={{ margin: `${currentTheme.spacing[2]} 0 0 0`, color: currentTheme.colors.text.secondary }}>
                  아래 이메일 주소로 계정 삭제 요청을 보내주세요. 이메일에는 등록된 이메일 주소와 삭제 사유를 포함해 주세요.
                </p>
              </div>
            </li>
            
            <li style={listItemStyle}>
              <div style={stepNumberStyle}>2</div>
              <div>
                <strong style={{ color: currentTheme.colors.text.primary }}>신원 확인</strong>
                <p style={{ margin: `${currentTheme.spacing[2]} 0 0 0`, color: currentTheme.colors.text.secondary }}>
                  보안을 위해 계정 소유자임을 확인하는 절차를 진행합니다. 추가 정보가 필요한 경우 연락드립니다.
                </p>
              </div>
            </li>
            
            <li style={listItemStyle}>
              <div style={stepNumberStyle}>3</div>
              <div>
                <strong style={{ color: currentTheme.colors.text.primary }}>삭제 처리 및 완료 알림</strong>
                <p style={{ margin: `${currentTheme.spacing[2]} 0 0 0`, color: currentTheme.colors.text.secondary }}>
                  요청 접수 후 7영업일 이내에 계정이 삭제되며, 처리 완료 시 확인 이메일을 발송합니다.
                </p>
              </div>
            </li>
          </ul>
        </Card>

        {/* Data Policy */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            📊 데이터 처리 정책
          </div>
          <p style={{ 
            color: currentTheme.colors.text.secondary, 
            marginBottom: currentTheme.spacing[6] 
          }}>
            계정 삭제 시 다음과 같이 데이터가 처리됩니다:
          </p>
          
          <table style={dataTableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>데이터 유형</th>
                <th style={tableHeaderStyle}>처리 방법</th>
                <th style={tableHeaderStyle}>보관 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>개인정보 (이름, 이메일, 전화번호)</td>
                <td style={tableCellStyle}>즉시 삭제</td>
                <td style={tableCellStyle}>삭제 요청 후 7일 이내</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>프로필 정보 (경력, 학력, 기술스택)</td>
                <td style={tableCellStyle}>즉시 삭제</td>
                <td style={tableCellStyle}>삭제 요청 후 7일 이내</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>채팅 메시지</td>
                <td style={tableCellStyle}>즉시 삭제</td>
                <td style={tableCellStyle}>삭제 요청 후 7일 이내</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>업로드한 파일 (이력서, 포트폴리오)</td>
                <td style={tableCellStyle}>즉시 삭제</td>
                <td style={tableCellStyle}>삭제 요청 후 7일 이내</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>결제 정보</td>
                <td style={tableCellStyle}>법정 보관 후 삭제</td>
                <td style={tableCellStyle}>5년 (전자상거래법)</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>서비스 이용 로그</td>
                <td style={tableCellStyle}>개인식별정보 제거 후 통계 목적 보관</td>
                <td style={tableCellStyle}>3년</td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* Important Notes */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            ⚠️ 중요 안내사항
          </div>
          <ul style={{ 
            color: currentTheme.colors.text.secondary,
            lineHeight: currentTheme.typography.lineHeight.relaxed 
          }}>
            <li style={{ marginBottom: currentTheme.spacing[2] }}>
              계정 삭제 후에는 <strong>복구가 불가능</strong>합니다.
            </li>
            <li style={{ marginBottom: currentTheme.spacing[2] }}>
              진행 중인 채용 프로세스가 있다면 삭제 전에 완료하시기 바랍니다.
            </li>
            <li style={{ marginBottom: currentTheme.spacing[2] }}>
              기업 회원의 경우, 등록된 채용공고도 함께 삭제됩니다.
            </li>
            <li style={{ marginBottom: currentTheme.spacing[2] }}>
              법적 의무에 따라 일부 데이터는 관련 법령에서 정한 기간만큼 보관됩니다.
            </li>
          </ul>
        </Card>

        {/* FAQ */}
        <Card style={sectionStyle}>
          <div style={sectionTitleStyle}>
            ❓ 자주 묻는 질문
          </div>
          
          <div style={{ marginBottom: currentTheme.spacing[4] }}>
            <strong style={{ color: currentTheme.colors.text.primary }}>Q. 계정 삭제까지 얼마나 걸리나요?</strong>
            <p style={{ margin: `${currentTheme.spacing[2]} 0 0 0`, color: currentTheme.colors.text.secondary }}>
              A. 요청 접수 후 신원 확인을 거쳐 7영업일 이내에 처리됩니다.
            </p>
          </div>
          
          <div style={{ marginBottom: currentTheme.spacing[4] }}>
            <strong style={{ color: currentTheme.colors.text.primary }}>Q. 삭제된 계정을 복구할 수 있나요?</strong>
            <p style={{ margin: `${currentTheme.spacing[2]} 0 0 0`, color: currentTheme.colors.text.secondary }}>
              A. 아니요. 계정 삭제는 되돌릴 수 없으므로 신중하게 결정해 주세요.
            </p>
          </div>
          
          <div style={{ marginBottom: currentTheme.spacing[4] }}>
            <strong style={{ color: currentTheme.colors.text.primary }}>Q. 일부 데이터만 삭제할 수 있나요?</strong>
            <p style={{ margin: `${currentTheme.spacing[2]} 0 0 0`, color: currentTheme.colors.text.secondary }}>
              A. 현재는 전체 계정 삭제만 지원합니다. 부분 삭제는 앱 내 설정에서 개별적으로 진행해 주세요.
            </p>
          </div>
        </Card>

        {/* Contact */}
        <div style={contactBoxStyle}>
          <h3 style={{ 
            fontSize: currentTheme.typography.fontSize.xl,
            fontWeight: currentTheme.typography.fontWeight.bold,
            color: currentTheme.colors.text.primary,
            marginBottom: currentTheme.spacing[4] 
          }}>
            계정 삭제 요청
          </h3>
          <p style={{ 
            color: currentTheme.colors.text.secondary,
            marginBottom: currentTheme.spacing[6] 
          }}>
            계정 삭제를 원하시면 아래 이메일로 연락주세요
          </p>
          <div style={{ marginBottom: currentTheme.spacing[6] }}>
            <strong style={{ fontSize: currentTheme.typography.fontSize.lg, color: currentTheme.colors.text.primary }}>
              📧 welkit.answer@gmail.com
            </strong>
          </div>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.location.href = 'mailto:welkit.answer@gmail.com?subject=계정 삭제 요청&body=계정 삭제를 요청합니다.%0A%0A등록 이메일: %0A삭제 사유: '}
          >
            이메일로 삭제 요청하기
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AccountDeletion;