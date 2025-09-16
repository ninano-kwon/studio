
export type LightningTalk = {
  talkTitle: string;
  talkDescription?: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  englishTitle?: string;
  speaker?: string;
  description?: string | LightningTalk[];
};

export const day1Schedule: ScheduleItem[] = [
  { time: '10:00-10:10', title: '환영합니다!', englishTitle: 'Welcome!', speaker: '권나현, 크리스틴 송' },
  {
    time: '10:10-10:25',
    title: '함께 성장하기: AI 시대에 커뮤니티가 개발자 성장을 이끄는 법',
    englishTitle: 'Growing Together: How Communities Lead Developer Growth in the AI Era',
    speaker: '크리스틴 송',
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
    description: 'AI를 활용하여 커뮤니티 홍보 및 이벤트 마케팅을 효과적으로 수행하는 전략을 배웁니다. 마케팅 전반에 AI를 적용하는 방법을 알아봅니다.',
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
    description: '모두를 위한 AI 활용 가이드. 각자의 영역에서 AI의 잠재력을 최대한 끌어내는 실용적인 노하우를 공유합니다. Gemini와 Gemma를 시작으로 아이디어 탐색을 위한 AI Studio 사용법을 배우고, 이어지는 Hands-on 라이브 데모를 통해 AI Studio를 직접 체험해 보세요. ',
  },
  {
    time: '15:00-16:00',
    title: 'GDG 운영진, GDE의 Lightning Talks',
    englishTitle: 'Lightning Talks from GDG Organizers & GDEs',
    speaker: 'GDG 운영진, GDE',
    description: [
      {
        talkTitle: '함께하는 오픈소스 기여, 커뮤니티, 문화 만들기 with AI - 김인제, GDG Incheon',
        talkDescription: '누구나 원하는 오픈소스에 기여할 수 있게 도와주는 오픈소스 기여모임을 2년간 9기째 운영하며 500명 넘는 분들의 기여를 도와 천개 넘는 PR을 함께 만들고 국내 기여 문화를 만들어가는 이야기',
      },
      {
        talkTitle: 'Gemini로 코딩하기 - 신정규, AI GDE',
      },
      {
        talkTitle: '우리 핸즈온, 행사마다 색다르게 해보면 어떨까? - 김대현, GDG Campus Korea',
        talkDescription: '대부분의 핸즈온에서는 새로운 기술을 배우고 실습해보는 것에 초점이 맞춰져 있습니다. 하지만 행사 컨셉과 참가자 특성에 맞게 핸즈온을 색다르게 기획하고 준비했던 GDG Campus Korea의 사례들을 공유합니다.',
      },
      {
        talkTitle: 'Gemini CLI와 BMAD 를 활용한 multi agent workflow 활용법 - 이재규, GDG Golang Korea',
        talkDescription: '두 개의 인터페이스, 하나의 강력한 모델. Gemini의 강력한 두 가지 인터페이스(Gemini Gem 웹 UI와 Gemini CLI)를 BMad 프레임워크와 결합하여, 아이디어 구상부터 코드 구현까지의 전체 개발 과정을 혁신하는 과정을 소개합니다.',
      }
    ],
  },
  {
    time: '16:00-16:30',
    title: '실전 AI 커뮤니티 워크숍 운영 가이드',
    englishTitle: 'A Practical Guide to Running an AI Community Workshop',
    speaker: 'Thu Ya Kyaw',
    description: '구글 AI 기술 핸즈온 워크숍을 기획하고 진행한 경험을 공유합니다. 이번 세션에서는 각 플랫폼의 강점과 약점을 중심으로 Qwiklabs와 Codelabs의 차이점을 명확하게 설명합니다. 또한 OnRamp 크레딧과 일반 Skill Boost 학습 크레딧을 상세하게 비교 분석해 드립니다. 마지막으로, 라이브 워크숍에서 구글 클라우드 크레딧을 사용할 때 발생할 수 있는 일반적인 문제점들과 그에 대한 실용적인 해결 방안을 다룰 예정입니다.',
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
    title: 'DevFest 2025 계획 공유 | Alessandro와 함께하는 오피스아워',
    englishTitle: 'Sharing DevFest 2025 Plans | Office Hour with Alessandro',
    speaker: 'GDG 운영진, GDE',
    description: 'GDG 챕터별로 모여서 DevFest 2025 계획을 세우고 공유합니다.\n\n오피스 아워 사전 신청자는 행사장 한쪽에서 진행되는 Alessandro와의 오피스아워에 참여합니다.\n\n사전신청자 : Group 1 Junbum Lee JaiChang Park\nGroup 2 Subin Kim JaeGyu Lee\nGroup 3 Maro Kim SaeByeok Cho YoungMin Go\nGroup 4 Ga-in Choi Giwon Yun',
  },
  { time: '18:00-18:30', title: '럭키드로우', englishTitle: 'Lucky Draw' },
  { time: '18:30-21:30', title: '저녁식사 및 네트워킹', englishTitle: 'Dinner & Networking' },
];

export const day2Schedule: ScheduleItem[] = [
  { time: '09:30-10:00', title: '환영합니다!', englishTitle: 'Welcome!', speaker: '권나현, 송지효' },
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
