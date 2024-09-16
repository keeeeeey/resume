import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '삼성전자',
      subTitle: '삼성 청년 SW 아카데미(SSAFY) 수료',
      startedAt: '2022-07',
      endedAt: '2023-06',
    },
    {
      title: '스파르타 코딩클럽',
      subTitle: '항해99 부트캠프 수료',
      startedAt: '2022-01',
      endedAt: '2022-04',
    },
    {
      title: '멀티캠퍼스',
      subTitle: '온·오프 연계 AI 활용 지능형 서비스 개발 수료',
      startedAt: '2021-08',
      endedAt: '2021-12',
    },
    {
      title: '단국대학교',
      subTitle: '기계공학과 졸업',
      startedAt: '2013-03',
      endedAt: '2020-02',
    },
    {
      title: '영암고등학교',
      subTitle: '인문계 졸업',
      startedAt: '2009-03',
      endedAt: '2012-02',
    },
  ],
};

export default education;
