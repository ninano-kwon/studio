import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { day1Schedule, day2Schedule } from '@/data/schedule';
import type { ScheduleItem } from '@/data/schedule';
import { Clock, User } from 'lucide-react';

const ScheduleTimeline = ({ items, day }: { items: ScheduleItem[], day: string }) => (
  <div className="space-y-4">
    {items.map((item, index) => (
      <div key={index} className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 bg-card rounded-lg items-center">
        <div className={`col-span-1 text-sm md:text-base font-bold flex items-center gap-2 ${day === 'day1' ? 'text-blue-300' : 'text-green-300'}`}>
          <Clock className="h-4 w-4" />
          {item.time}
        </div>
        <div className="col-span-3 md:col-span-4 text-base md:text-lg">
          <p>{item.title}</p>
          {item.speaker && (
            <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
              <User className="h-4 w-4" />
              {item.speaker}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">전체 시간표</h2>
        <p className="text-muted-foreground mt-2">행사 당일 진행될 세션들을 확인하세요.</p>
      </div>
      <ScheduleTimeline items={day1Schedule} day="day1" />
    </section>
  );
}
