import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '신입 개발자로 기업용 솔루션 개발 회사에서 PMS 서비스를 개발하고 운영하고 있습니다. 주로 Java, Spring, MyBatis를 사용하여 웹 서비스를 개발하고 있으며 부트캠프와 사이드 프로젝트 통해 JPA, Querydsl, MSA 등 다양한 기술과 아키텍처들도 경험해 보았습니다.',
    '클린한 코드를 작성하기 위해 고민하는 과정을 좋아합니다. Spring AOP와 추상 팩토리 패턴, 전략 패턴 등 디자인 패턴을 활용하여 공통 로직을 모듈화하고 추상화하여 효율적으로 관리하기 위해 노력하고 있습니다.',
    '성능 개선을 위해 코드를 리팩토링하고 개선해가는 과정을 좋아합니다. 광고 노출 수, 클릭 수를 집계하는 기능을 개발하기 위해 Apache Kafka를 적용하여 비동기로 로그데이터를 생성하고 스케줄러로 로그데이터를 집계하여 개선한 경험이 있습니다.',
  ],
  sign: 'Key',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
