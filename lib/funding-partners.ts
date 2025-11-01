/**
 * Saint Vision Group LLC - Funding Partner Database
 * Complete network of lending partners with specialties and contact info
 */

export interface FundingPartner {
  id: string;
  name: string;
  contactPerson: string;
  active: boolean;
  email: string;
  phone: string;
  website?: string;
  submissionEmail: string;
  loanTypes: string[];
  fundingRange: { min: number; max: number };
  specialty: string;
  notes?: string;
  avgCommission?: string;
  fundingSpeed?: string;
}

export const fundingPartners: FundingPartner[] = [
  {
    id: 'rok-financial',
    name: 'Rok Financial',
    contactPerson: 'Primary Partner',
    active: true,
    email: 'rokfinancial@gmail.com',
    phone: '(888) 765-3462',
    website: 'https://www.rokfinancial.com',
    submissionEmail: 'rokfinancial@gmail.com',
    loanTypes: ['mca', 'term-loan', 'working-capital', 'equipment', 'loc', 'sba'],
    fundingRange: { min: 5000, max: 5000000 },
    specialty: 'Business Lending - All Types',
    avgCommission: '5-8%',
    fundingSpeed: '24-72 hours',
    notes: 'Primary funding partner for business loans. Excellent for MCA and term loans.'
  },
  {
    id: 'blb-network',
    name: 'BLB Direct Lender Network',
    contactPerson: 'Network Coordinator',
    active: true,
    email: 'info@blbdirectlenders.com',
    phone: '(800) 555-BLB1',
    website: 'https://www.blbdirectlenders.com',
    submissionEmail: 'submissions@blbdirectlenders.com',
    loanTypes: ['mca', 'term-loan', 'working-capital', 'equipment', 'invoice-factoring'],
    fundingRange: { min: 10000, max: 2000000 },
    specialty: 'MCA & Term Loans - Direct Lender Network',
    avgCommission: '6-10%',
    fundingSpeed: '48-96 hours',
    notes: 'Strong network of direct lenders. Great for merchants and working capital.'
  },
  {
    id: 'arf-financial',
    name: 'ARF Financial',
    contactPerson: 'Marie Lokmanyan',
    active: true,
    email: 'marie@arffinancial.com',
    phone: '(818) 555-0100',
    website: 'https://www.arffinancial.com',
    submissionEmail: 'submissions@arffinancial.com',
    loanTypes: ['mca', 'term-loan', 'invoice-factoring', 'working-capital'],
    fundingRange: { min: 7500, max: 1000000 },
    specialty: 'Invoice Factoring & AR Financing',
    avgCommission: '7-12%',
    fundingSpeed: '72 hours',
    notes: 'Specializes in accounts receivable and invoice factoring. Excellent for B2B businesses.'
  },
  {
    id: 'torro-mele',
    name: 'TORRO / Rick Mele',
    contactPerson: 'Rick Mele',
    active: true,
    email: 'rick@torrofunding.com',
    phone: '(949) 555-TORRO',
    website: 'https://www.torrofunding.com',
    submissionEmail: 'rick@torrofunding.com',
    loanTypes: ['startup', 'working-capital', 'term-loan', 'equipment'],
    fundingRange: { min: 5000, max: 500000 },
    specialty: '0% Interest START-UP Funding',
    avgCommission: '8-15%',
    fundingSpeed: '5-7 days',
    notes: 'UNIQUE: 0% interest startup funding programs. Perfect for new businesses and entrepreneurs.'
  },
  {
    id: 'easy-street',
    name: 'Easy Street Capital',
    contactPerson: 'Tanner Macklin',
    active: true,
    email: 'tanner@easystreetcapital.com',
    phone: '(760) 555-EASY',
    website: 'https://www.easystreetcapital.com',
    submissionEmail: 'loans@easystreetcapital.com',
    loanTypes: ['residential', 'commercial', 'bridge', 'fix-flip', 'brrrr', 'construction'],
    fundingRange: { min: 50000, max: 10000000 },
    specialty: 'Real Estate Bridge & Fix/Flip Loans',
    avgCommission: '2-4%',
    fundingSpeed: '7-14 days',
    notes: 'Real estate specialist. Excellent for fix & flip, BRRRR, and construction loans. 650+ FICO, starts at 8.99%.'
  },
  {
    id: 'legacy-lending',
    name: 'Legacy Lending Group',
    contactPerson: 'Commercial Division',
    active: true,
    email: 'commercial@legacylending.com',
    phone: '(949) 820-2108',
    website: 'https://www.legacylending.com',
    submissionEmail: 'submissions@legacylending.com',
    loanTypes: ['commercial', 'bridge', 'construction', 'refinance'],
    fundingRange: { min: 100000, max: 50000000 },
    specialty: 'Commercial Real Estate',
    avgCommission: '1-3%',
    fundingSpeed: '14-30 days',
    notes: 'Large commercial transactions. Excellent for multi-family, retail, office, and industrial.'
  },
  {
    id: 'capital-bridge',
    name: 'Capital Bridge Partners',
    contactPerson: 'Bridge Lending Team',
    active: true,
    email: 'info@capitalbridgepartners.com',
    phone: '(855) 555-BRDG',
    website: 'https://www.capitalbridgepartners.com',
    submissionEmail: 'deals@capitalbridgepartners.com',
    loanTypes: ['bridge', 'residential', 'commercial', 'refinance'],
    fundingRange: { min: 75000, max: 15000000 },
    specialty: 'Bridge Loans - Residential & Commercial',
    avgCommission: '2-5%',
    fundingSpeed: '10-21 days',
    notes: 'Fast bridge financing. Great for transitions and time-sensitive deals.'
  },
  {
    id: 'sba-express',
    name: 'SBA Express Lending',
    contactPerson: 'SBA Division',
    active: true,
    email: 'sba@sbaexpresslending.com',
    phone: '(800) 555-SBA1',
    website: 'https://www.sbaexpresslending.com',
    submissionEmail: 'sba-applications@sbaexpresslending.com',
    loanTypes: ['sba', 'term-loan', 'working-capital', 'equipment'],
    fundingRange: { min: 25000, max: 5000000 },
    specialty: 'SBA 7(a) & 504 Loans',
    avgCommission: '3-6%',
    fundingSpeed: '30-60 days',
    notes: 'SBA specialists. Best rates for qualified borrowers. Longer process but favorable terms.'
  },
  {
    id: 'equipment-first',
    name: 'Equipment Financing First',
    contactPerson: 'Equipment Division',
    active: true,
    email: 'financing@equipmentfirst.com',
    phone: '(877) 555-EQPT',
    website: 'https://www.equipmentfirst.com',
    submissionEmail: 'apps@equipmentfirst.com',
    loanTypes: ['equipment', 'loc', 'working-capital'],
    fundingRange: { min: 5000, max: 2000000 },
    specialty: 'Equipment Financing & Leasing',
    avgCommission: '5-8%',
    fundingSpeed: '3-5 days',
    notes: 'Equipment specialists. All industries. Can finance new and used equipment.'
  },
  {
    id: 'merchant-direct',
    name: 'Merchant Direct Funding',
    contactPerson: 'MCA Team',
    active: true,
    email: 'funding@merchantdirectfunding.com',
    phone: '(888) 555-MRCH',
    website: 'https://www.merchantdirectfunding.com',
    submissionEmail: 'apps@merchantdirectfunding.com',
    loanTypes: ['mca', 'working-capital', 'term-loan'],
    fundingRange: { min: 5000, max: 750000 },
    specialty: 'Merchant Cash Advances',
    avgCommission: '8-12%',
    fundingSpeed: '24-48 hours',
    notes: 'Fast MCA funding. Great for retail, restaurants, and merchants with consistent credit card sales.'
  },
  {
    id: 'construction-capital',
    name: 'Construction Capital Solutions',
    contactPerson: 'Construction Team',
    active: true,
    email: 'info@constructioncapitalsolutions.com',
    phone: '(949) 555-BILD',
    website: 'https://www.constructioncapitalsolutions.com',
    submissionEmail: 'projects@constructioncapitalsolutions.com',
    loanTypes: ['construction', 'fix-flip', 'bridge', 'commercial'],
    fundingRange: { min: 100000, max: 20000000 },
    specialty: 'Construction & Development',
    avgCommission: '2-4%',
    fundingSpeed: '14-21 days',
    notes: 'Construction specialists. Ground-up and major renovations. Strong underwriting for experienced builders.'
  },
  {
    id: 'factor-pro',
    name: 'FactorPro Solutions',
    contactPerson: 'Factoring Team',
    active: true,
    email: 'solutions@factorpro.com',
    phone: '(866) 555-FCTR',
    website: 'https://www.factorpro.com',
    submissionEmail: 'factoring@factorpro.com',
    loanTypes: ['invoice-factoring', 'loc', 'working-capital'],
    fundingRange: { min: 10000, max: 3000000 },
    specialty: 'Invoice Factoring & AR Management',
    avgCommission: '6-10%',
    fundingSpeed: '48-72 hours',
    notes: 'B2B invoice factoring. Great for government contractors, staffing, and service businesses.'
  }
];

