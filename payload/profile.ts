import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김기윤',
  },
  contact: [
    {
      title: 'sseioul@gmail.com',
      link: 'mailto:sseioul@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/keeeeeey',
      icon: faGithub,
    },
    {
      link: 'https://keylog.tistory.com',
      icon: faRss,
    },
  ],
  notice: {
    title:
      "휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.",
    icon: faBell,
  },
};

export default profile;
