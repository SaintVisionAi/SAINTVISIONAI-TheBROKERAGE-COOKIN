'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreditAssessmentPage() {
  useEffect(() => {
    // Load the MyScoreIQ script
    const script = document.createElement('script');
    script.src = 'https://myscoreiq.com/get-fico-max.aspx';
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
      <div className="border-b border-emerald-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/client-hub">
            <Button
              variant="outline"
              className="border-emerald-500/30 text-emerald-100 hover:bg-emerald-500/10"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Client Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/30">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Soft Credit Pull Assessment
          </h1>
          <p className="text-xl text-emerald-100/70 max-w-3xl mx-auto">
            Check your credit score instantly <span className="text-emerald-400 font-semibold">without affecting your credit.</span> Get your FICO® Score and detailed credit report in minutes.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/80 border-emerald-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">No Credit Impact</h3>
              <p className="text-slate-300 text-sm">
                Soft inquiry won't affect your credit score
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-blue-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-slate-300 text-sm">
                Get your FICO® Score immediately
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-purple-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-slate-300 text-sm">
                Bank-level encryption protects your data
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Info */}
        <Card className="bg-blue-500/10 border-blue-500/50 backdrop-blur-xl mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What is a Soft Credit Pull?
                </h3>
                <p className="text-blue-100/70 leading-relaxed mb-3">
                  A soft credit inquiry (also called a "soft pull") is a credit check that doesn't affect your credit score. Unlike hard inquiries, soft pulls can be done as often as needed without any negative impact on your credit.
                </p>
                <ul className="space-y-2 text-blue-100/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Does not appear on your credit report to lenders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Can be performed unlimited times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Helps you know where you stand before applying</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credit Assessment Form */}
        <Card className="bg-slate-800/80 border-emerald-500/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-emerald-100 text-2xl text-center">
              Get Your Free Credit Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {/* MyScoreIQ Widget Placeholder */}
            <div className="bg-white rounded-lg p-8 min-h-[600px] flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  MyScoreIQ Credit Assessment
                </h3>
                <p className="text-slate-600 mb-6">
                  The credit assessment widget will load here.
                </p>
                <p className="text-sm text-slate-500">
                  For development: Integrate MyScoreIQ widget at<br />
                  <code className="bg-slate-100 px-2 py-1 rounded">
                    https://myscoreiq.com/get-fico-max.aspx
                  </code>
                </p>
                <div className="mt-8">
                  <a
                    href="https://myscoreiq.com/get-fico-max.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    Start Credit Assessment →
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Check Your Score */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl mt-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why Check Your Credit Score?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Better Loan Rates',
                  desc: 'Know your score to qualify for the best interest rates'
                },
                {
                  title: 'Pre-Qualification',
                  desc: 'Understand your eligibility before formal applications'
                },
                {
                  title: 'Identify Issues',
                  desc: 'Catch errors or fraud early on your credit report'
                },
                {
                  title: 'Track Progress',
                  desc: 'Monitor improvements as you build your credit'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-slate-800/50 border-emerald-500/30 backdrop-blur-xl mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Need Help Understanding Your Credit?
            </h3>
            <p className="text-slate-300 mb-4">
              Our credit specialists are available to help you understand your credit report and improve your score
            </p>
            <a
              href="tel:+19498202108"
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300"
            >
              📞 (949) 820-2108
            </a>
            <span className="text-slate-500 mx-3">•</span>
            <span className="text-slate-400">
              Available 7:00 AM - 8:00 PM Daily
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