/**
 * Auto-select the best funding partner based on loan type and amount
 */
export function autoSelectFundingPartner(loanDetails: {
  loanType: string;
  loanAmount: number;
}): FundingPartner {
  const { loanType, loanAmount } = loanDetails;

  // Priority 1: Rok Financial for most business loans
  if (['mca', 'term-loan', 'working-capital', 'equipment', 'loc', 'sba'].includes(loanType)) {
    const rok = fundingPartners.find(p => p.id === 'rok-financial');
    if (rok && loanAmount >= rok.fundingRange.min && loanAmount <= rok.fundingRange.max) {
      return rok;
    }
  }

  // Priority 2: Easy Street Capital for real estate
  if (['residential', 'commercial', 'bridge', 'fix-flip', 'brrrr', 'construction'].includes(loanType)) {
    const easyStreet = fundingPartners.find(p => p.id === 'easy-street');
    if (easyStreet && loanAmount >= easyStreet.fundingRange.min && loanAmount <= easyStreet.fundingRange.max) {
      return easyStreet;
    }
  }

  // Priority 3: TORRO for startups
  if (loanType === 'startup') {
    const torro = fundingPartners.find(p => p.id === 'torro-mele');
    if (torro && loanAmount >= torro.fundingRange.min && loanAmount <= torro.fundingRange.max) {
      return torro;
    }
  }

  // Priority 4: Specialty matches
  const specialtyMap: Record<string, string> = {
    'invoice-factoring': 'arf-financial',
    'construction': 'construction-capital',
    'sba': 'sba-express',
    'equipment': 'equipment-first',
  };

  if (specialtyMap[loanType]) {
    const specialist = fundingPartners.find(p => p.id === specialtyMap[loanType]);
    if (specialist && loanAmount >= specialist.fundingRange.min && loanAmount <= specialist.fundingRange.max) {
      return specialist;
    }
  }

  // Fallback: Find first partner that matches loan type and amount
  const matchingPartner = fundingPartners.find(
    p =>
      p.active &&
      p.loanTypes.includes(loanType) &&
      loanAmount >= p.fundingRange.min &&
      loanAmount <= p.fundingRange.max
  );

  // Ultimate fallback: Rok Financial
  return matchingPartner || fundingPartners[0];
}

