import type { QuizResults as QuizResultsType } from '@/domain/quiz/types';

export interface QuizResultsProps {
  results: QuizResultsType;
  onRestart: () => void;
}
