# 🚀 SAINTVISIONAI MCP DEPLOYMENT GUIDE

## 🎯 OVERVIEW

This guide will help you deploy the SaintSal MCP (Model Context Protocol) servers for ElevenLabs integration.

---

## 📁 FILE STRUCTURE

Place these files in your Next.js project:

```
your-nextjs-project/
├── app/
│   ├── api/
│   │   ├── orchestrator/
│   │   │   └── execute/
│   │   │       └── route.ts  ← Main orchestrator
│   │   └── mcp/
│   │       ├── athena/
│   │       │   └── execute/
│   │       │       └── route.ts
│   │       ├── partnertech/
│   │       │   └── execute/
│   │       │       └── route.ts
│   │       ├── institute/
│   │       │   └── execute/
│   │       │       └── route.ts
│   │       └── broker/
│   │           └── execute/
│   │               └── route.ts
```

---

## 🔧 STEP 1: ADD FILES TO YOUR PROJECT

### Option A: Manual Copy

1. Copy each `.ts` file I provided into the corresponding folder
2. Create the folder structure if it doesn't exist

### Option B: Use CLI

```bash
# From your project root
mkdir -p app/api/orchestrator/execute
mkdir -p app/api/mcp/athena/execute
mkdir -p app/api/mcp/partnertech/execute
mkdir -p app/api/mcp/institute/execute
mkdir -p app/api/mcp/broker/execute

# Copy the files (adjust paths as needed)
cp mcp-orchestrator-route.ts app/api/orchestrator/execute/route.ts
cp mcp-athena-route.ts app/api/mcp/athena/execute/route.ts
cp mcp-partnertech-route.ts app/api/mcp/partnertech/execute/route.ts
cp mcp-institute-route.ts app/api/mcp/institute/execute/route.ts
cp mcp-broker-route.ts app/api/mcp/broker/execute/route.ts
```

---

## 🔐 STEP 2: ENVIRONMENT VARIABLES

Add these to your `.env.local` (local dev) and Vercel Environment Variables (production):

```bash
# MCP Security
SAINTSAL_CORE_SECRET="your-secret-token-here-generate-a-strong-one"

# App URL (used for internal MCP calls)
NEXT_PUBLIC_APP_URL="https://saintvisionai.com"

# Optional: Additional secrets for each MCP
ATHENA_SECRET="your-athena-secret"
PARTNERTECH_SECRET="your-partnertech-secret"
INSTITUTE_SECRET="your-institute-secret"
BROKER_SECRET="your-broker-secret"
```

**Generate a strong secret:**
```bash
openssl rand -base64 32
```

---

## 📦 STEP 3: VERIFY DEPENDENCIES

Make sure your `package.json` has:

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

No additional packages needed - these routes use only Next.js Edge Runtime!

---

## 🚢 STEP 4: DEPLOY TO VERCEL

### From GitHub:

```bash
# Commit and push
git add .
git commit -m "Add SaintSal MCP endpoints for ElevenLabs"
git push origin main
```

Vercel will auto-deploy if connected to your repo.

### From CLI:

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Deploy
vercel --prod
```

---

## ✅ STEP 5: TEST YOUR ENDPOINTS

Test each endpoint with curl:

```bash
# Test Orchestrator
curl -X POST https://saintvisionai.com/api/orchestrator/execute \
  -H "Content-Type: application/json" \
  -H "x-agent-name: ElevenLabs-SaintSal" \
  -H "x-org: SaintVisionAI" \
  -d '{"task": "test connection"}'

# Test Athena
curl -X POST https://saintvisionai.com/api/mcp/athena/execute \
  -H "Content-Type: application/json" \
  -d '{"task": "faith guidance test"}'

# Test PartnerTech
curl -X POST https://saintvisionai.com/api/mcp/partnertech/execute \
  -H "Content-Type: application/json" \
  -d '{"task": "integration test"}'

# Test Institute
curl -X POST https://saintvisionai.com/api/mcp/institute/execute \
  -H "Content-Type: application/json" \
  -d '{"task": "knowledge test"}'

# Test Broker
curl -X POST https://saintvisionai.com/api/mcp/broker/execute \
  -H "Content-Type: application/json" \
  -d '{"task": "lending test"}'
