import type { QuizResults } from '../../types';

export interface UseQuizResultsOptions {
  sessionId: string | null;
  enabled?: boolean;
}

export interface UseQuizResultsReturn {
  results: QuizResults | null;
  isLoading: boolean;
  error: Error | null;
  fetchResults: () => Promise<void>;
}
