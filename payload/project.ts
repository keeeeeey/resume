import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '플콕',
      startedAt: '2024-08',
      where: '위치 기반 아카이브 및 위치 공유 SNS',
      descriptions: [
        {
          content:
            '소셜 로그인 기능 구현, 추상 팩토리 패턴을 적용하여 생성 메서드를 추상화하고 Provider 별로 구현',
        },
        {
          content:
            'Spring AOP를 사용하여 사용자 권한 체크',
        },
        {
          content:
            'MySQL에서 제공하는 MBRCONTAINS 함수를 사용하여 화면에서 표시되는 위치 정보 조회',
        },
        {
          content:
            'FCM(Firebase Cloud Messaging)을 이용하여 알림 기능 구현',
        },
        {
          content:
            '위치 정보를 그룹화하는 폴더 기능 CRUD 개발',
        },
      ],
    },
    {
      title: '하비루프',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: '온라인 취미생활 예약 서비스',
      descriptions: [
        {
          content:
            'Spring Cloud Gateway를 사용하여 사용자 권한 체크 및 사용자 요청 라우팅',
        },
        {
          content:
            'Apache Kafka를 이용하여 비동기로 마이크로 서비스 데이터 동기화',
        },
        {
          content:
            'SAGA 패턴을 적용하여 데이터 정합성 보장',
        },
        {
          content:
            '광고 노출수 및 클릭률 집계 서비스 개발',
        },
        {
          content:
            'MSA 아키텍처 도메인 설계',
        },
      ],
    },
  ],
};

export default project;
