import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Code, Users } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: '키노트 & 세션',
      description: 'AI 시대의 개발자 성장과 커뮤니티의 역할에 대한 깊이 있는 인사이트를 공유합니다.',
    },
    {
      icon: <Code className="h-8 w-8 text-green-400" />,
      title: '미니 해커톤',
      description: 'GDG 글로벌 캠페인과 연계된 주제로, 최신 구글 기술을 활용해 아이디어를 실현합니다.',
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-400" />,
      title: '네트워킹',
      description: '전국의 GDG 운영진, GDE와 교류하며 커뮤니티의 미래를 함께 그려나갑니다.',
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Summit 소개</h2>
        <p className="text-muted-foreground mt-2">함께 배우고, 만들고, 성장하는 이틀간의 여정</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/70 border-0 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:-translate-y-2">
            <CardHeader className="items-center">
              {feature.icon}
              <CardTitle className="pt-2">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
