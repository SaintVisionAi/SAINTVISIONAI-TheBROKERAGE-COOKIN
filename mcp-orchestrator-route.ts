// app/api/orchestrator/execute/route.ts
// Main MCP Orchestrator for ElevenLabs → SaintSal Backend

export const runtime = 'edge';

interface MCPRequest {
  action?: string;
  task?: string;
  context?: any;
  agent_name?: string;
  org?: string;
}

interface MCPResponse {
  status: string;
  message?: string;
  result?: any;
  timestamp: string;
  agent?: string;
}

export async function POST(req: Request) {
  const encoder = new TextEncoder();
  
  // Get headers for security validation
  const agentName = req.headers.get('x-agent-name');
  const org = req.headers.get('x-org');
  const authToken = req.headers.get('authorization');
  
  // Optional: Validate secret token
  const expectedSecret = process.env.SAINTSAL_CORE_SECRET;
  if (expectedSecret && authToken !== `Bearer ${expectedSecret}`) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const stream = new ReadableStream({
    async start(controller) {
      // Send initial connection confirmation
      const connectMessage: MCPResponse = {
        status: 'connected',
        message: 'SaintSal orchestrator online',
        timestamp: new Date().toISOString(),
        agent: agentName || 'ElevenLabs-SaintSal'
      };
      
      controller.enqueue(
        encoder.encode(JSON.stringify(connectMessage) + '\n')
      );

      try {
        // Parse the incoming request
        const body: MCPRequest = await req.json().catch(() => ({}));
        
        console.log('[MCP Orchestrator] Received:', {
          agentName,
          org,
          body
        });

        // Route the task to appropriate MCP server
        const result = await routeTask(body, agentName, org);

        // Send the response
        const response: MCPResponse = {
          status: 'success',
          result,
          timestamp: new Date().toISOString(),
          agent: agentName || 'ElevenLabs-SaintSal'
        };

        controller.enqueue(
          encoder.encode(JSON.stringify(response) + '\n')
        );

      } catch (err: any) {
        console.error('[MCP Orchestrator] Error:', err);
        
        const errorResponse: MCPResponse = {
          status: 'error',
          message: err.message,
          timestamp: new Date().toISOString(),
          agent: agentName || 'ElevenLabs-SaintSal'
        };

        controller.enqueue(
          encoder.encode(JSON.stringify(errorResponse) + '\n')
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'application/x-ndjson',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-agent-name, x-org',
    },
  });
}

// Handle CORS preflight
export async function OPTIONS(req: Request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-agent-name, x-org',
    },
  });
}

/**
 * Route tasks to appropriate MCP servers
 */
async function routeTask(
  request: MCPRequest,
  agentName?: string | null,
  org?: string | null
): Promise<any> {
  const { action, task, context } = request;

  // Determine which MCP to route to based on action/task
  if (!action && !task) {
    return {
      message: 'SaintSal Core Orchestrator Ready',
      capabilities: [
        'Athena: Faith-based guidance and emotional intelligence',
        'PartnerTech: GHL, Stripe, Supabase integrations',
        'Institute: Knowledge retrieval and learning',
        'Broker: Real estate and lending operations'
      ],
      org,
      agentName
    };
  }

  // Route to specific MCP based on keywords
  if (task?.toLowerCase().includes('faith') || task?.toLowerCase().includes('guidance')) {
    return await callMCP('/api/mcp/athena/execute', request);
  }

  if (task?.toLowerCase().includes('integration') || task?.toLowerCase().includes('ghl')) {
    return await callMCP('/api/mcp/partnertech/execute', request);
  }

  if (task?.toLowerCase().includes('learn') || task?.toLowerCase().includes('knowledge')) {
    return await callMCP('/api/mcp/institute/execute', request);
  }

  if (task?.toLowerCase().includes('real estate') || task?.toLowerCase().includes('lending')) {
    return await callMCP('/api/mcp/broker/execute', request);
  }

  // Default response
  return {
    message: 'Task received by orchestrator',
    action,
    task,
    status: 'queued',
    note: 'Specific MCP routing will be implemented based on task type'
  };
}

/**
 * Call a specific MCP endpoint
 */
async function callMCP(endpoint: string, request: MCPRequest): Promise<any> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://saintvisionai.com';
  
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`MCP call failed: ${response.statusText}`);
    }

    // Parse NDJSON response
    const text = await response.text();
    const lines = text.split('\n').filter(line => line.trim());
    const lastLine = lines[lines.length - 1];
    
    return JSON.parse(lastLine);
  } catch (error: any) {
    console.error(`[MCP Call Error] ${endpoint}:`, error);
    return {
      error: `Failed to call ${endpoint}`,
      details: error.message
    };
  }
}
