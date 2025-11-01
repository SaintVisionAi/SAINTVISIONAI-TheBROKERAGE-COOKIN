'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Home,
  Building2,
  Key,
  TrendingUp,
  Search,
  FileText,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function RealEstatePage() {
  const router = useRouter();

  const services = [
    {
      id: 'residential-buy',
      title: 'Residential Purchase',
      description: 'Find and finance your dream home with expert guidance',
      icon: Home,
      color: '#ec4899',
      features: ['Primary Residences', 'Investment Properties', 'Second Homes', 'MLS & Off-Market Access']
    },
    {
      id: 'residential-sell',
      title: 'Residential Sales',
      description: 'Sell your property for top dollar with strategic marketing',
      icon: Key,
      color: '#f59e0b',
      features: ['Market Analysis', 'Professional Marketing', 'Negotiation', 'Fast Close']
    },
    {
      id: 'commercial',
      title: 'Commercial Real Estate',
      description: 'Multi-family, retail, office, and industrial properties',
      icon: Building2,
      color: '#3b82f6',
      features: ['Investment Analysis', 'Portfolio Growth', 'Value-Add Opportunities', 'Large Transactions']
    },
    {
      id: 'financing',
      title: 'Real Estate Financing',
      description: 'Competitive rates and fast approvals for all property types',
      icon: DollarSign,
      color: '#10b981',
      features: ['Residential Loans', 'Commercial Loans', 'Fix & Flip', 'Bridge Loans']
    },
    {
      id: 'investment',
      title: 'Real Estate Investing',
      description: 'Build wealth through strategic real estate investments',
      icon: TrendingUp,
      color: '#8b5cf6',
      features: ['Fix & Flip', 'BRRRR Strategy', 'Buy & Hold', 'Syndications']
    },
    {
      id: 'property-search',
      title: 'Property Search',
      description: 'Find your perfect property with our extensive network',
      icon: Search,
      color: '#06b6d4',
      features: ['MLS Access', 'Off-Market Deals', 'Custom Searches', 'Market Intelligence']
    }
  ];

  const benefits = [
    'Licensed real estate professionals',
    'Access to multiple financing options',
    'Commercial and residential expertise',
    'Market analytics and valuations',
    'Investment property analysis',
    'Full-service transaction support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-blue-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-8 shadow-lg shadow-blue-500/30">
          <Home className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-6">
          Real Estate Services
        </h1>
        <p className="text-2xl text-blue-100/70 max-w-4xl mx-auto mb-8">
          Whether you're buying, selling, or investing in real estate, we provide comprehensive services and financing solutions to help you achieve your goals.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Card className="bg-emerald-500/10 border-emerald-500/50 backdrop-blur-xl">
            <CardContent className="px-6 py-3">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Licensed Professionals</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-500/10 border-blue-500/50 backdrop-blur-xl">
            <CardContent className="px-6 py-3">
              <div className="flex items-center gap-2 text-blue-300">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Commercial Specialists</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-500/10 border-yellow-500/50 backdrop-blur-xl">
            <CardContent className="px-6 py-3">
              <div className="flex items-center gap-2 text-yellow-300">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Investment Expertise</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Real Estate Services
          </h2>
          <p className="text-lg text-blue-100/70">
            Full-service real estate solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-slate-800/80 border-blue-500/30 hover:border-blue-500/60 backdrop-blur-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <CardHeader>
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}20`, color: service.color }}
                >
                  <service.icon size={28} />
                </div>
                <CardTitle className="text-white text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <Card className="bg-slate-800/80 border-blue-500/50 backdrop-blur-xl mb-16">
          <CardHeader>
            <CardTitle className="text-blue-100 text-3xl text-center">
              Why Choose Saint Vision Group?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                >
                  <CheckCircle size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financing Options */}
        <Card className="bg-gradient-to-r from-blue-500/20 to-slate-800/80 border-blue-500/50 backdrop-blur-xl mb-16">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need Financing?
              </h3>
              <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
                We offer competitive financing for all types of real estate transactions, from residential purchases to large commercial deals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-blue-500/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Residential Financing</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Primary residence mortgages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Investment property loans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Fix & flip financing (8.99%+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Refinancing options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-blue-500/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Commercial Financing</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Multi-family properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Office and retail spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Industrial properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Mixed-use developments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Card className="bg-gradient-to-r from-blue-500/20 to-slate-800/80 border-blue-500/50 backdrop-blur-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100/70 mb-8 max-w-3xl mx-auto">
              Whether you're buying, selling, or investing, our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/client-hub/lending/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold text-lg px-8 shadow-lg shadow-blue-500/30"
                >
                  <FileText size={20} className="mr-2" />
                  Start Application
                </Button>
              </Link>
              <a href="tel:+19498202108">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/30 text-blue-100 hover:bg-blue-500/10 text-lg px-8"
                >
                  📞 (949) 820-2108
                </Button>
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Available 7:00 AM - 8:00 PM Daily • Licensed Real Estate Professionals
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
