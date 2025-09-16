import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { day1Schedule, day2Schedule } from '@/data/schedule';
import type { ScheduleItem } from '@/data/schedule';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock } from 'lucide-react';

const ScheduleTimeline = ({ items, day }: { items: ScheduleItem[]; day: string }) => (
  <Accordion type="single" collapsible className="w-full">
    {items.map((item, index) => (
      <div key={index} className="border-b">
        {item.description ? (
          <AccordionItem value={`item-${index}`} className="border-none">
            <AccordionTrigger className="grid grid-cols-4 md:grid-cols-6 gap-4 p-4 hover:no-underline hover:bg-muted/50 rounded-lg">
              <div
                className={`col-span-1 text-sm md:text-base font-bold flex items-center gap-2 ${day === 'day1' ? 'text-blue-300' : 'text-green-300'}`}
              >
                <Clock className="h-4 w-4" />
                {item.time}
              </div>
              <div className="col-span-3 md:col-span-4 text-base md:text-lg text-left">
                <p>{item.title}</p>
                {item.englishTitle && <p className="text-sm text-muted-foreground">{item.englishTitle}</p>}
              </div>
              {item.speaker && (
                <div className="col-span-4 md:col-span-1 text-sm text-muted-foreground flex flex-row-reverse md:flex-col items-center justify-start md:justify-center gap-2 mt-2 md:mt-0 text-right md:text-center ml-auto">
                  <span>{item.speaker}</span>
                </div>
              )}
            </AccordionTrigger>
            <AccordionContent className="pb-4 px-4">
              <div className="text-muted-foreground pl-10">
                {typeof item.description === 'string' ? (
                  <p className="whitespace-pre-line">{item.description}</p>
                ) : (
                  <div className="space-y-4">
                    {item.description.map((talk, i) => (
                      <div key={i}>
                        <p className="font-bold text-foreground">{talk.talkTitle}</p>
                        {talk.talkDescription && <p className="mt-1 whitespace-pre-line">{talk.talkDescription}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4 p-4 items-center">
            <div
              className={`col-span-1 text-sm md:text-base font-bold flex items-center gap-2 ${day === 'day1' ? 'text-blue-300' : 'text-green-300'}`}
            >
              <Clock className="h-4 w-4" />
              {item.time}
            </div>
            <div className="col-span-3 md:col-span-4 text-base md:text-lg">
              <p>{item.title}</p>
              {item.englishTitle && <p className="text-sm text-muted-foreground">{item.englishTitle}</p>}
            </div>
            {item.speaker && (
              <div className="col-span-4 md:col-span-1 text-sm text-muted-foreground flex flex-row-reverse md:flex-col items-center justify-start md:justify-center gap-2 mt-2 md:mt-0 text-right md:text-center ml-auto">
                <span>{item.speaker}</span>
              </div>
            )}
          </div>
        )}
      </div>
    ))}
  </Accordion>
);

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">전체 시간표</h2>
        <p className="text-muted-foreground mt-2">행사 당일 진행될 세션들을 확인하세요.</p>
      </div>
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="day1" className="data-[state=active]:text-blue-300">Day 1: 9월 20일 (토)</TabsTrigger>
          <TabsTrigger value="day2" className="data-[state=active]:text-green-300">Day 2: 9월 21일 (일)</TabsTrigger>
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