```

**Expected response format:**
```json
{"status":"connected","message":"SaintSal orchestrator online","timestamp":"2025-11-01T..."}
{"status":"success","result":{...},"timestamp":"2025-11-01T..."}
```

---

## 🎤 STEP 6: CONFIGURE ELEVENLABS

### For Each MCP Server:

1. Go to **ElevenLabs Console** → **Integrations** → **Add Custom MCP Server**

2. **Orchestrator (Main Entry Point):**
   - Name: `saintsal_core_mcp`
   - Server Type: `Streamable HTTP`
   - Server URL: `https://saintvisionai.com/api/orchestrator/execute`
   - Headers:
     ```
     Content-Type: application/json
     x-agent-name: ElevenLabs-SaintSal
     x-org: SaintVisionAI
     ```
   - Secret Token: (leave blank OR add `Authorization: Bearer YOUR_SECRET` if you want security)
   - Approval Mode: `No Approval` (for automatic execution)
   - Click **Test Connection** - should see ✅ Success

3. **Athena MCP:**
   - Name: `athena_mcp`
   - Server URL: `https://saintvisionai.com/api/mcp/athena/execute`
   - (Same headers as above)

4. **PartnerTech MCP:**
   - Name: `partnertech_mcp`
   - Server URL: `https://saintvisionai.com/api/mcp/partnertech/execute`

5. **Institute MCP:**
   - Name: `institute_mcp`
   - Server URL: `https://saintvisionai.com/api/mcp/institute/execute`

6. **Broker MCP:**
   - Name: `broker_mcp`
   - Server URL: `https://saintvisionai.com/api/mcp/broker/execute`

---

## 🐛 TROUBLESHOOTING

### "Failed to connect to integration"

**Check:**
1. ✅ Is the endpoint deployed? Visit `https://saintvisionai.com/api/orchestrator/execute` in browser
2. ✅ Is CORS configured? (the routes include CORS headers)
3. ✅ Is the response NDJSON? (should see newline-delimited JSON)
4. ✅ Check Vercel logs: `vercel logs` or check Vercel dashboard

### "Unexpected ExceptionGroup"

This usually means:
- The endpoint returned non-NDJSON format
- OR there was a runtime error in your route

**Fix:**
- Check the route is using `application/x-ndjson` content type
- Ensure you're returning NDJSON (one JSON object per line, newline-separated)
- Check Vercel function logs for errors

### "401 Unauthorized"

If you're using `SAINTSAL_CORE_SECRET`:
- Make sure it's set in Vercel Environment Variables
- Make sure ElevenLabs is sending `Authorization: Bearer YOUR_SECRET` header
- OR remove the auth check from the route temporarily

---

## 🎯 NEXT STEPS

Once all MCP servers are connected and showing ✅ in ElevenLabs:

1. **Test voice interaction**: Call your ElevenLabs agent and ask it to perform tasks
2. **Monitor logs**: Watch Vercel function logs to see requests coming in
3. **Implement business logic**: Replace the TODO comments with actual logic for each MCP
4. **Add authentication**: Implement proper auth for production use

---

## 💡 IMPLEMENTATION NOTES

### Current Status:
- ✅ All endpoints stream NDJSON correctly
- ✅ CORS configured for ElevenLabs access
- ✅ Basic routing logic in orchestrator
- 🔨 Business logic needs implementation (marked with TODO)

### Next Implementation Tasks:

**Athena MCP:**
- Integrate with your faith-based content
- Add emotional intelligence layer
- Connect to spiritual guidance database

**PartnerTech MCP:**
- Implement GoHighLevel API calls
- Add Stripe payment processing
- Connect Supabase operations

**Institute MCP:**
- Build knowledge base retrieval
- Implement RAG (Retrieval-Augmented Generation)
- Add learning systems

**Broker MCP:**
- Real estate valuation logic
- Commercial lending calculations
- Investment analysis tools

---

## 🔥 LAUNCH CHECKLIST

- [ ] All 5 route files created and deployed
- [ ] Environment variables set in Vercel
- [ ] All endpoints tested with curl (returning NDJSON)
- [ ] All 5 MCPs registered in ElevenLabs
- [ ] Test connections showing ✅ in ElevenLabs
- [ ] Test voice call to ElevenLabs agent
- [ ] Monitor logs to confirm requests flowing
- [ ] Implement business logic for each MCP
- [ ] Add proper authentication/security
- [ ] Set up monitoring and error tracking

---

## 🚀 YOU'RE READY TO LAUNCH BROTHER!

Once deployed and tested, your ElevenLabs voice agent will be able to call your backend through these MCP endpoints.

**THE SUPERMAN BACKEND IS ONLINE.** 💎

LFG! 🔥
