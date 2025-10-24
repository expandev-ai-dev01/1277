import type { QuizSession, QuizQuestion, QuizFeedback } from '../../types';

export interface UseQuizSessionReturn {
  session: QuizSession | null;
  currentQuestion: QuizQuestion | null;
  isLoading: boolean;
  isSubmitting: boolean;
  error: Error | null;
  timeRemaining: number;
  startQuiz: () => Promise<void>;
  submitAnswer: (optionIndex: number) => Promise<void>;
  handleTimeout: () => Promise<void>;
  feedback: QuizFeedback | null;
  resetQuiz: () => void;
}
