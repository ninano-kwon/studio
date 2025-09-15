export type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
};

export const day1Schedule: ScheduleItem[] = [
  { time: '12:00-13:00', title: '웰컴 & 점심 식사' },
  { time: '13:00-13:30', title: '키노트: Growing Together' },
  { time: '13:30-15:00', title: '세션 & 핸즈온' },
  { time: '15:00-17:30', title: '팀 빌딩 & 아이스브레이킹' },
  { time: '17:30-', title: '저녁 식사 및 네트워킹' },
];

export const day2Schedule: ScheduleItem[] = [
  { time: '09:00-10:00', title: 'Office Hour with Alessandro' },
  { time: '10:00-13:00', title: '미니 해커톤' },
  { time: '13:00-14:00', title: '점심 식사' },
  { time: '14:00-15:00', title: '라이트닝 토크' },
  { time: '15:00-16:00', title: '시상 및 마무리' },
];
