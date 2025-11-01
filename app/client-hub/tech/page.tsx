'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Cpu,
  Brain,
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Award,
  CheckCircle,
  FileText,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TechPage() {
  const router = useRouter();

  const features = [
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning for market insights and predictive modeling',
      icon: Brain,
      color: '#8b5cf6',
      capabilities: [
        'Real-time market data processing',
        'Predictive modeling and forecasting',
        'Custom reporting and dashboards',
        'Pattern recognition and alerts'
      ]
    },
    {
      id: 'property-valuation',
      title: 'Property Valuation AI',
      description: 'Accurate automated valuations using AI and comprehensive market data',
      icon: TrendingUp,
      color: '#10b981',
      capabilities: [
        'Instant property estimates',
        'Comparative market analysis',
        'Trend analysis and projections',
        'Investment opportunity scoring'
      ]
    },
    {
      id: 'portfolio-optimization',
      title: 'Portfolio Optimization',
      description: 'Smart tools to maximize returns and minimize risk in your investments',
      icon: BarChart3,
      color: '#3b82f6',
      capabilities: [
        'Risk assessment and scoring',
        'Diversification analysis',
        'Performance tracking',
        'Rebalancing recommendations'
      ]
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning Suite',
      description: 'Comprehensive planning tools with AI-driven recommendations',
      icon: Shield,
      color: '#f59e0b',
      capabilities: [
        'Goal-based planning',
        'Scenario modeling',
        'Tax optimization strategies',
        'Estate planning integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-purple-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/client-hub">
            <Button
              variant="outline"
              className="border-purple-500/30 text-purple-100 hover:bg-purple-500/10"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Client Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl mb-8 shadow-lg shadow-purple-500/30">
          <Cpu className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-6">
          SaintVision Tech™
        </h1>
        <p className="text-2xl text-purple-100/70 max-w-4xl mx-auto mb-6">
          Proprietary AI-powered financial platform for intelligent decision-making
        </p>

        {/* Patent Badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-slate-800/80 border border-purple-500/50 px-6 py-3 rounded-full mb-12">
          <Award className="w-6 h-6 text-purple-400" />
          <span className="text-purple-100 font-semibold">
            Patent #10,290,222 | AI-Integrated Client Automation Framework
          </span>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Zap, title: 'Real-Time Intelligence', desc: 'Live market data and instant analysis' },
            { icon: Brain, title: 'Machine Learning', desc: 'Predictive models that learn and improve' },
            { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level encryption and compliance' }
          ].map((item, idx) => (
            <Card key={idx} className="bg-slate-800/80 border-purple-500/30 backdrop-blur-xl">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Platform Overview */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Card className="bg-gradient-to-r from-purple-500/20 to-slate-800/80 border-purple-500/50 backdrop-blur-xl mb-16">
          <CardContent className="p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  The Future of Financial Technology
                </h2>
                <p className="text-lg text-purple-100/70 leading-relaxed mb-4">
                  SaintVision Tech™ represents the cutting edge of financial technology, combining artificial intelligence, machine learning, and big data analytics to deliver unparalleled insights for investors, lenders, and real estate professionals.
                </p>
                <p className="text-lg text-purple-100/70 leading-relaxed">
                  Our proprietary AI framework (Patent #10,290,222) automates complex financial processes, provides real-time market intelligence, and enables data-driven decision-making at scale. With additional patents under development for lending, real estate, and healthcare automation, we're building the most advanced financial platform in the industry.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-purple-100/70">
            Comprehensive suite of AI-powered financial tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="bg-slate-800/80 border-purple-500/30 hover:border-purple-500/60 backdrop-blur-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <CardHeader>
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                >
                  <feature.icon size={28} />
                </div>
                <CardTitle className="text-white text-2xl">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-200">
                      <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <Card className="bg-slate-800/80 border-purple-500/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-purple-100 text-3xl text-center">
              Who Uses SaintVision Tech™?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Real Estate Investors',
                  benefits: ['Property analysis', 'Market trends', 'Deal scoring', 'Portfolio management']
                },
                {
                  title: 'Financial Advisors',
                  benefits: ['Client planning', 'Risk assessment', 'Performance tracking', 'Automated reporting']
                },
                {
                  title: 'Lending Professionals',
                  benefits: ['Credit analysis', 'Property valuations', 'Risk modeling', 'Pipeline management']
                }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle size={16} className="text-purple-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Card className="bg-gradient-to-r from-purple-500/20 to-slate-800/80 border-purple-500/50 backdrop-blur-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Request Platform Access
            </h2>
            <p className="text-xl text-purple-100/70 mb-8 max-w-3xl mx-auto">
              Get started with SaintVision Tech™ and experience the future of financial technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/client-hub/lending/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold text-lg px-8 shadow-lg shadow-purple-500/30"
                >
                  <FileText size={20} className="mr-2" />
                  Request Access
                </Button>
              </Link>
              <a href="tel:+19498202108">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/30 text-purple-100 hover:bg-purple-500/10 text-lg px-8"
                >
                  📞 (949) 820-2108
                </Button>
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Available 7:00 AM - 8:00 PM Daily • Enterprise Solutions Available
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
