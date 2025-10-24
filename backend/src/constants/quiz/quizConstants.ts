/**
 * @summary
 * Quiz configuration constants
 *
 * @module constants/quiz/quizConstants
 */

export const QUIZ_CONSTANTS = {
  TOTAL_QUESTIONS: 15,
  TIME_PER_QUESTION: 30,
  POINTS_PER_CORRECT_ANSWER: 10,
  MAX_POSSIBLE_SCORE: 150,
  MIN_QUESTIONS_IN_BANK: 30,
} as const;

export const PERFORMANCE_MESSAGES = {
  RANGE_0_20: 'Você precisa assistir mais Hora de Aventura!',
  RANGE_21_40: 'Você conhece um pouco sobre a Terra de Ooo.',
  RANGE_41_60: 'Bom conhecimento! Você é um fã casual.',
  RANGE_61_80: 'Ótimo! Você é um verdadeiro fã de Hora de Aventura!',
  RANGE_81_100: 'Incrível! Você é um expert em Hora de Aventura!',
} as const;

export const QUESTION_CATEGORIES = {
  CHARACTERS: 'Personagens',
  EPISODES: 'Episódios',
  TRIVIA: 'Curiosidades',
  PLOT: 'Enredo',
} as const;
