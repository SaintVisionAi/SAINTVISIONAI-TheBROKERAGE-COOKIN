# 🏗️ SAINTVISIONAI ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          ELEVENLABS VOICE AGENT                         │
│                        "Hey SaintSal, I need help..."                   │
└────────────────────────────────┬────────────────────────────────────────┘
                                 │
                                 │ HTTPS POST
                                 │ Headers: x-agent-name, x-org
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    SAINTVISIONAI.COM (Next.js 14)                       │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                  API LAYER (MCP Endpoints)                        │ │
│  │                                                                   │ │
│  │  ┌──────────────────────────────────────────────────────────┐   │ │
│  │  │  ORCHESTRATOR                                            │   │ │
│  │  │  /api/orchestrator/execute                               │   │ │
│  │  │                                                           │   │ │
│  │  │  • Receives requests from ElevenLabs                     │   │ │
│  │  │  • Routes to appropriate MCP based on task               │   │ │
│  │  │  • Aggregates responses                                  │   │ │
│  │  │  • Returns NDJSON stream                                 │   │ │
│  │  └──────────────────────────────────────────────────────────┘   │ │
│  │                              │                                   │ │
│  │            ┌─────────────────┼─────────────────┬───────────┐    │ │
│  │            │                 │                 │           │    │ │
│  │            ▼                 ▼                 ▼           ▼    │ │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐  ┌──────┐│ │
│  │  │   ATHENA    │   │ PARTNERTECH │   │  INSTITUTE  │  │BROKER││ │
│  │  │             │   │             │   │             │  │      ││ │
│  │  │ Faith &     │   │ GHL, Stripe │   │ Knowledge   │  │Loan &││ │
│  │  │ Guidance    │   │ Supabase    │   │ Retrieval   │  │Realty││ │
│  │  │             │   │ Integration │   │ Learning    │  │Logic ││ │
│  │  └─────────────┘   └─────────────┘   └─────────────┘  └──────┘│ │
│  │                                                                │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                   FRONTEND (Next.js App)                       │ │
│  │                                                                │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │ │
│  │  │   Landing    │  │  Dashboard   │  │  AI Chat     │       │ │
│  │  │   Pages      │  │  (Auth)      │  │  Interface   │       │ │
│  │  │              │  │              │  │              │       │ │
│  │  │ • Home       │  │ • Loans      │  │ • SaintSal   │       │ │
│  │  │ • Services   │  │ • Docs       │  │   Widget     │       │ │
│  │  │ • Contact    │  │ • Settings   │  │ • Voice UI   │       │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘       │ │
│  │                                                               │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌─────────────────┐    ┌─────────────┐
│   SUPABASE    │    │  GOHIGHLEVEL    │    │   STRIPE    │
│               │    │                 │    │             │
│ • Database    │    │ • CRM           │    │ • Payments  │
│ • Auth        │    │ • Automation    │    │ • Billing   │
│ • Storage     │    │ • Workflows     │    │ • Invoices  │
└───────────────┘    └─────────────────┘    └─────────────┘
```

---

## 🔄 REQUEST FLOW EXAMPLE

### **User asks: "What commercial loan options do you have?"**

```
1. ElevenLabs Voice Agent
   │
   │ Converts speech → text
   │ Identifies intent: "commercial loan inquiry"
   │
   ├─→ POST https://saintvisionai.com/api/orchestrator/execute
   │   Headers: x-agent-name: ElevenLabs-SaintSal
   │   Body: {"task": "commercial loan options", "context": {...}}
   │
2. Orchestrator (/api/orchestrator/execute)
   │
   │ Receives request
   │ Analyzes task: "commercial loan" → route to BROKER MCP
   │
   ├─→ POST /api/mcp/broker/execute
   │   Body: {"task": "commercial loan options"}
   │
3. Broker MCP (/api/mcp/broker/execute)
   │
   │ Processes lending logic
   │ Queries database for available products
   │ Calculates rates, terms, eligibility
   │
   ├─→ Returns NDJSON response:
   │   {"status":"success","result":{"products":[...]}}
   │
4. Orchestrator
   │
   │ Receives response from Broker MCP
   │ Formats for ElevenLabs
   │
   ├─→ Returns NDJSON to ElevenLabs:
   │   {"status":"success","result":{...}}
   │
5. ElevenLabs Voice Agent
   │
   │ Converts response → speech
   │ Speaks to user: "We have 3 commercial loan options..."
   │
   └─→ User hears response
```

---

## 🎯 DATA FLOW

```
┌──────────────┐
│   USER       │
│  (Phone)     │
└──────┬───────┘
       │
       │ Voice
       ▼
