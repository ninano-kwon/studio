'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createPersonalizedSchedule, type ScheduleState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, User, Wand2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? '나만의 시간표 생성 중...' : '시간표 생성하기'}
      <Wand2 className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function PersonalizedSchedule() {
  const initialState: ScheduleState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createPersonalizedSchedule, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'Success' && state.schedule) {
      toast({
        title: '나만의 시간표 생성 완료!',
        description: 'AI가 회원님을 위한 맞춤 시간표를 만들었어요.',
      });
    } else if (state.message && state.message !== 'Success') {
      toast({
        title: '오류 발생',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Card id="schedule-ai" className="w-full max-w-4xl mx-auto bg-card/70 border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
          <Bot className="h-8 w-8 text-primary" />
          나만의 시간표 만들기
        </CardTitle>
        <CardDescription>
          AI에게 여러분의 관심사와 목표를 알려주시면, 맞춤형 서밋 시간표를 추천해 드립니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="interests" className="flex items-center gap-2 font-semibold">
              <User className="h-4 w-4" />
              관심사
            </Label>
            <Textarea
              id="interests"
              name="interests"
              placeholder="예: 최신 AI 기술 트렌드, 생성형 AI 모델 활용법, 개발자 커뮤니티 운영 노하우, 네트워킹"
              rows={3}
              required
            />
            {state.errors?.interests &&
              state.errors.interests.map((error: string) => (
                <p className="text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className="space-y-2">
            <Label htmlFor="goals" className="flex items-center gap-2 font-semibold">
              <User className="h-4 w-4" />
              목표
            </Label>
            <Textarea
              id="goals"
              name="goals"
              placeholder="예: 다른 GDG 운영진들과 만나 교류하고 싶어요. 미니 해커톤에서 좋은 성과를 내고 싶어요."
              rows={3}
              required
            />
            {state.errors?.goals &&
              state.errors.goals.map((error: string) => (
                <p className="text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <SubmitButton />
        </form>
        {state.schedule && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-xl font-bold mb-4">회원님을 위한 맞춤 시간표</h3>
            <div className="p-4 bg-muted rounded-md whitespace-pre-wrap text-sm">{state.schedule}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
