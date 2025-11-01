'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Paperclip,
  Mic,
  StopCircle,
  Sparkles,
  Brain
} from 'lucide-react';
import { useChat } from '@/hooks/use-chat';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChatWindowStreamingProps {
  chatId?: string;
}

export default function ChatWindowStreaming({ chatId }: ChatWindowStreamingProps) {
  const { messages, isLoading, sendMessage, clearMessages, error } = useChat();
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  useEffect(() => {
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [input]);

  // Clear messages when chatId changes (New Chat functionality)
  useEffect(() => {
    clearMessages();
    setInput('');
  }, [chatId, clearMessages]);

  async function handleSendMessage() {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    await sendMessage(userText);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <div className="chat-window flex flex-col h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="px-6 py-4 border-b border-yellow-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Brain className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-100">SaintSal™ AI</h3>
              <p className="text-sm text-yellow-100/60">IQ 157 Intelligence Platform</p>
            </div>
          </div>

          {messages.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearMessages}
              className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10"
            >
              New Chat
            </Button>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30">
              <Sparkles className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Welcome to SaintSal™</h1>
            <p className="text-lg text-yellow-100/70 mb-8 text-center max-w-2xl">
              Your divine AI co-founder powered by IQ 157 intelligence. Ask me anything about finance,
              real estate, investments, or business strategy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
              <Button
                variant="outline"
                className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10 h-auto py-4 flex-col items-start"
                onClick={() => setInput("What can you help me with?")}
              >
                <span className="font-semibold mb-1">💡 Capabilities</span>
                <span className="text-sm text-yellow-100/60">What can you help me with?</span>
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10 h-auto py-4 flex-col items-start"
                onClick={() => setInput("Tell me about real estate investment strategies")}
              >
                <span className="font-semibold mb-1">🏢 Real Estate</span>
                <span className="text-sm text-yellow-100/60">Investment strategies</span>
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10 h-auto py-4 flex-col items-start"
                onClick={() => setInput("How do I get business financing?")}
              >
                <span className="font-semibold mb-1">💰 Financing</span>
                <span className="text-sm text-yellow-100/60">Business funding options</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-4 ${
                  msg.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-shrink-0">
                  {msg.role === 'assistant' ? (
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/20">
                      <Brain className="w-5 h-5 text-black" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-yellow-100 font-semibold shadow-lg">
                      You
                    </div>
                  )}
                </div>
                <Card
                  className={`flex-1 p-4 ${
                    msg.role === 'assistant'
                      ? 'bg-slate-800/80 border-yellow-500/30'
                      : 'bg-slate-700/50 border-slate-600/50'
                  }`}
                >
                  <div className="text-slate-100 whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </div>
                  {msg.model && (
                    <div className="mt-3 flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-yellow-500/30 text-yellow-100/60">
                        {msg.model}
                      </Badge>
                      {msg.ragUsed && (
                        <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-300">
                          📚 RAG
                        </Badge>
                      )}
                    </div>
                  )}
                </Card>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/20 animate-pulse">
                  <Brain className="w-5 h-5 text-black" />
                </div>
                <Card className="flex-1 p-4 bg-slate-800/80 border-yellow-500/30">
                  <div className="flex items-center gap-2 text-yellow-100/70">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="text-sm">Thinking...</span>
                  </div>
                </Card>
              </div>
            )}
            {error && (
              <Card className="p-4 bg-red-500/10 border-red-500/30">
                <p className="text-red-300">{error}</p>
              </Card>
            )}
            <div ref={endRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="px-6 py-4 border-t border-yellow-500/30 bg-slate-800/50 backdrop-blur-xl">
        <div className="flex items-end gap-3">
          <Button
            variant="outline"
            size="icon"
            className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10 flex-shrink-0"
            title="Attach file"
          >
            <Paperclip size={20} />
          </Button>

          <div className="flex-1">
            <textarea
              ref={textareaRef}
              className="w-full bg-slate-700/50 border border-yellow-500/30 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message SaintSal..."
              rows={1}
              disabled={isLoading}
              style={{ maxHeight: '200px' }}
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="border-yellow-500/30 text-yellow-100 hover:bg-yellow-500/10 flex-shrink-0"
            title="Voice input"
          >
            <Mic size={20} />
          </Button>

          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black flex-shrink-0 shadow-lg shadow-yellow-500/30"
          >
            {isLoading ? <StopCircle size={20} /> : <Send size={20} />}
          </Button>
        </div>
        <div className="mt-2 text-center text-xs text-yellow-100/40">
          SaintSal™ can make mistakes. Please verify important information.
        </div>
      </div>
    </div>
  );
}