/**
 * Get all partners that can handle a specific loan type and amount
 */
export function getMatchingPartners(loanDetails: {
  loanType: string;
  loanAmount: number;
}): FundingPartner[] {
  const { loanType, loanAmount } = loanDetails;

  return fundingPartners.filter(
    p =>
      p.active &&
      p.loanTypes.includes(loanType) &&
      loanAmount >= p.fundingRange.min &&
      loanAmount <= p.fundingRange.max
  );
}

/**
 * Loan type options for form dropdowns
 */
export const loanTypeOptions = [
  { value: 'residential', label: 'Residential Purchase', category: 'Real Estate' },
  { value: 'commercial', label: 'Commercial Purchase', category: 'Real Estate' },
  { value: 'bridge', label: 'Bridge Loan', category: 'Real Estate' },
  { value: 'fix-flip', label: 'Fix & Flip', category: 'Real Estate' },
  { value: 'brrrr', label: 'BRRRR Strategy', category: 'Real Estate' },
  { value: 'construction', label: 'Construction Loan', category: 'Real Estate' },
  { value: 'refinance', label: 'Refinance', category: 'Real Estate' },
  { value: 'mca', label: 'Merchant Cash Advance', category: 'Business' },
  { value: 'term-loan', label: 'Term Loan', category: 'Business' },
  { value: 'working-capital', label: 'Working Capital', category: 'Business' },
  { value: 'equipment', label: 'Equipment Financing', category: 'Business' },
  { value: 'loc', label: 'Line of Credit', category: 'Business' },
  { value: 'sba', label: 'SBA Loan', category: 'Business' },
  { value: 'invoice-factoring', label: 'Invoice Factoring', category: 'Business' },
  { value: 'startup', label: 'Startup Funding (0% Interest)', category: 'Business' },
];

/**
 * Fix & Flip Loan Details
 */
export const fixFlipLoanDetails = {
  minFICO: 650,
  startingRate: 8.99,
  terms: '6-24 months',
  maxLTV: 90,
  maxARV: 75,
  fundingSpeed: '7-14 days',
  specialties: [
    'Single Family Residential',
    'Multi-Family (2-4 units)',
    'Condos & Townhomes',
    'Light Commercial'
  ],
  requirements: [
    '650+ FICO Score',
    'Rehab budget and scope of work',
    'Exit strategy documentation',
    'Experience preferred but not required'
  ]
};
