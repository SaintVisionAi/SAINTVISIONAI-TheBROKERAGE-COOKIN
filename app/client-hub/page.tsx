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
  Award,
  Zap,
  Shield,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ClientHubPage() {
  const router = useRouter();

  const services = [
    {
      id: 'lending',
      title: 'Strategic Funding Solutions',
      description: 'Real estate lending, business loans, merchant cash advances, lines of credit, and specialized financing',
      icon: DollarSign,
      link: '/client-hub/lending',
      features: ['12 Funding Partners', '24-Hour Response', 'Commercial Specialists']
    },
    {
      id: 'real-estate',
      title: 'RE Buy & Sell | Financing',
      description: 'Full-service real estate transactions with expert guidance and comprehensive financing solutions',
      icon: Home,
      link: '/client-hub/real-estate',
      features: ['Licensed Professionals', 'Full-Service Support', 'Investment Expertise']
    },
    {
      id: 'investments',
      title: 'Investment Opportunities',
      description: '9-12% fixed returns, UPREIT & 721 exchanges, and diversified real estate portfolios',
      icon: TrendingUp,
      link: '/client-hub/investments',
      features: ['9-12% Returns', 'Tax-Advantaged', 'Accredited Investors']
    },
    {
      id: 'tech',
      title: 'SaintVision Technologies™',
      description: 'AI-powered financial platform with patent-protected automation and real-time analytics',
      icon: Cpu,
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
      link: '/client-hub/lending/apply'
    },
    {
      id: 'credit',
      title: 'Check Your Credit Score',
      description: 'Soft credit pull that won\'t affect your score',
      icon: BarChart3,
      link: '/client-hub/credit-assessment'
    },
    {
      id: 'upload',
      title: 'Upload Documents',
      description: 'Securely upload required documents to our file hub',
      icon: Upload,
      link: '/client-hub/file-hub'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header - Premium Black & Gold */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            {/* Logo with neon gold effect */}
            <h1 className="text-6xl md:text-7xl font-italiana text-white mb-3 tracking-wide">
              Saint Vision Group <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]">LLC</span>
            </h1>
            <p className="text-lg text-gray-400 font-quicksand mb-8">
              Your Partner in Financial Excellence
            </p>

            {/* Neon Trust Badges with Glow */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative flex items-center gap-2 bg-black border-2 border-yellow-400 px-6 py-3 rounded-full">
                  <Award size={20} className="text-yellow-400" />
                  <span className="text-yellow-400 font-montserrat font-bold text-sm drop-shadow-[0_0_10px_rgba(255,215,0,1)]">
                    Patent #10,290,222
                  </span>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative flex items-center gap-2 bg-black border-2 border-yellow-400 px-6 py-3 rounded-full">
                  <Zap size={20} className="text-yellow-400" />
                  <span className="text-yellow-400 font-montserrat font-bold text-sm drop-shadow-[0_0_10px_rgba(255,215,0,1)]">
                    9-12% Fixed Returns
                  </span>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative flex items-center gap-2 bg-black border-2 border-yellow-400 px-6 py-3 rounded-full">
                  <Shield size={20} className="text-yellow-400" />
                  <span className="text-yellow-400 font-montserrat font-bold text-sm drop-shadow-[0_0_10px_rgba(255,215,0,1)]">
                    20+ Years Expertise
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              <div className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <Phone size={18} />
                <span className="font-quicksand font-semibold">(949) 820-2108</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock size={18} />
                <span className="font-quicksand">7:00 AM - 8:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} />
                <span className="font-quicksand">Irvine, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section with Ryan Capatosto Quote */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-italiana text-white mb-6">
            Welcome to Your Client Hub
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            "True wealth is not just measured in assets, but in how faithfully we steward the resources entrusted to us."
            <br />
            <span className="text-sm text-gray-500 mt-2 block">— Ryan Capatosto, Managing Director</span>
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h3 className="text-3xl font-italiana text-white text-center mb-8">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action) => (
              <Card
                key={action.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-yellow-400/50 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 group"
                onClick={() => router.push(action.link)}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-900 border border-gray-800 group-hover:border-yellow-400/50 rounded-xl flex items-center justify-center mb-6 transition-all">
                    <action.icon size={32} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-quicksand font-bold text-white mb-3">{action.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{action.description}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-montserrat font-bold shadow-lg shadow-yellow-500/20"
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
          <h3 className="text-3xl font-italiana text-white text-center mb-8">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-yellow-400/50 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 group"
                onClick={() => router.push(service.link)}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gray-900 border border-gray-800 group-hover:border-yellow-400/50 rounded-xl flex items-center justify-center mb-6 transition-all">
                    <service.icon size={32} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <CardTitle className="text-white text-2xl font-quicksand font-bold mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gray-900 border border-gray-800 px-3 py-2 rounded-lg text-xs text-gray-300"
                      >
                        <CheckCircle size={14} className="text-yellow-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-montserrat font-bold shadow-lg shadow-yellow-500/20"
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

        {/* CTA Section with Neon Glow */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <Card className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-400/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-5xl font-italiana text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                "True wealth is not just measured in assets, but in how faithfully we steward the resources entrusted to us."
                <br />
                <span className="text-sm text-gray-500 mt-2 block">— Ryan Capatosto, Managing Director</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-montserrat font-bold text-lg px-10 py-6 shadow-2xl shadow-yellow-500/30"
                  onClick={() => router.push('/client-hub/lending/apply')}
                >
                  <FileText size={22} className="mr-2" />
                  Start Application
                </Button>
                <a href="tel:+19498202108">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-montserrat font-bold text-lg px-10 py-6 transition-all"
                  >
                    <Phone size={22} className="mr-2" />
                    (949) 820-2108
                  </Button>
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                Available 7:00 AM - 8:00 PM Daily • Licensed Professionals • Commercial Specialists
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-400 font-quicksand">
            © 2024 Saint Vision Group LLC | Patent #10,290,222 | Powered by SaintVision Technologies™
          </p>
          <p className="text-gray-600 text-sm mt-2">
            17875 Von Karman Avenue Suite 150, Irvine, CA 92614
          </p>
        </div>
      </div>
    </div>
  );
}
