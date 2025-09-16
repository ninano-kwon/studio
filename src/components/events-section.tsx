import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Gift, Trophy } from 'lucide-react';

export function EventsSection() {
  return (
    <section id="events" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">특별 이벤트 & 상품</h2>
        <p className="text-muted-foreground mt-2">여러분을 위해 특별한 경험과 선물을 준비했습니다.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card/70 border-0 shadow-lg transition-all duration-300 ease-in-out hover:shadow-yellow-400/20 hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-400">
              <Trophy className="h-7 w-7" />
              미니 해커톤
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground space-y-2">
              <p><b>주제:</b> Build with AI, I/O Extended, DevFest 등 GDG 글로벌 캠페인 연계</p>
              <p><b>조건:</b> Firebase Studio를 포함한 구글 기술 및 제품만 활용</p>
              <p><b>팀 구성:</b> 4인 1조 랜덤 구성, 위 시간표에서 자세한 팀 구성 확인 가능</p>
            </div>
            <div className="mt-6">
              <h3 className="font-bold flex items-center gap-2 mb-2"><Award className="h-5 w-5" />상품</h3>
              <p className="text-foreground">🥇 1등: 갤럭시 워치 8</p>
              <p className="text-foreground">🥈 2등: 갤럭시 버즈 프로 3</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/70 border-0 shadow-lg transition-all duration-300 ease-in-out hover:shadow-pink-400/20 hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pink-400">
              <Gift className="h-7 w-7" />
              기념품 & 상품
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-semibold text-foreground">참가자 전원에게 <b>THULE 백팩</b>을 드립니다!</p>
            <div className="mt-6">
              <h3 className="font-bold flex items-center gap-2 mb-2"><Award className="h-5 w-5" />기타 시상</h3>
              <p className="text-muted-foreground">🎬 베스트 Veo 영상</p>
            </div>
            <div className="mt-6">
              <h3 className="font-bold flex items-center gap-2 mb-2"><Award className="h-5 w-5" />추가 기념품</h3>
              <p className="text-muted-foreground">⚡ 라이트닝 토크 발표자</p>
              <p className="text-muted-foreground">🎁 깜짝 선물이 준비되어 있습니다!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
