import type { QuizQuestion as QuizQuestionType, QuizFeedback } from '@/domain/quiz/types';

export interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  timeRemaining: number;
  currentScore: number;
  onSubmitAnswer: (optionIndex: number) => void;
  feedback: QuizFeedback | null;
  isSubmitting: boolean;
}
