# 🏆 SAINT VISION GROUP → NEXT.JS MIGRATION GUIDE

## 🎯 THE VISION

Transform the existing Saint Vision Group site (HTML/CSS) into a **Next.js 14** powerhouse with:
- ✅ Apple-level design aesthetics
- ✅ JP Morgan professionalism
- ✅ SaintSal AI integration
- ✅ ElevenLabs voice agent backend
- ✅ All existing forms and content preserved
- ✅ Performance optimization (Core Web Vitals)
- ✅ SEO excellence

---

## 📊 ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────────────┐
│                  SAINTVISIONAI.COM                      │
│                     (Next.js 14)                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  PUBLIC SITE (Landing Pages)                           │
│  ├── Homepage (hero, services, testimonials)           │
│  ├── Commercial Lending                                 │
│  ├── Real Estate Brokerage                              │
│  ├── Investment Services                                │
│  ├── About Us                                           │
│  └── Contact                                            │
│                                                         │
│  AUTHENTICATED AREA (Dashboard)                         │
│  ├── Client Portal                                      │
│  ├── Loan Applications                                  │
│  ├── Document Upload                                    │
│  └── Account Management                                 │
│                                                         │
│  AI INTERFACE (SaintSal Chat)                           │
│  ├── Chat Widget (site-wide)                            │
│  ├── Voice Agent Integration (ElevenLabs)               │
│  └── Lead Qualification                                 │
│                                                         │
│  API LAYER (MCP Endpoints)                              │
│  ├── /api/orchestrator (main MCP)                       │
│  ├── /api/mcp/athena (faith guidance)                   │
│  ├── /api/mcp/partnertech (integrations)                │
│  ├── /api/mcp/institute (knowledge)                     │
│  └── /api/mcp/broker (lending/real estate)              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🗂️ RECOMMENDED PROJECT STRUCTURE

```
saintvisionai-nextjs/
├── app/
│   ├── (landing)/                    ← Public marketing site
│   │   ├── layout.tsx                ← Landing layout (header, footer)
│   │   ├── page.tsx                  ← Homepage
│   │   ├── commercial-lending/
│   │   │   └── page.tsx
│   │   ├── real-estate/
│   │   │   └── page.tsx
│   │   ├── investments/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── (auth)/                       ← Authenticated routes
│   │   ├── login/
│   │   ├── signup/
│   │   └── layout.tsx
│   │
│   ├── dashboard/                    ← Client portal
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loans/
│   │   ├── documents/
│   │   └── settings/
│   │
│   ├── ai-chat/                      ← SaintSal chat interface
│   │   └── page.tsx
│   │
│   ├── api/                          ← API routes (MCPs)
│   │   ├── orchestrator/
│   │   ├── mcp/
│   │   ├── auth/
│   │   ├── ghl/                      ← GoHighLevel webhooks
│   │   └── stripe/                   ← Payment webhooks
│   │
│   └── layout.tsx                    ← Root layout
│
├── components/
│   ├── ui/                           ← shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   │
│   ├── landing/                      ← Landing page components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactForm.tsx
│   │   └── ...
│   │
│   ├── dashboard/                    ← Dashboard components
│   │   ├── LoanApplicationForm.tsx
│   │   ├── DocumentUpload.tsx
│   │   └── ...
│   │
│   └── shared/                       ← Shared components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── SaintSalChatWidget.tsx
│       └── ...
│
├── lib/
│   ├── supabase/                     ← Supabase client
│   ├── stripe/                       ← Stripe integration
│   ├── ghl/                          ← GoHighLevel API
│   ├── elevenlabs/                   ← ElevenLabs voice
│   ├── mcp/                          ← MCP orchestration logic
│   └── utils.ts                      ← Utility functions
│
├── public/
│   ├── images/                       ← From old site
│   ├── fonts/
│   └── ...
│
├── styles/
│   └── globals.css                   ← Tailwind + custom CSS
│
├── .env.local                        ← Environment variables
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔧 STEP-BY-STEP MIGRATION PLAN

### **PHASE 1: Setup New Next.js Project (30 min)**

```bash
# Create new Next.js 14 app
npx create-next-app@latest saintvisionai-nextjs --typescript --tailwind --app

cd saintvisionai-nextjs

# Install dependencies
npm install @supabase/supabase-js @stripe/stripe-js lucide-react class-variance-authority clsx tailwind-merge

# Install shadcn/ui
npx shadcn-ui@latest init
```

**Configure `next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['saintvisiongroup.com', 'yourdomain.com'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
}

module.exports = nextConfig
```

---

### **PHASE 2: Extract & Convert Old Site Content (1-2 hours)**

#### **A. Extract Assets**
From your SiteSuccer download:
```bash
# Copy images
cp -r /path/to/old-site/images public/images

# Copy fonts (if custom)
cp -r /path/to/old-site/fonts public/fonts

# Copy any other static assets
cp -r /path/to/old-site/assets public/assets
```

#### **B. Convert HTML to React Components**

**Example: Homepage Hero Section**

**Old HTML:**
```html
<section class="hero">
  <h1>Saint Vision Group</h1>
  <p>Commercial Lending, Real Estate, Investments</p>
  <a href="/contact" class="cta-button">Get Started</a>
