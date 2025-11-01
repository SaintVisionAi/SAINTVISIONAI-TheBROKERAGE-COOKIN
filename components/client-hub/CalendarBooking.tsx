'use client';
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Phone } from 'lucide-react';

interface CalendarBookingProps {
  title?: string;
  description?: string;
  showHeader?: boolean;
  height?: string;
  showChatButton?: boolean;
}

export default function CalendarBooking({
  title = "Book Your Consultation",
  description = "Schedule a time that works best for you",
  showHeader = true,
  height = "900px",
  showChatButton = true
}: CalendarBookingProps) {
  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Add chat button click handler
    if (showChatButton) {
      const handleChatClick = () => {
        const existing = document.getElementById('saintsal-chat');
        if (existing) {
          existing.remove();
          return;
        }

        const frame = document.createElement('iframe');
        frame.id = 'saintsal-chat';
        frame.src = 'https://saintvisionai.com/assistant?agent=saintsal';
        frame.style.position = 'fixed';
        frame.style.bottom = '90px';
        frame.style.right = '28px';
        frame.style.width = '380px';
        frame.style.height = '520px';
        frame.style.border = 'none';
        frame.style.borderRadius = '18px';
        frame.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
        frame.style.zIndex = '99999';
        document.body.appendChild(frame);
      };

      // Create chat button
      const chatBtn = document.createElement('button');
      chatBtn.id = 'saintsal-btn';
      chatBtn.innerHTML = '⚡ Chat with SaintSal™';
      chatBtn.style.cssText = `
        position: fixed;
        bottom: 28px;
        right: 28px;
        background: #d4af37;
        color: #000;
        font-weight: 600;
        border: none;
        border-radius: 12px;
        padding: 14px 22px;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        z-index: 99998;
      `;

      chatBtn.addEventListener('mouseenter', () => {
        chatBtn.style.transform = 'translateY(-2px)';
        chatBtn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
      });

      chatBtn.addEventListener('mouseleave', () => {
        chatBtn.style.transform = 'translateY(0)';
        chatBtn.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
      });

      chatBtn.addEventListener('click', handleChatClick);
      document.body.appendChild(chatBtn);
    }

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      const chatBtn = document.getElementById('saintsal-btn');
      if (chatBtn) {
        document.body.removeChild(chatBtn);
      }
      const chatFrame = document.getElementById('saintsal-chat');
      if (chatFrame) {
        document.body.removeChild(chatFrame);
      }
    };
  }, [showChatButton]);

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

      <div style={{ maxWidth: '950px', margin: '0 auto', position: 'relative' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/djw1Jq6ZMdKsV60MFIuM"
          style={{
            width: '100%',
            border: 'none',
            overflow: 'hidden',
            height: height,
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)'
          }}
          scrolling="no"
          title="SaintSal Calendar Booking"
        />
      </div>

      <style jsx>{`
        .calendar-booking-container {
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .calendar-booking-container iframe {
            min-height: 600px;
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
}
