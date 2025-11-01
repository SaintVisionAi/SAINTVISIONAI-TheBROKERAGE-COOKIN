'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
  Shield,
  PieChart,
  Award,
  Target,
  CheckCircle,
  FileText,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function InvestmentsPage() {
  const router = useRouter();

  const offerings = [
    {
      id: 'fixed-returns',
      title: '9-12% Fixed Returns',
      description: 'Consistent annual returns backed by real assets and proven track record',
      icon: Target,
      color: '#10b981',
      features: [
        'Predictable quarterly distributions',
        'Low volatility compared to stocks',
        'Backed by real estate assets',
        'Professional management'
      ]
    },
    {
      id: 'upreit',
      title: 'UPREIT & 721 Exchanges',
      description: 'Tax-deferred strategies for real estate investors seeking diversification',
      icon: Shield,
      color: '#3b82f6',
      features: [
        'Defer capital gains taxes',
        'No 1031 exchange deadlines',
        'Portfolio diversification',
        'Estate planning benefits'
      ]
    },
    {
      id: 'lending-fund',
      title: 'Lending Syndicate Fund',
      description: 'Participate in our institutional-quality private lending fund',
      icon: PieChart,
      color: '#8b5cf6',
      features: [
        'Secured by real estate',
        'Monthly interest payments',
        'Short-term investments',
        'Diversified loan portfolio'
      ]
    },
    {
      id: 'real-estate-portfolio',
      title: 'Diversified RE Portfolio',
      description: 'Access to commercial and residential real estate investments',
      icon: Award,
      color: '#f59e0b',
      features: [
        'Multi-asset class exposure',
        'Geographic diversification',
        'Growth + income strategy',
        'Professional asset management'
      ]
    }
  ];

  const highlights = [
    {
      stat: '9-12%',
      label: 'Annual Returns',
      description: 'Consistent performance year over year',
      color: '#10b981'
    },
    {
      stat: '$50K',
      label: 'Minimum Investment',
      description: 'Institutional-quality access for qualified investors',
      color: '#3b82f6'
    },
    {
      stat: '100+',
      label: 'Active Investors',
      description: 'Trusted by high-net-worth individuals',
      color: '#f59e0b'
    }
  ];

  const benefits = [
    'SEC-compliant investment structures',
    'Accredited investor opportunities',
    'Quarterly performance reporting',
    'Tax-advantaged strategies',
    'Professional fiduciary management',
    'Liquidity options available'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-orange-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/client-hub">
            <Button
              variant="outline"
              className="border-orange-500/30 text-orange-100 hover:bg-orange-500/10"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Client Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mb-8 shadow-lg shadow-orange-500/30">
          <TrendingUp className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-6">
          Investment Opportunities
        </h1>
        <p className="text-2xl text-orange-100/70 max-w-4xl mx-auto mb-8">
          Build wealth with our proven fixed-return strategies. Access institutional-quality investments with <span className="text-orange-400 font-semibold">9-12% annual returns</span> backed by real estate assets.
        </p>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {highlights.map((highlight, idx) => (
            <Card
              key={idx}
              className="bg-gradient-to-br from-slate-800/80 to-slate-800/60 border-orange-500/50 backdrop-blur-xl"
            >
              <CardContent className="p-8 text-center">
                <div
                  className="text-6xl font-bold mb-2"
                  style={{ color: highlight.color }}
                >
                  {highlight.stat}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {highlight.label}
                </div>
                <div className="text-sm text-slate-400">
                  {highlight.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Investment Strategies */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Investment Strategies
          </h2>
          <p className="text-lg text-orange-100/70">
            Choose from multiple investment vehicles tailored to your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {offerings.map((offering) => (
            <Card
              key={offering.id}
              className="bg-slate-800/80 border-orange-500/30 hover:border-orange-500/60 backdrop-blur-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <CardHeader>
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${offering.color}20`, color: offering.color }}
                >
                  <offering.icon size={28} />
                </div>
                <CardTitle className="text-white text-2xl">
                  {offering.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {offering.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Invest With Us */}
        <Card className="bg-slate-800/80 border-orange-500/50 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-orange-100 text-3xl text-center">
              Why Invest With Saint Vision Group?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg"
                >
                  <CheckCircle size={20} className="text-orange-400 flex-shrink-0" />
                  <span className="text-orange-100">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Process */}
        <Card className="bg-gradient-to-r from-orange-500/20 to-slate-800/80 border-orange-500/50 backdrop-blur-xl mb-16">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                How To Get Started
              </h3>
              <p className="text-lg text-orange-100/70 max-w-2xl mx-auto">
                Our investment process is designed to be simple and transparent
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Consultation', desc: 'Schedule a call with our investment team' },
                { step: '2', title: 'Qualification', desc: 'Verify accredited investor status' },
                { step: '3', title: 'Selection', desc: 'Choose your investment strategy' },
                { step: '4', title: 'Investment', desc: 'Complete documentation and fund' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disclosures */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-xl mb-16">
          <CardContent className="p-6">
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong>Important Disclosures:</strong> Investments are offered to accredited investors only. Past performance does not guarantee future results. All investments carry risk including potential loss of principal. Returns are not guaranteed. Investments may be illiquid and subject to holding periods. Please consult with your tax and legal advisors before investing. Securities offered through registered broker-dealers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Card className="bg-gradient-to-r from-orange-500/20 to-slate-800/80 border-orange-500/50 backdrop-blur-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Investing?
            </h2>
            <p className="text-xl text-orange-100/70 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our investment team to discuss your goals and explore opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/client-hub/lending/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg px-8 shadow-lg shadow-orange-500/30"
                >
                  <FileText size={20} className="mr-2" />
                  Request Consultation
                </Button>
              </Link>
              <a href="tel:+19498202108">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500/30 text-orange-100 hover:bg-orange-500/10 text-lg px-8"
                >
                  📞 (949) 820-2108
                </Button>
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Available 7:00 AM - 8:00 PM Daily • Accredited Investors Only
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