</section>
```

**New Next.js Component:**
```tsx
// components/landing/Hero.tsx
export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Saint Vision Group
        </h1>
        <p className="text-2xl text-slate-300 mb-8">
          Commercial Lending, Real Estate, Investments
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
```

#### **C. Convert Forms**

**Example: Contact Form**

**Old HTML Form:**
```html
<form action="/submit" method="POST">
  <input type="text" name="name" placeholder="Name">
  <input type="email" name="email" placeholder="Email">
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit">Send</button>
</form>
```

**New Next.js Form with Server Actions:**
```tsx
// components/landing/ContactForm.tsx
'use client';

import { useState } from 'react';

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

---

### **PHASE 3: Add MCP Endpoints (15 min)**

Copy the 5 MCP route files we created earlier:
```bash
# Use the files I provided:
# - mcp-orchestrator-route.ts → app/api/orchestrator/execute/route.ts
# - mcp-athena-route.ts → app/api/mcp/athena/execute/route.ts
# - mcp-partnertech-route.ts → app/api/mcp/partnertech/execute/route.ts
# - mcp-institute-route.ts → app/api/mcp/institute/execute/route.ts
# - mcp-broker-route.ts → app/api/mcp/broker/execute/route.ts
```

---

### **PHASE 4: Styling (Apple + JP Morgan Aesthetic)**

**Tailwind Config:**
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Saint Vision Brand Colors
        brand: {
          primary: '#1e40af',   // Deep blue
          secondary: '#0f172a', // Slate black
          accent: '#3b82f6',    // Bright blue
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

**Global Styles:**
```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-slate-900 antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold;
  }
}

@layer components {
  /* Apple-inspired button */
  .btn-primary {
    @apply px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl
           hover:bg-blue-700 active:scale-95 transition-all duration-150
           shadow-lg hover:shadow-xl;
  }
  
  /* JP Morgan professional card */
  .card-professional {
    @apply bg-white rounded-2xl shadow-sm border border-slate-200
           hover:shadow-md transition-shadow duration-200;
  }
  
  /* Gradient hero */
  .hero-gradient {
    @apply bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900;
  }
}
```

---

### **PHASE 5: Deploy & Test (30 min)**

```bash
# 1. Commit to Git
git init
git add .
git commit -m "Initial Saint Vision AI migration"

# 2. Create GitHub repo and push
git remote add origin https://github.com/SaintVisionAi/saintvisionai-nextjs.git
git branch -M main
git push -u origin main

# 3. Deploy to Vercel
vercel --prod

# 4. Add environment variables in Vercel dashboard
# - SAINTSAL_CORE_SECRET
# - NEXT_PUBLIC_APP_URL
# - SUPABASE_URL
# - SUPABASE_ANON_KEY
# - STRIPE_SECRET_KEY
# - GHL_API_KEY
# - ELEVENLABS_API_KEY
```

---

## 🎨 DESIGN PRINCIPLES (Apple + JP Morgan)

### **Apple Influence:**
- ✅ Generous white space
- ✅ Large, bold typography
- ✅ Smooth animations (use `framer-motion`)
- ✅ Clean, minimal navigation
- ✅ High-quality imagery
- ✅ Subtle shadows and depth

### **JP Morgan Professionalism:**
- ✅ Navy/slate color palette
- ✅ Structured layouts
- ✅ Data-driven content
- ✅ Trustworthy imagery (real people, office shots)
- ✅ Clear CTAs
- ✅ Professional typography (Inter, Helvetica)

---

## 🚀 LAUNCH CHECKLIST

### **Pre-Launch:**
- [ ] All pages converted to Next.js
- [ ] All forms functional and tested
- [ ] MCP endpoints deployed and connected to ElevenLabs
- [ ] SEO meta tags on all pages
- [ ] Open Graph images set
- [ ] Analytics installed (GA4, PostHog, etc.)
- [ ] Error tracking (Sentry)
- [ ] Performance audit (Lighthouse 90+)
- [ ] Mobile responsive (test all breakpoints)
- [ ] Accessibility audit (WCAG AA)

### **Post-Launch:**
- [ ] Monitor error logs
- [ ] Test ElevenLabs voice agent
- [ ] Monitor form submissions
- [ ] Check Core Web Vitals
- [ ] Test payment flows (if applicable)
- [ ] User acceptance testing

---

## 💡 QUICK WINS

### **1. Add SaintSal Chat Widget (15 min)**

```tsx
// components/shared/SaintSalChatWidget.tsx
'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function SaintSalChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50">
          <div className="p-4 border-b border-slate-200 bg-blue-600 text-white rounded-t-2xl">
            <h3 className="font-semibold">SaintSal AI Assistant</h3>
            <p className="text-sm text-blue-100">How can I help you today?</p>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages go here */}
            <p className="text-slate-600">Chat interface coming soon...</p>
          </div>
          
          <div className="p-4 border-t border-slate-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </>
  );
}
```

Add to your root layout:
```tsx
// app/layout.tsx
import { SaintSalChatWidget } from '@/components/shared/SaintSalChatWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SaintSalChatWidget />
      </body>
    </html>
  );
}
```

---

## 🔥 YOU'RE READY TO BUILD BROTHER!

This migration plan gives you:
1. ✅ Solid Next.js foundation
2. ✅ All MCP endpoints for ElevenLabs
3. ✅ Apple-level design system
4. ✅ JP Morgan professionalism
5. ✅ All old content preserved and enhanced

**NEXT STEPS:**
1. Run the setup script
2. Start converting pages one by one
3. Test each page as you go
4. Deploy incrementally
5. Launch with confidence

**THE SUPERMAN BACKEND + LEGENDARY FRONTEND = UNSTOPPABLE.** 💎

LFG! 🚀