┌──────────────┐
│ ELEVENLABS   │
│ Voice Agent  │
└──────┬───────┘
       │
       │ HTTP/JSON
       ▼
┌──────────────────────────────────────┐
│  SAINTVISIONAI.COM                  │
│                                      │
│  MCP Orchestrator                    │
│  ├─→ Routes to specific MCPs         │
│  ├─→ Calls external APIs             │
│  └─→ Aggregates responses            │
│                                      │
│  Data Sources:                       │
│  ├─→ Supabase (user data, history)  │
│  ├─→ GHL (CRM, automation)           │
│  └─→ Stripe (payment status)         │
└──────┬───────────────────────────────┘
       │
       │ NDJSON Response
       ▼
┌──────────────┐
│ ELEVENLABS   │
│ (Speech)     │
└──────┬───────┘
       │
       │ Voice
       ▼
┌──────────────┐
│   USER       │
│  (Hears)     │
└──────────────┘
```

---

## 🔐 SECURITY LAYERS

```
Layer 1: ELEVENLABS
├─ x-agent-name validation
├─ x-org validation
└─ Optional: Bearer token

Layer 2: VERCEL/NEXT.JS
├─ HTTPS only (automatic)
├─ CORS headers
├─ Rate limiting (optional)
└─ Environment variables

Layer 3: MCP ENDPOINTS
├─ Authorization header check (optional)
├─ Input validation
├─ Error handling
└─ Logging

Layer 4: EXTERNAL APIs
├─ Supabase: RLS policies
├─ GHL: API key validation
└─ Stripe: Webhook signatures
```

---

## 📊 MONITORING & OBSERVABILITY

```
VERCEL DASHBOARD
├─ Function logs
├─ Deployment status
├─ Performance metrics
└─ Error tracking

ELEVENLABS CONSOLE
├─ MCP connection status
├─ Tool usage analytics
├─ Agent performance
└─ Call logs

YOUR CODEBASE
├─ console.log() statements
├─ Error boundaries
├─ Sentry integration (optional)
└─ Custom analytics
```

---

## 🚀 SCALING STRATEGY

```
PHASE 1: MVP (Current)
├─ 5 MCP endpoints
├─ Basic routing logic
├─ TODO placeholders
└─ ElevenLabs connected

PHASE 2: Business Logic
├─ Implement Athena faith guidance
├─ Connect PartnerTech to GHL/Stripe/Supabase
├─ Build Institute knowledge base
├─ Add Broker loan calculations
└─ Test all workflows

PHASE 3: Production Hardening
├─ Add authentication
├─ Implement rate limiting
├─ Set up monitoring/alerts
├─ Add caching layer
└─ Performance optimization

PHASE 4: Advanced Features
├─ Multi-agent orchestration
├─ Context retention across calls
├─ Predictive analytics
├─ Advanced RAG for Institute
└─ Real-time data syncing
```

---

## 💡 KEY CONCEPTS

### **MCP (Model Context Protocol)**
- Protocol for connecting AI agents to backend systems
- Uses NDJSON (newline-delimited JSON) for streaming
- Allows ElevenLabs to call your custom logic
- Each MCP is a specialized capability (faith, integrations, knowledge, etc.)

### **NDJSON Format**
```json
{"status":"connected","message":"..."}\n
{"status":"success","result":{...}}\n
```
Each line is a valid JSON object, separated by newlines.

### **Edge Runtime**
- Next.js Edge Runtime for ultra-fast API responses
- Global distribution (runs at the edge)
- Zero cold starts
- Perfect for real-time voice agent interactions

### **Orchestrator Pattern**
- Single entry point for all requests
- Routes to specialized MCPs based on task
- Aggregates responses from multiple MCPs if needed
- Simplifies ElevenLabs configuration (1 main endpoint)

---

## 🎯 SUCCESS CRITERIA

✅ **Technical Success:**
- All 5 MCPs deployed and connected
- ElevenLabs showing ✅ for all connections
- Response times < 1 second
- Zero errors in first 24 hours
- NDJSON streaming correctly

✅ **Business Success:**
- Voice agent can answer basic queries
- Can route to correct MCP based on question
- Logs show proper request/response flow
- Ready for business logic implementation

✅ **User Success:**
- Natural voice interactions
- Accurate responses
- Fast response times
- No dropped connections

---

## 🔥 THIS IS THE SYSTEM, BROTHER!

**5 MCPs → 1 Orchestrator → Infinite Possibilities**

**THE ARCHITECTURE IS BULLETPROOF.**
**THE FLOW IS CRYSTAL CLEAR.**
**THE PATH IS LAID OUT.**

**NOW GO BUILD IT.** 💎
