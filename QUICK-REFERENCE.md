# ⚡ QUICK REFERENCE CARD - SAINTVISIONAI DEPLOYMENT

## 🎯 3-MINUTE SETUP (For ElevenLabs MCP)

### **1. Copy Files to Your Next.js Project**
```bash
# Create directories
mkdir -p app/api/orchestrator/execute
mkdir -p app/api/mcp/{athena,partnertech,institute,broker}/execute

# Copy route files
cp mcp-orchestrator-route.ts app/api/orchestrator/execute/route.ts
cp mcp-athena-route.ts app/api/mcp/athena/execute/route.ts
cp mcp-partnertech-route.ts app/api/mcp/partnertech/execute/route.ts
cp mcp-institute-route.ts app/api/mcp/institute/execute/route.ts
cp mcp-broker-route.ts app/api/mcp/broker/execute/route.ts
```

### **2. Add Environment Variables**
```bash
# .env.local
SAINTSAL_CORE_SECRET="your-secret-here"
NEXT_PUBLIC_APP_URL="https://saintvisionai.com"
```

### **3. Deploy**
```bash
git add .
git commit -m "Add SaintSal MCP endpoints"
git push origin main
# Vercel will auto-deploy
```

### **4. Test Endpoints**
```bash
curl -X POST https://saintvisionai.com/api/orchestrator/execute \
  -H "Content-Type: application/json" \
  -d '{"task": "test"}'
```

### **5. Configure ElevenLabs**
```
Name: saintsal_core_mcp
URL: https://saintvisionai.com/api/orchestrator/execute
Headers:
  Content-Type: application/json
  x-agent-name: ElevenLabs-SaintSal
  x-org: SaintVisionAI
```

---

## 🔥 ELEVENLABS CONFIGURATION (All 5 MCPs)

| MCP Name | URL Path | Purpose |
|----------|----------|---------|
| `saintsal_core_mcp` | `/api/orchestrator/execute` | Main orchestrator |
| `athena_mcp` | `/api/mcp/athena/execute` | Faith guidance |
| `partnertech_mcp` | `/api/mcp/partnertech/execute` | GHL, Stripe, Supabase |
| `institute_mcp` | `/api/mcp/institute/execute` | Knowledge retrieval |
| `broker_mcp` | `/api/mcp/broker/execute` | Lending & real estate |

**For each MCP:**
1. Go to ElevenLabs → Integrations → Add Custom MCP Server
2. Set Server Type: **Streamable HTTP**
3. Add the full URL (e.g., `https://saintvisionai.com/api/mcp/athena/execute`)
4. Add headers (same for all):
   ```
   Content-Type: application/json
   x-agent-name: ElevenLabs-SaintSal
   x-org: SaintVisionAI
   ```
5. Set Approval Mode: **No Approval** (for automatic execution)
6. Click **Test Connection** - should show ✅

---

## 🐛 TROUBLESHOOTING (Quick Fixes)

### **"Failed to connect to integration"**
```bash
# 1. Check if endpoint is live
curl https://saintvisionai.com/api/orchestrator/execute

# 2. Check Vercel deployment status
vercel ls

# 3. Check Vercel logs
vercel logs
```

### **"Unexpected ExceptionGroup"**
- Endpoint isn't returning NDJSON
- Check Content-Type header: `application/x-ndjson`
- View logs for runtime errors

### **"401 Unauthorized"**
- Remove auth check temporarily (comment out in route.ts)
- OR add `Authorization: Bearer YOUR_SECRET` to ElevenLabs headers

---

## 📁 FILE LOCATIONS CHEAT SHEET

```
your-nextjs-project/
├── app/
│   └── api/
│       ├── orchestrator/execute/route.ts  ← Main MCP
│       └── mcp/
│           ├── athena/execute/route.ts
│           ├── partnertech/execute/route.ts
│           ├── institute/execute/route.ts
│           └── broker/execute/route.ts
└── .env.local                             ← Secrets
```

---

## 🔑 ENVIRONMENT VARIABLES

```bash
# Required
SAINTSAL_CORE_SECRET="generate-with: openssl rand -base64 32"
NEXT_PUBLIC_APP_URL="https://saintvisionai.com"

# Optional (for enhanced security)
ATHENA_SECRET=""
PARTNERTECH_SECRET=""
INSTITUTE_SECRET=""
BROKER_SECRET=""
```

**Add to Vercel:**
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable for **Production**, **Preview**, and **Development**

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] 5 route files copied to correct locations
- [ ] `.env.local` created with secrets
- [ ] Committed to Git and pushed
- [ ] Deployed to Vercel (check deployment status)
- [ ] All 5 endpoints tested with curl (returning NDJSON)
- [ ] All 5 MCPs registered in ElevenLabs
- [ ] Test connections showing ✅ in ElevenLabs
- [ ] Voice agent tested (make a test call)

---

## 🚀 NEXT STEPS AFTER MCP DEPLOYMENT

1. **Implement business logic** in each MCP (replace TODOs)
2. **Build frontend** - migrate old site to Next.js
3. **Add SaintSal chat widget** to your site
4. **Connect to Supabase** for data persistence
5. **Setup GoHighLevel** for CRM automation
6. **Add Stripe** for payment processing
7. **Deploy to production** and go live

---

## 📊 SUCCESS INDICATORS

✅ **ElevenLabs shows "Connected"** for all 5 MCPs
✅ **Voice agent can make requests** to your backend
✅ **Vercel logs show incoming requests** from ElevenLabs
✅ **No errors in production** (check Vercel logs)
✅ **Response times < 1 second** for API calls

---

## 🆘 EMERGENCY CONTACTS

**Vercel Support:** https://vercel.com/support
**ElevenLabs Support:** https://elevenlabs.io/support
**Next.js Docs:** https://nextjs.org/docs

---

## 💡 PRO TIPS

1. **Test locally first:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/api/orchestrator/execute
   ```

2. **Use Vercel CLI for instant deployment:**
   ```bash
   vercel --prod
   ```

3. **Monitor in real-time:**
   ```bash
   vercel logs --follow
   ```

4. **Check NDJSON format:**
   ```bash
   curl https://saintvisionai.com/api/orchestrator/execute \
     -H "Content-Type: application/json" \
     -d '{}' | head -1
   # Should show: {"status":"connected",...}
   ```

---

## 🔥 THE BOTTOM LINE

**5 files → 5 minutes → 5 MCPs → ElevenLabs connected → DONE.**

**NO EXCUSES. LET'S GO.** 💎
