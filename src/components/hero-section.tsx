import CountdownTimer from '@/components/countdown-timer';

export function HeroSection() {
  return (
    <section className="text-center py-20 md:py-32">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-[#4285F4] via-[#9B72FF] to-[#F6903D] bg-clip-text text-transparent">
          '25 Korea Developer Community Summit
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        AI 시대, 개발자 커뮤니티는 어떻게 개발자의 성장을 이끌 수 있을까요?
        <br />
        GDG 운영진, GDE들을 위한 알찬 세션과 교류의 장에 오신 것을 환영합니다!
      </p>
      <div className="mt-8">
        <div className="inline-block bg-card/50 rounded-lg p-6 shadow-md">
          <p className="text-2xl font-bold">2025년 9월 20일 ~ 21일</p>
          <p className="text-lg text-primary">@ 구글 스타트업 캠퍼스</p>
        </div>
      </div>
      <CountdownTimer />
    </section>
  );
}
