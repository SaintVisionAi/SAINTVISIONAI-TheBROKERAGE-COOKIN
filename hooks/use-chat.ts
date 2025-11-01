'use client';
import { useState, useCallback, useRef } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  model?: string;
  ragUsed?: boolean;
}

export interface UseChatReturn {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

/**
 * Custom hook for chat functionality with Server-Sent Events (SSE) streaming
 * Connects to /api/chat endpoint with RAG support
 */
export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content.trim(),
          stream: true,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: response.statusText,
        }));

        if (response.status === 401) {
          throw new Error('Please sign in to use chat');
        } else if (response.status === 403) {
          throw new Error(
            errorData.message || 'Email verification required. Please check your inbox.'
          );
        } else if (response.status === 429) {
          throw new Error('Message limit exceeded. Please upgrade your plan.');
        } else {
          throw new Error(errorData.error || 'Failed to send message');
        }
      }

      // Handle SSE streaming
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('Response body is not readable');
      }

      let assistantContent = '';
      let assistantModel = '';
      let ragUsed = false;

      // Create placeholder for assistant message
      const assistantMessageIndex = messages.length + 1;
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '',
          timestamp: new Date(),
        },
      ]);

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.error) {
                throw new Error(data.error);
              }

              if (data.token) {
                assistantContent += data.token;

                // Update assistant message with new content
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[assistantMessageIndex] = {
                    role: 'assistant',
                    content: assistantContent,
                    timestamp: new Date(),
                    model: assistantModel,
                    ragUsed,
                  };
                  return newMessages;
                });
              }

              if (data.done) {
                assistantModel = data.model || '';
                ragUsed = data.ragUsed || false;

                // Final update with metadata
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[assistantMessageIndex] = {
                    role: 'assistant',
                    content: assistantContent,
                    timestamp: new Date(),
                    model: assistantModel,
                    ragUsed,
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              console.error('Failed to parse SSE data:', e);
            }
          }
        }
      }
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.log('Request aborted');
        return;
      }

      const errorMessage = err.message || 'Failed to send message';
      setError(errorMessage);

      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Error: ${errorMessage}`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [isLoading, messages.length]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  };
}
