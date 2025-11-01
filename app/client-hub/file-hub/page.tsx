'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Upload,
  FileText,
  Shield,
  CheckCircle,
  Lock,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FileHubPage() {
  useEffect(() => {
    // Load the GHL form embed script for file uploads
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

  const documentTypes = [
    'Tax returns (2 years)',
    'Bank statements (3 months)',
    'Pay stubs or proof of income',
    'Property documents',
    'Business financial statements',
    'Credit reports',
    'Identification (Driver\'s License, Passport)',
    'Insurance documents',
    'Legal documents',
    'Other supporting documents'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-blue-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/client-hub">
            <Button
              variant="outline"
              className="border-blue-500/30 text-blue-100 hover:bg-blue-500/10"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Client Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
            <Upload className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            SVG Secure File Hub
          </h1>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
            Upload your documents securely for faster loan processing and approvals. All files are <span className="text-blue-400 font-semibold">encrypted and protected</span> with bank-level security.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-800/80 border-blue-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Secure</h3>
              <p className="text-slate-400 text-xs">
                Bank-level encryption
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-emerald-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Fast</h3>
              <p className="text-slate-400 text-xs">
                Instant upload
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-purple-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Private</h3>
              <p className="text-slate-400 text-xs">
                Your eyes only
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-yellow-500/50 backdrop-blur-xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">Easy</h3>
              <p className="text-slate-400 text-xs">
                Simple process
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Document Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/80 border-blue-500/50 backdrop-blur-xl h-full">
              <CardHeader>
                <CardTitle className="text-blue-100 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Common Documents Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documentTypes.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-xs leading-relaxed">
                    <strong className="text-slate-300">Note:</strong> Required documents may vary based on your loan type. Our team will let you know exactly what's needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {/* Upload Form */}
            <Card className="bg-slate-800/80 border-blue-500/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-blue-100 text-2xl">
                  Upload Your Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* GHL Secure File Upload Form */}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/yLjMJMuW3mM08ju9GkWY"
                  style={{
                    width: '100%',
                    border: 'none',
                    overflow: 'hidden',
                    minHeight: '800px',
                    borderRadius: '8px'
                  }}
                  id="inline-yLjMJMuW3mM08ju9GkWY"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="SVG Secure File Hub"
                  data-height="800"
                  data-layout-iframe-id="inline-yLjMJMuW3mM08ju9GkWY"
                  data-form-id="yLjMJMuW3mM08ju9GkWY"
                  title="Saint Vision Group | Centralized File Submission"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Info */}
        <Card className="bg-gradient-to-r from-blue-500/20 to-slate-800/80 border-blue-500/50 backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Your Security is Our Priority
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100/70">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">256-bit encryption</strong> protects all uploads
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Secure cloud storage</strong> with automatic backups
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Access controls</strong> limit who can view files
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">GDPR compliant</strong> data handling
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-slate-800/50 border-blue-500/30 backdrop-blur-xl mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Need Help Uploading Documents?
            </h3>
            <p className="text-slate-300 mb-4">
              Our team is available to assist you with document uploads and questions
            </p>
            <a
              href="tel:+19498202108"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300"
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
