#!/bin/bash

# 🚀 SAINTVISIONAI MCP SETUP SCRIPT
# Run this from your Next.js project root

echo "🔥 Setting up SaintSal MCP endpoints..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Create directory structure
echo -e "${BLUE}📁 Creating directory structure...${NC}"
mkdir -p app/api/orchestrator/execute
mkdir -p app/api/mcp/athena/execute
mkdir -p app/api/mcp/partnertech/execute
mkdir -p app/api/mcp/institute/execute
mkdir -p app/api/mcp/broker/execute

# Check if routes already exist
if [ -f "app/api/orchestrator/execute/route.ts" ]; then
  echo -e "${RED}⚠️  Warning: Routes already exist. Backup existing files? (y/n)${NC}"
  read -r backup
  if [ "$backup" = "y" ]; then
    timestamp=$(date +%Y%m%d_%H%M%S)
    mkdir -p backups/$timestamp
    cp -r app/api/orchestrator backups/$timestamp/ 2>/dev/null
    cp -r app/api/mcp backups/$timestamp/ 2>/dev/null
    echo -e "${GREEN}✅ Backup created in backups/$timestamp/${NC}"
  fi
fi

echo -e "${BLUE}📝 Copying route files...${NC}"

# You'll need to manually copy the route files or download them
echo -e "${BLUE}ℹ️  Please place the following files in your project:${NC}"
echo "  - mcp-orchestrator-route.ts → app/api/orchestrator/execute/route.ts"
echo "  - mcp-athena-route.ts → app/api/mcp/athena/execute/route.ts"
echo "  - mcp-partnertech-route.ts → app/api/mcp/partnertech/execute/route.ts"
echo "  - mcp-institute-route.ts → app/api/mcp/institute/execute/route.ts"
echo "  - mcp-broker-route.ts → app/api/mcp/broker/execute/route.ts"

# Check for .env.local
if [ ! -f ".env.local" ]; then
  echo -e "${BLUE}🔐 Creating .env.local...${NC}"
  cat > .env.local << 'EOF'
# MCP Security
SAINTSAL_CORE_SECRET="CHANGE_THIS_TO_A_STRONG_SECRET"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Optional: Individual MCP secrets
ATHENA_SECRET=""
PARTNERTECH_SECRET=""
INSTITUTE_SECRET=""
BROKER_SECRET=""
EOF
  echo -e "${GREEN}✅ Created .env.local - PLEASE UPDATE THE SECRETS!${NC}"
else
  echo -e "${BLUE}ℹ️  .env.local already exists. Add these variables if needed:${NC}"
  echo "  SAINTSAL_CORE_SECRET"
  echo "  NEXT_PUBLIC_APP_URL"
fi

# Generate a strong secret
echo -e "${BLUE}🔑 Suggested secret (use this for SAINTSAL_CORE_SECRET):${NC}"
openssl rand -base64 32 2>/dev/null || echo "GENERATE_YOUR_OWN_SECRET_HERE"

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo -e "${BLUE}📋 Next steps:${NC}"
echo "1. Copy the route files into the directories created"
echo "2. Update .env.local with your secret"
echo "3. Run: npm run dev (to test locally)"
echo "4. Deploy: git add . && git commit -m 'Add MCP endpoints' && git push"
echo "5. Configure ElevenLabs with your deployed URLs"
echo ""
echo -e "${GREEN}🚀 LFG BROTHER!${NC}"
