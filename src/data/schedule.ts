export type ScheduleItem = {
  time: string;
  title: string;
  englishTitle?: string;
  speaker?: string;
  description?: string;
};

export const day1Schedule: ScheduleItem[] = [
  { time: '10:00-10:10', title: '환영합니다!', englishTitle: 'Welcome!', speaker: '권혜현, 송지효' },
  {
    time: '10:10-10:25',
    title: '함께 성장하기: AI 시대에 커뮤니티가 개발자 성장을 이끄는 법',
    englishTitle: 'Growing Together: How Communities Lead Developer Growth in the AI Era',
    speaker: '송지효',
    description: 'AI가 개발 생태계를 빠르게 변화시키는 지금, 개발자 커뮤니티의 역할과 방향성에 대해 논의합니다. 커뮤니티가 어떻게 개발자들의 성장을 지원하고, 함께 성장하는 문화를 만들 수 있는지에 대한 인사이트를 공유합니다.',
  },
  {
    time: '10:25-11:15',
    title: 'Veo3를 활용한 자기소개하기',
    englishTitle: 'Self-Introduction with Veo3',
    speaker: 'GDG 운영진, GDE',
    description: 'Google의 최신 영상 생성 모델 Veo3를 사용하여 자신과 커뮤니티를 소개하는 영상을 만들어봅니다. 창의적이고 재미있는 방법으로 서로를 알아가는 시간입니다.',
  },
  {
    time: '11:15-11:45',
    title: 'AI시대, 인공지능을 활용한 마케팅 전략',
    englishTitle: 'Marketing Strategies Using Artificial Intelligence in the AI Era',
    speaker: '주은실',
    description: '글로벌 캠페인 행사를 홍보하는 GDG 운영진들에게 도움이 될 세션! AI를 활용하여 커뮤니티 홍보 및 이벤트 마케팅을 효과적으로 수행하는 전략을 배웁니다. 마케팅 전반에 AI를 적용하는 방법을 알아봅니다.',
  },
  {
    time: '11:45-12:45',
    title: '구글 커뮤니티 플랫폼으로 영향력 확장하기',
    englishTitle: 'Expanding Your Impact with the Google Community Platform',
    speaker: 'Alessandro Palmieri',
    description: '구글에서 제공하는 다양한 커뮤니티 지원 플랫폼과 도구를 알아보고, 이를 활용하여 커뮤니티의 영향력을 키우고 더 많은 개발자들과 소통하는 방법을 배웁니다.',
  },
  { time: '12:45-14:00', title: '점심시간', englishTitle: 'Lunch Time' },
  {
    time: '14:00-15:00',
    title: '모두를 위한 AI 플레이북: Gemini와 Gemma 쉽게 시작하기',
    englishTitle: 'The AI Playbook for Everyone: Getting Started Easily with Gemini and Gemma',
    speaker: '박주성',
    description: 'Gemini API와 Gemma 모델을 활용하여 AI 애플리케이션 개발을 시작하는 방법을 배웁니다. 실제 코드 예제와 함께 핸즈온 실습을 통해 누구나 쉽게 AI 개발에 입문할 수 있도록 돕습니다.',
  },
  {
    time: '15:00-16:00',
    title: 'GDG 운영진, GDE의 Lightning Talks',
    englishTitle: 'Lightning Talks from GDG Organizers & GDEs',
    speaker: 'GDG 운영진, GDE',
  },
  {
    time: '16:00-16:30',
    title: '실전 AI 커뮤니티 워크숍 운영 가이드',
    englishTitle: 'A Practical Guide to Running an AI Community Workshop',
    speaker: 'Thu Ya Kyaw',
    description: '자신의 커뮤니티에서 성공적으로 AI 워크숍을 기획하고 운영하는 노하우를 공유합니다. 워크숍 주제 선정부터, 콘텐츠 준비, 홍보, 진행까지 실질적인 팁을 얻어 가세요.',
  },
  {
    time: '16:30-17:00',
    title: 'DevFest 2025 워크샵',
    englishTitle: 'DevFest 2025 Workshop',
    speaker: '권혜현',
    description: '다가오는 DevFest 2025를 성공적으로 개최하기 위한 워크숍입니다. 각 챕터의 경험을 공유하고, 혁신적인 아이디어를 함께 논의하여 더 나은 DevFest를 만듭니다.',
  },
  {
    time: '17:00-18:00',
    title: 'DevFest 2025 계획 공유',
    englishTitle: 'Sharing DevFest 2025 Plans',
    speaker: 'GDG 운영진, GDE',
  },
  { time: '18:00-18:30', title: '럭키드로우', englishTitle: 'Lucky Draw' },
  { time: '18:30-21:30', title: '저녁식사 및 네트워킹', englishTitle: 'Dinner & Networking' },
];

export const day2Schedule: ScheduleItem[] = [
  { time: '09:30-10:00', title: '환영합니다!', englishTitle: 'Welcome!', speaker: '권나현, 송지현' },
  {
    time: '10:00-12:00',
    title: 'Firebase Studio를 활용한 미니 해커톤',
    englishTitle: 'Mini-Hackathon with Firebase Studio',
    speaker: 'GDG 운영진, GDE',
  },
  { time: '12:00-13:00', title: '최종 발표', englishTitle: 'Final Presentations' },
  { time: '13:00-14:00', title: '심사', englishTitle: 'Judging' },
  { time: '14:00-14:30', title: '시상식 및 클로징', englishTitle: 'Awards & Closing' },
];
