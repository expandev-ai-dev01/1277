export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  category: string;
}

export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface QuizSession {
  sessionId: string;
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  correctAnswers: number;
  timePerQuestion: number;
  totalQuestions: number;
}

export interface QuizStartResponse {
  sessionId: string;
  firstQuestion: QuizQuestion;
  totalQuestions: number;
  timePerQuestion: number;
}

export interface QuizAnswerRequest {
  sessionId: string;
  questionIndex: number;
  selectedOptionIndex: number;
}

export interface QuizTimeoutRequest {
  sessionId: string;
  questionIndex: number;
}

export interface QuizFeedback {
  correct: boolean;
  message: string;
  correctAnswer: string;
  pointsEarned: number;
  currentScore: number;
  isLastQuestion: boolean;
  nextQuestion: QuizQuestion | null;
}

export interface QuizResults {
  finalScore: number;
  correctAnswers: number;
  percentageCorrect: number;
  performanceMessage: string;
}
