/**
 * @summary
 * Quiz service type definitions
 *
 * @module services/quiz/quizTypes
 */

/**
 * @interface QuestionOption
 * @description Represents a single answer option for a question
 *
 * @property {string} texto - Option text
 * @property {boolean} correta - Whether this option is correct
 */
export interface QuestionOption {
  texto: string;
  correta: boolean;
}

/**
 * @interface Question
 * @description Represents a quiz question
 *
 * @property {string} id_pergunta - Unique question identifier
 * @property {string} texto_pergunta - Question text
 * @property {QuestionOption[]} opcoes - Array of 4 answer options
 * @property {string} categoria - Question category
 */
export interface Question {
  id_pergunta: string;
  texto_pergunta: string;
  opcoes: QuestionOption[];
  categoria: string;
}

/**
 * @interface QuizSession
 * @description Represents an active quiz session
 *
 * @property {string} sessionId - Unique session identifier
 * @property {Question[]} questions - Selected questions for this session
 * @property {number} currentQuestion - Current question index (0-14)
 * @property {number} score - Current score
 * @property {number} correctAnswers - Number of correct answers
 * @property {Date} startTime - Session start timestamp
 */
export interface QuizSession {
  sessionId: string;
  questions: Question[];
  currentQuestion: number;
  score: number;
  correctAnswers: number;
  startTime: Date;
}

/**
 * @interface QuizStartResponse
 * @description Response when starting a new quiz
 *
 * @property {string} sessionId - Session identifier
 * @property {Question} firstQuestion - First question (without correct answer)
 * @property {number} totalQuestions - Total number of questions
 * @property {number} timePerQuestion - Time limit per question in seconds
 */
export interface QuizStartResponse {
  sessionId: string;
  firstQuestion: Omit<Question, 'opcoes'> & { opcoes: Omit<QuestionOption, 'correta'>[] };
  totalQuestions: number;
  timePerQuestion: number;
}

/**
 * @interface AnswerSubmission
 * @description User's answer submission
 *
 * @property {string} sessionId - Session identifier
 * @property {number} questionIndex - Question index (0-14)
 * @property {number} selectedOptionIndex - Index of selected option (0-3)
 */
export interface AnswerSubmission {
  sessionId: string;
  questionIndex: number;
  selectedOptionIndex: number;
}

/**
 * @interface AnswerFeedback
 * @description Feedback after answering a question
 *
 * @property {boolean} correct - Whether answer was correct
 * @property {string} message - Feedback message
 * @property {string} correctAnswer - Text of correct answer
 * @property {number} pointsEarned - Points earned (0 or 10)
 * @property {number} currentScore - Updated total score
 * @property {boolean} isLastQuestion - Whether this was the last question
 * @property {Question | null} nextQuestion - Next question (if not last)
 */
export interface AnswerFeedback {
  correct: boolean;
  message: string;
  correctAnswer: string;
  pointsEarned: number;
  currentScore: number;
  isLastQuestion: boolean;
  nextQuestion: (Omit<Question, 'opcoes'> & { opcoes: Omit<QuestionOption, 'correta'>[] }) | null;
}

/**
 * @interface QuizResults
 * @description Final quiz results
 *
 * @property {number} finalScore - Final score (0-150)
 * @property {number} correctAnswers - Number of correct answers (0-15)
 * @property {number} percentageCorrect - Percentage of correct answers
 * @property {string} performanceMessage - Personalized performance message
 */
export interface QuizResults {
  finalScore: number;
  correctAnswers: number;
  percentageCorrect: number;
  performanceMessage: string;
}
