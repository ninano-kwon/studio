'use client';

import { useState } from 'react';
import { getVeoSummaryAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export function VeoSummary() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setError(null);
    setSummary(null);
    const result = await getVeoSummaryAction();
    setIsLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSummary(result.summary);
    }
  };

  return (
    <Card className="bg-muted border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-accent" />
          Veo 영상 하이라이트
        </CardTitle>
        <CardDescription>
          커뮤니티에서 제출된 Veo 영상들의 주요 테마를 AI로 요약해 보세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGenerateSummary} disabled={isLoading}>
          {isLoading ? '요약 생성 중...' : 'AI 요약 보기'}
        </Button>
        {isLoading && (
            <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        )}
        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
        {summary && (
          <div className="mt-4 p-4 bg-background/50 rounded-md">
            <p className="text-sm text-foreground whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
