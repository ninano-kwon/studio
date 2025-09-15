'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Star } from 'lucide-react';

export function SessionFeedback({ sessionTitle }: { sessionTitle: string }) {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: '오류',
        description: '세션 평점을 선택해주세요.',
        variant: 'destructive',
      });
      return;
    }

    // In a real app, you'd send this data to a server.
    console.log({ session: sessionTitle, rating, comment });
    
    toast({
      title: '피드백 주셔서 감사합니다!',
      description: `"${sessionTitle}" 세션에 대한 소중한 의견이 제출되었습니다.`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">세션은 어떠셨나요?</label>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={starValue}
                type="button"
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-6 w-6 cursor-pointer transition-colors ${
                    starValue <= (hover || rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="text-sm font-medium">
          의견을 남겨주세요
        </label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="세션에 대한 자세한 의견을 들려주세요."
          className="mt-2"
        />
      </div>
      <Button type="submit" className="w-full">
        피드백 제출
      </Button>
    </form>
  );
}
