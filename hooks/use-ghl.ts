'use client';
import { useState, useCallback } from 'react';

export interface GHLContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tags?: string[];
  customFields?: Record<string, any>;
}

export interface UseGHLReturn {
  isLoading: boolean;
  error: string | null;
  createContact: (data: GHLContactData) => Promise<any>;
  getContact: (email?: string, phone?: string) => Promise<any>;
}

/**
 * Custom hook for GoHighLevel CRM integration
 * Connects to /api/integrations/gohighlevel endpoint
 */
export function useGHL(): UseGHLReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createContact = useCallback(async (data: GHLContactData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/integrations/gohighlevel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create_contact',
          ...data,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: response.statusText,
        }));

        if (response.status === 401) {
          throw new Error('Authentication required');
        } else if (response.status === 503) {
          throw new Error('GoHighLevel not configured. Please contact support.');
        } else {
          throw new Error(errorData.error || 'Failed to create contact');
        }
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to create contact');
      }

      return result;
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create contact';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getContact = useCallback(
    async (email?: string, phone?: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/integrations/gohighlevel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'get_contact',
            email,
            phone,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({
            error: response.statusText,
          }));

          if (response.status === 401) {
            throw new Error('Authentication required');
          } else {
            throw new Error(errorData.error || 'Failed to get contact');
          }
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error('Failed to get contact');
        }

        return result;
      } catch (err: any) {
        const errorMessage = err.message || 'Failed to get contact';
        setError(errorMessage);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    error,
    createContact,
    getContact,
  };
}
