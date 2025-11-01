'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  DollarSign,
  Home,
  TrendingUp,
  Cpu,
  FileText,
  Upload,
  BarChart3,
  ArrowRight,
  Phone,
  Clock,
  MapPin,
  Star,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ClientHubPage() {
  const router = useRouter();

  const services = [
    {
      id: 'lending',
      title: 'Lending Solutions',
      description: 'Commercial & residential financing, business loans, lines of credit, and more',
      icon: DollarSign,
      color: '#10b981',
      link: '/client-hub/lending',
      features: ['12 Funding Partners', '24-Hour Response', 'Commercial Specialists']
    },
    {
      id: 'real-estate',
      title: 'Real Estate Services',
      description: 'Buy, sell, and finance properties with expert guidance and comprehensive services',
      icon: Home,
      color: '#3b82f6',
      link: '/client-hub/real-estate',
      features: ['Licensed Professionals', 'Full-Service Support', 'Investment Expertise']
    },
    {
      id: 'investments',
      title: 'Investment Opportunities',
      description: '9-12% fixed returns, UPREIT & 721 exchanges, and diversified real estate portfolios',
      icon: TrendingUp,
      color: '#f59e0b',
      link: '/client-hub/investments',
      features: ['9-12% Returns', 'Tax-Advantaged', 'Accredited Investors']
    },
    {
      id: 'tech',
      title: 'SaintVision Tech™',
      description: 'AI-powered financial platform with patent-protected automation and analytics',
      icon: Cpu,
      color: '#8b5cf6',
      link: '/client-hub/tech',
      features: ['Patent #10,290,222', 'AI-Powered', 'Real-Time Analytics']
    }
  ];

  const quickActions = [
    {
      id: 'apply',
      title: 'Complete Lending Application',
      description: 'Submit your full loan application with all required information',
      icon: FileText,
      color: '#10b981',
      link: '/client-hub/lending/apply'
    },
    {
      id: 'credit',
      title: 'Check Your Credit Score',
      description: 'Soft credit pull that won\'t affect your score',
      icon: BarChart3,
      color: '#3b82f6',
      link: '/client-hub/credit-assessment'
    },
    {
      id: 'upload',
      title: 'Upload Documents',
      description: 'Securely upload required documents to our file hub',
      icon: Upload,
      color: '#f59e0b',
      link: '/client-hub/file-hub'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-yellow-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3">
              Saint Vision Group LLC
            </h1>
            <p className="text-xl text-yellow-100/70">Your Partner in Financial Success</p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <div className="flex items-center gap-2 text-yellow-400">
                <Phone size={18} />
                <span className="font-semibold">(949) 820-2108</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Clock size={18} />
                <span>7:00 AM - 8:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <MapPin size={18} />
                <span>Irvine, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to Your Client Hub
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            Access all our services in one place. Whether you need financing, real estate services, investment opportunities, or cutting-edge technology solutions, we're here to help you succeed.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full">
              <Star size={20} className="text-yellow-400" />
              <span className="text-yellow-100 font-semibold">Patent #10,290,222</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full">
              <Star size={20} className="text-emerald-400" />
              <span className="text-emerald-100 font-semibold">9-12% Fixed Returns</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full">
              <Star size={20} className="text-blue-400" />
              <span className="text-blue-100 font-semibold">12 Funding Partners</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action) => (
              <Card
                key={action.id}
                className="bg-slate-800/80 border-yellow-500/30 hover:border-yellow-500/60 backdrop-blur-xl cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2"
                onClick={() => router.push(action.link)}
              >
                <CardContent className="p-6">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${action.color}20`, color: action.color }}
                  >
                    <action.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{action.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{action.description}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
                    onClick={() => router.push(action.link)}
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-slate-800/80 border-yellow-500/30 hover:border-yellow-500/60 backdrop-blur-xl cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2"
                onClick={() => router.push(service.link)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20`, color: service.color }}
                    >
                      <service.icon size={28} />
                    </div>
                  </div>
                  <CardTitle className="text-white text-2xl mt-4">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full text-xs text-yellow-100"
                      >
                        <CheckCircle size={14} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
                    onClick={() => router.push(service.link)}
                  >
                    Explore {service.title}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-yellow-500/20 to-slate-800/80 border-yellow-500/50 backdrop-blur-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-yellow-100/70 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you achieve your financial goals. Contact us today to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold text-lg px-8 shadow-lg shadow-yellow-500/30"
                onClick={() => router.push('/client-hub/lending/apply')}
              >
                <FileText size={20} className="mr-2" />
                Start Application
              </Button>
              <a href="tel:+19498202108">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10 text-lg px-8"
                >
                  <Phone size={20} className="mr-2" />
                  (949) 820-2108
                </Button>
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Available 7:00 AM - 8:00 PM Daily • Licensed Professionals • Commercial Specialists
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="border-t border-yellow-500/20 bg-slate-800/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-400">
            © 2024 Saint Vision Group LLC | Patent #10,290,222 | Powered by SaintVision Tech™
          </p>
          <p className="text-slate-500 text-sm mt-2">
            17875 Von Karman Avenue Suite 150, Irvine, CA 92614
          </p>
        </div>
      </div>
    </div>
  );
}
