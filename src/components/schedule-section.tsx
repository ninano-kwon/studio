import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { day1Schedule, day2Schedule } from '@/data/schedule';
import type { ScheduleItem } from '@/data/schedule';
import { Clock, MessageSquarePlus } from 'lucide-react';
import { SessionFeedback } from './session-feedback';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const ScheduleTimeline = ({ items, day }: { items: ScheduleItem[], day: string }) => (
  <div className="space-y-4">
    {items.map((item, index) => (
      <div key={index} className="grid grid-cols-4 md:grid-cols-5 gap-4 p-4 bg-card rounded-lg items-center">
        <div className={`col-span-1 text-sm md:text-base font-bold flex items-center gap-2 ${day === 'day1' ? 'text-blue-300' : 'text-green-300'}`}>
          <Clock className="h-4 w-4" />
          {item.time}
        </div>
        <div className="col-span-2 md:col-span-3 text-base md:text-lg">{item.title}</div>
        <div className="col-span-1 text-right">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <MessageSquarePlus className="h-4 w-4 mr-2" />
                피드백
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>피드백 남기기: {item.title}</DialogTitle>
              </DialogHeader>
              <SessionFeedback sessionTitle={item.title} />
            </DialogContent>
          </Dialog>
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
        <p className="text-muted-foreground mt-2">이틀간 진행될 세션들을 확인하세요.</p>
      </div>

      <Tabs defaultValue="day1">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="day1" className="data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground">
            Day 1: 9월 20일 (토)
          </TabsTrigger>
          <TabsTrigger value="day2" className="data-[state=active]:bg-green-600/90 data-[state=active]:text-primary-foreground">
            Day 2: 9월 21일 (일)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
          <ScheduleTimeline items={day1Schedule} day="day1" />
        </TabsContent>
        <TabsContent value="day2">
          <ScheduleTimeline items={day2Schedule} day="day2" />
        </TabsContent>
      </Tabs>
    </section>
  );
}
