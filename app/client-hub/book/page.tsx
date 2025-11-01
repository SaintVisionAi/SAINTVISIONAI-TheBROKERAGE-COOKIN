'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import CalendarBooking from '@/components/client-hub/CalendarBooking';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-yellow-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/client-hub">
            <Button
              variant="outline"
              className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Client Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Message */}
        <Card className="bg-gradient-to-r from-emerald-500/20 to-slate-800/80 border-emerald-500/50 backdrop-blur-xl mb-8">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40">
                  <CheckCircle className="w-7 h-7 text-black" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Information Received!
                </h2>
                <p className="text-slate-200 leading-relaxed mb-4">
                  Thank you for your interest! We've received your information and our team will review it shortly.
                </p>
                <p className="text-yellow-200 font-semibold">
                  📅 Next Step: Schedule your free consultation below to discuss your needs in detail.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar Booking */}
        <CalendarBooking
          title="Schedule Your Free Consultation"
          description="Pick a time that works best for you. We'll call you at your scheduled time."
          showHeader={true}
          height="700px"
        />

        {/* Footer Info */}
        <Card className="bg-slate-800/50 border-yellow-500/30 backdrop-blur-xl mt-6">
          <CardContent className="p-6 text-center">
            <p className="text-slate-300 text-sm">
              Can't find a suitable time? Call us directly at{' '}
              <a
                href="tel:+19498202108"
                className="text-yellow-400 font-semibold hover:text-yellow-300"
              >
                (949) 820-2108
              </a>
            </p>
            <p className="text-slate-400 text-xs mt-2">
              Available 7:00 AM - 8:00 PM Daily
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
