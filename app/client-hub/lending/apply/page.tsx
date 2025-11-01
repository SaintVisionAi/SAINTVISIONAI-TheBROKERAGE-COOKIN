'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LendingApplicationPage() {
  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-yellow-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/client-hub/lending">
            <Button
              variant="outline"
              className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Lending Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl mb-6 shadow-lg shadow-yellow-500/30">
            <FileText className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Full Lending Application
          </h1>
          <p className="text-xl text-yellow-100/70 max-w-3xl mx-auto">
            Complete this comprehensive application to get started with your loan. Our team will review your information and contact you within 24 hours.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/80 border-emerald-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Fast Processing</h3>
              <p className="text-slate-300 text-sm">
                24-hour review and response on all applications
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-blue-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Secure & Confidential</h3>
              <p className="text-slate-300 text-sm">
                Bank-level encryption protects your information
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-yellow-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Expert Guidance</h3>
              <p className="text-slate-300 text-sm">
                Dedicated funding specialists to guide you
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <Card className="bg-slate-800/80 border-yellow-500/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-yellow-100 text-2xl">
              Complete Your Application
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {/* GHL Full Lending Application Form */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/0zcz0ZlG2eEddg94wcbq"
              style={{
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                minHeight: '1200px',
                borderRadius: '8px'
              }}
              id="inline-0zcz0ZlG2eEddg94wcbq"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="FULL LENDING Application"
              data-height="1200"
              data-layout-iframe-id="inline-0zcz0ZlG2eEddg94wcbq"
              data-form-id="0zcz0ZlG2eEddg94wcbq"
              title="FULL LENDING Application"
            />
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-slate-800/50 border-yellow-500/30 backdrop-blur-xl mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Need Help with Your Application?
            </h3>
            <p className="text-slate-300 mb-4">
              Our funding specialists are available to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+19498202108"
                className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300"
              >
                📞 (949) 820-2108
              </a>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">
                Available 7:00 AM - 8:00 PM Daily
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
