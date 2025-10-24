import { useState, useCallback, useEffect } from 'react';
import { quizService } from '../../services/quizService';
import type { QuizResults } from '../../types';
import type { UseQuizResultsOptions, UseQuizResultsReturn } from './types';

/**
 * @hook useQuizResults
 * @summary Fetches and manages quiz results
 * @domain quiz
 * @type domain-hook
 * @category data
 */
export const useQuizResults = (options: UseQuizResultsOptions): UseQuizResultsReturn => {
  const { sessionId, enabled = true } = options;
  const [results, setResults] = useState<QuizResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchResults = useCallback(async () => {
    if (!sessionId) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await quizService.getResults(sessionId);
      setResults(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('Erro ao buscar resultados'));
      }
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  useEffect(() => {
    if (enabled && sessionId) {
      fetchResults();
    }
  }, [enabled, sessionId, fetchResults]);

  return {
    results,
    isLoading,
    error,
    fetchResults,
  };
};
