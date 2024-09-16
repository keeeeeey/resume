import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '코너스톤 테크놀러지',
      position: 'DMS, PLM, PMS 등 기업용 솔루션 서비스 백엔드 개발자',
      startedAt: '2024-04',
      descriptions: [
        '업무 협업툴 및 Enterprise Project Management Software 서비스 개발',
        'Spring Scheduler를 사용하여 반복 업무 기능 개발',
        '실제 일정에 맞춰 프로젝트 일정이 업데이트되는 기능 개발',
        'MyBatis 환경에서의 개발 경험',
        '코드 리팩토링 및 테스트코드 작성',
      ],
      skillKeywords: ['Java', 'Spring', 'MyBatis', 'MySQL'],
    },
    {
      title: '소프트베리',
      position: '전기차 충전소 인프라 정보 및 관제 솔루션 제공 서비스 백엔드 개발 인턴',
      startedAt: '2023-09',
      endedAt: '2023-12',
      descriptions: [
        'OCPP 프로토콜을 활용한 전기차 충전소 관제 솔루션 Backend API 개발',
        '코드 리팩토링과 JPA Lazy 매핑으로 충전 권한 인증 시 출력되는 쿼리 수 감소',
        'Sentry 적용 후 잔디 웹훅을 연동하여 예외 처리되지 않은 에러 트래킹 기능 개발',
        '데이터베이스 신규 컬럼 생성 후 기존 데이터를 마이그레이션 하여 충전 내역 조회 성능 개선',
        '환경부 카드 결제 시 결제 요청 미전송 및 전송 이력 누락 에러 해결',
      ],
      skillKeywords: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Apache Kafka'],
    },
  ],
};

export default experience;
