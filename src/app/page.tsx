import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { PrerequisitesSection } from '@/components/prerequisites-section';
import { ScheduleSection } from '@/components/schedule-section';
import { PersonalizedSchedule } from '@/components/personalized-schedule';
import { EventsSection } from '@/components/events-section';
import { LocationSection } from '@/components/location-section';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-grow px-6">
        <HeroSection />
        <AboutSection />
        <PrerequisitesSection />
        <ScheduleSection />
        <div className="py-16">
          <PersonalizedSchedule />
        </div>
        <EventsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
