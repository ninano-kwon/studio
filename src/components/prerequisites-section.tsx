import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, Rocket, Film } from 'lucide-react';
import { VeoSummary } from './veo-summary';

export function PrerequisitesSection() {
  return (
    <section id="prepare" className="py-16 bg-card/50 rounded-2xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">사전 준비사항</h2>
        <p className="text-muted-foreground mt-2">원활한 행사 참여를 위해 꼭 확인해주세요!</p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="bg-muted border-border/50 transition-all duration-300 ease-in-out hover:shadow-red-400/20 hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-400">
              <Laptop className="h-6 w-6" />
              필수 지참물
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="font-semibold">개인 노트북 & 충전기</p>
            <p className="text-sm text-muted-foreground">(Day 1 핸즈온, Day 2 미니 해커톤에 필요)</p>
          </CardContent>
        </Card>
        <Card className="bg-muted border-border/50 transition-all duration-300 ease-in-out hover:shadow-blue-400/20 hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Rocket className="h-6 w-6" />
              계정 준비
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="font-semibold">GDP Premium 가입</p>
            <p className="text-sm text-muted-foreground">(문제 발생 시, 운영진에게 문의)</p>
          </CardContent>
        </Card>
        <Card className="bg-muted border-border/50 transition-all duration-300 ease-in-out hover:shadow-green-400/20 hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-400">
              <Film className="h-6 w-6" />
              사전 과제: Veo 영상 제작
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><b>주제:</b> "우리 커뮤니티에게 AI란?"</p>
            <p><b>분량:</b> 1분 내외</p>
            <p><b>마감:</b> 9월 18일(목)까지</p>
            <p className="text-yellow-400 font-bold">🏆 우수작 상품 증정!</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <VeoSummary />
      </div>
    </section>
  );
}
