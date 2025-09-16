import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ParkingCircleOff } from 'lucide-react';

export function LocationSection() {
  return (
    <section id="location" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">오시는 길 & 기타 안내</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.170614532591!2d127.060601315629!3d37.50462083556041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca41334149025%3A0x442ff80491b6194!2sGoogle%20Startup%20Campus!5e0!3m2!1sko!2skr!4v1662965874288!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <Card className="bg-card/70 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="h-6 w-6" />
              구글 스타트업 캠퍼스
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">서울 강남구 영동대로 417 오토웨이타워 지하 2층</p>
            <p className="text-muted-foreground text-sm mt-1">(삼성역 3번 출구에서 도보 5분)</p>
            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold text-foreground mb-2">교통 및 숙박 안내</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>지방 참가자 교통편 지원</li>
                <li>사전 신청자 숙박 지원 (GLAD 강남 코엑스 센터)</li>
                <li className="font-bold text-destructive flex items-center gap-2">
                  <ParkingCircleOff className="h-4 w-4" />
                  행사 장소 주차비는 지원되지 않습니다.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
