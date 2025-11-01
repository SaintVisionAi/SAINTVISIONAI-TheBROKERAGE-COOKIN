'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  DollarSign,
  Home,
  Building2,
  Wrench,
  TrendingUp,
  FileText,
  CreditCard,
  Package,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Clock,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function LendingServicesPage() {
  const router = useRouter();

  const loanTypes = [
    {
      id: 'commercial',
      title: 'Commercial Real Estate',
      description: 'Multi-family, retail, office, and industrial property financing',
      icon: Building2,
      color: '#3b82f6',
      range: '$100K - $50M+',
      rate: 'Starting 6.5%',
      term: '5-30 years',
      highlights: ['Our Specialty', 'Fast Approval', 'Large Transactions']
    },
    {
      id: 'fix-flip',
      title: 'Fix & Flip Loans',
      description: 'Short-term financing for property renovation and resale',
      icon: Home,
      color: '#10b981',
      range: '$50K - $5M',
      rate: 'Starting 8.99%',
      term: '6-24 months',
      highlights: ['650+ FICO', '90% LTV', 'Quick Funding']
    },
    {
      id: 'bridge',
      title: 'Bridge Loans',
      description: 'Fast transitional financing for time-sensitive opportunities',
      icon: TrendingUp,
      color: '#f59e0b',
      range: '$75K - $15M',
      rate: 'Starting 7.5%',
      term: '6-36 months',
      highlights: ['7-14 Days', 'Flexible Terms', 'No Prepayment Penalty']
    },
    {
      id: 'construction',
      title: 'Construction Loans',
      description: 'Ground-up construction and major renovation financing',
      icon: Wrench,
      color: '#8b5cf6',
      range: '$100K - $20M',
      rate: 'Starting 7.99%',
      term: '12-36 months',
      highlights: ['Draw Schedule', 'Experienced Builders', 'Interest Reserve']
    },
    {
      id: 'residential',
      title: 'Residential Purchase',
      description: 'Primary residence and investment property mortgages',
      icon: Home,
      color: '#ec4899',
      range: '$50K - $10M',
      rate: 'Starting 6.25%',
      term: '15-30 years',
      highlights: ['Conventional', 'Jumbo', 'Investment Properties']
    },
    {
      id: 'mca',
      title: 'Merchant Cash Advance',
      description: 'Fast working capital based on credit card sales',
      icon: CreditCard,
      color: '#14b8a6',
      range: '$5K - $750K',
      rate: 'Factor Rate',
      term: '3-18 months',
      highlights: ['24-48 Hours', 'No Collateral', 'Flexible Repayment']
    },
    {
      id: 'term-loan',
      title: 'Business Term Loans',
      description: 'Fixed-rate financing for business growth and expansion',
      icon: Briefcase,
      color: '#f97316',
      range: '$5K - $5M',
      rate: 'Starting 5.5%',
      term: '1-10 years',
      highlights: ['Fixed Payments', 'Growth Capital', 'Multiple Uses']
    },
    {
      id: 'equipment',
      title: 'Equipment Financing',
      description: 'Finance new and used equipment for any industry',
      icon: Package,
      color: '#06b6d4',
      range: '$5K - $2M',
      rate: 'Starting 4.99%',
      term: '2-7 years',
      highlights: ['100% Financing', 'Tax Benefits', '3-5 Day Approval']
    },
    {
      id: 'sba',
      title: 'SBA Loans',
      description: 'Government-backed financing with favorable terms',
      icon: Award,
      color: '#6366f1',
      range: '$25K - $5M',
      rate: 'Starting 4.5%',
      term: '10-25 years',
      highlights: ['Lowest Rates', 'Long Terms', 'SBA 7(a) & 504']
    },
    {
      id: 'working-capital',
      title: 'Working Capital',
      description: 'Short-term financing for operational expenses',
      icon: DollarSign,
      color: '#84cc16',
      range: '$5K - $1M',
      rate: 'Starting 6.5%',
      term: '3-24 months',
      highlights: ['Fast Funding', 'Flexible Use', 'Revenue Based']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-yellow-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/client-hub">
            <Button
              variant="outline"
              className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Client Hub
            </Button>
          </Link>
          <Link href="/client-hub/lending/apply">
            <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold shadow-lg shadow-yellow-500/30">
              Apply Now
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl mb-8 shadow-lg shadow-yellow-500/30">
          <DollarSign className="w-12 h-12 text-black" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-6">
          Lending Solutions
        </h1>
        <p className="text-2xl text-yellow-100/70 max-w-4xl mx-auto mb-8">
          From commercial real estate to business financing, we connect you with the right funding partner for your specific needs. <span className="text-yellow-400 font-semibold">Commercial lending is our specialty.</span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Card className="bg-emerald-500/10 border-emerald-500/50 backdrop-blur-xl">
            <CardContent className="px-6 py-3">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">12 Funding Partners</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-500/10 border-blue-500/50 backdrop-blur-xl">
            <CardContent className="px-6 py-3">
              <div className="flex items-center gap-2 text-blue-300">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24-Hour Response</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-500/10 border-yellow-500/50 backdrop-blur-xl">
            <CardContent className="px-6 py-3">
              <div className="flex items-center gap-2 text-yellow-300">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Commercial Specialists</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Loan Types Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Loan Type
          </h2>
          <p className="text-lg text-yellow-100/70">
            Select the financing solution that matches your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan) => (
            <Card
              key={loan.id}
              className="bg-slate-800/80 border-yellow-500/30 hover:border-yellow-500/60 backdrop-blur-xl transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer group"
              onClick={() => router.push('/client-hub/lending/apply')}
            >
              <CardHeader>
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${loan.color}20`, color: loan.color }}
                >
                  <loan.icon size={28} />
                </div>
                <CardTitle className="text-white text-xl group-hover:text-yellow-300 transition-colors">
                  {loan.title}
                </CardTitle>
                <CardDescription className="text-slate-300 text-sm leading-relaxed">
                  {loan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Amount:</span>
                    <span className="text-white font-semibold">{loan.range}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Rate:</span>
                    <span className="text-emerald-400 font-semibold">{loan.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Term:</span>
                    <span className="text-white font-semibold">{loan.term}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {loan.highlights.map((highlight, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-yellow-500/30 text-yellow-300 text-xs"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold"
                  onClick={() => router.push('/client-hub/lending/apply')}
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Card className="bg-gradient-to-r from-yellow-500/20 to-slate-800/80 border-yellow-500/50 backdrop-blur-xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-yellow-100/70 mb-8 max-w-3xl mx-auto">
              Complete our comprehensive application or speak with a funding specialist to discuss your financing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/client-hub/lending/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold text-lg px-8 shadow-lg shadow-yellow-500/30"
                >
                  <FileText size={20} className="mr-2" />
                  Complete Application
                </Button>
              </Link>
              <a href="tel:+19498202108">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10 text-lg px-8"
                >
                  📞 (949) 820-2108
                </Button>
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Available 7:00 AM - 8:00 PM Daily • Expert Funding Specialists Standing By
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
