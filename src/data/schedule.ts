export type ScheduleItem = {
  time: string;
  title: string;
  englishTitle?: string;
  speaker?: string;
  speakerImage?: string;
  description?: string;
};

export const day1Schedule: ScheduleItem[] = [
  { time: '10:00-10:10', title: '환영합니다!', englishTitle: 'Welcome!', speaker: '권혜현, 송지효' },
  {
    time: '10:10-10:25',
    title: '함께 성장하기: AI 시대에 커뮤니티가 개발자 성장을 이끄는 법',
    englishTitle: 'Growing Together: How Communities Lead Developer Growth in the AI Era',
    speaker: '송지효',
    speakerImage: 'https://picsum.photos/seed/speaker1/40/40'
  },
  { time: '10:25-11:15', title: 'Veo3를 활용한 자기소개하기', englishTitle: 'Self-Introduction with Veo3', speaker: 'GDG 운영진, GDE' },
  {
    time: '11:15-11:45',
    title: 'AI시대, 인공지능을 활용한 마케팅 전략',
    englishTitle: 'Marketing Strategies Using Artificial Intelligence in the AI Era',
    speaker: '주은실',
    speakerImage: 'https://picsum.photos/seed/speaker2/40/40'
  },
  {
    time: '11:45-12:45',
    title: '구글 커뮤니티 플랫폼으로 영향력 확장하기',
    englishTitle: 'Expanding Your Impact with the Google Community Platform',
    speaker: 'Alessandro Palmieri',
    speakerImage: 'https://picsum.photos/seed/speaker3/40/40'
  },
  { time: '12:45-14:00', title: '점심시간', englishTitle: 'Lunch Time' },
  {
    time: '14:00-15:00',
    title: '모두를 위한 AI 플레이북: Gemini와 Gemma 쉽게 시작하기',
    englishTitle: 'The AI Playbook for Everyone: Getting Started Easily with Gemini and Gemma',
    speaker: '박주성',
    speakerImage: 'https://picsum.photos/seed/speaker4/40/40'
  },
  { time: '15:00-16:00', title: 'GDG 운영진, GDE의 Lightning Talks', englishTitle: 'Lightning Talks from GDG Organizers & GDEs', speaker: 'GDG 운영진, GDE' },
  {
    time: '16:00-16:30',
    title: '실전 AI 커뮤니티 워크숍 운영 가이드',
    englishTitle: 'A Practical Guide to Running an AI Community Workshop',
    speaker: 'Thu Ya Kyaw',
    speakerImage: 'https://picsum.photos/seed/speaker5/40/40'
  },
  { time: '16:30-17:00', title: 'DevFest 2025 워크샵', englishTitle: 'DevFest 2025 Workshop', speaker: '권혜현' },
  { time: '17:00-18:00', title: 'DevFest 2025 계획 공유', englishTitle: 'Sharing DevFest 2025 Plans', speaker: 'GDG 운영진, GDE' },
  { time: '18:00-18:30', title: '럭키드로우', englishTitle: 'Lucky Draw' },
  { time: '18:30-21:30', title: '저녁식사 및 네트워킹', englishTitle: 'Dinner & Networking' },
];

export const day2Schedule: ScheduleItem[] = [
  { time: '09:30-10:00', title: '환영합니다!', englishTitle: 'Welcome!', speaker: '권나현, 송지현' },
  { time: '10:00-12:00', title: 'Firebase Studio를 활용한 미니 해커톤', englishTitle: 'Mini-Hackathon with Firebase Studio', speaker: 'GDG 운영진, GDE' },
  { time: '12:00-13:00', title: '최종 발표', englishTitle: 'Final Presentations' },
  { time: '13:00-14:00', title: '심사', englishTitle: 'Judging' },
  { time: '14:00-14:30', title: '시상식 및 클로징', englishTitle: 'Awards & Closing' },
];