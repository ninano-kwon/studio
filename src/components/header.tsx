import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const navLinks = [
    { href: '#about', label: '행사 소개' },
    { href: '#prepare', label: '사전 준비' },
    { href: '#schedule', label: '시간표' },
    { href: '#events', label: '특별 이벤트' },
    { href: '#location', label: '오시는 길' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-foreground">
          25 KR GDG/GDE Summit
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
