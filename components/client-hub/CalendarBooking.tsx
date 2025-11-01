'use client';
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Phone } from 'lucide-react';

interface CalendarBookingProps {
  title?: string;
  description?: string;
  showHeader?: boolean;
  height?: string;
}

export default function CalendarBooking({
  title = "Book Your Consultation",
  description = "Schedule a time that works best for you",
  showHeader = true,
  height = "700px"
}: CalendarBookingProps) {
  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="calendar-booking-container w-full">
      {showHeader && (
        <Card className="bg-slate-800/80 border-yellow-500/50 backdrop-blur-xl mb-6">
          <CardHeader>
            <CardTitle className="text-yellow-100 text-2xl flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              {title}
            </CardTitle>
            <CardDescription className="text-yellow-100/70 text-base mt-2">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 text-sm text-yellow-100/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>30 minute consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Phone or Video Call</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-slate-800/80 border-yellow-500/50 backdrop-blur-xl overflow-hidden">
        <CardContent className="p-0">
          <div
            className="w-full relative"
            style={{ minHeight: height }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/djw1Jq6ZMdKsV60MFIuM"
              style={{
                width: '100%',
                height: height,
                border: 'none',
                overflow: 'hidden',
                borderRadius: '0 0 12px 12px'
              }}
              scrolling="no"
              id="VVGtUwspSIqM9SovtBAn_1761957286154"
              title="SaintSal Calendar Booking"
            />
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        .calendar-booking-container {
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .calendar-booking-container iframe {
            min-height: 600px;
          }
        }
      `}</style>
    </div>
  );
}
