/**
 * @summary
 * Quiz business logic implementation
 *
 * @module services/quiz/quizLogic
 */

import { v4 as uuidv4 } from 'uuid';
import {
  Question,
  QuizSession,
  QuizStartResponse,
  AnswerSubmission,
  AnswerFeedback,
  QuizResults,
} from './quizTypes';
import { QUESTIONS_BANK } from './quizData';
import { QUIZ_CONSTANTS, PERFORMANCE_MESSAGES } from '@/constants/quiz';

/**
 * @storage activeSessions
 * @description In-memory storage for active quiz sessions
 */
const activeSessions = new Map<string, QuizSession>();

/**
 * @summary
 * Selects random questions from the question bank
 *
 * @function selectRandomQuestions
 * @param {number} count - Number of questions to select
 * @returns {Question[]} Array of randomly selected questions
 */
function selectRandomQuestions(count: number): Question[] {
  const shuffled = [...QUESTIONS_BANK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * @summary
 * Removes correct answer flag from question options
 *
 * @function sanitizeQuestion
 * @param {Question} question - Question with correct answer marked
 * @returns {object} Question without correct answer information
 */
function sanitizeQuestion(question: Question) {
  return {
    ...question,
    opcoes: question.opcoes.map(({ texto }) => ({ texto })),
  };
}

/**
 * @summary
 * Calculates performance message based on percentage
 *
 * @function getPerformanceMessage
 * @param {number} percentage - Percentage of correct answers
 * @returns {string} Performance message
 */
function getPerformanceMessage(percentage: number): string {
  if (percentage <= 20) return PERFORMANCE_MESSAGES.RANGE_0_20;
  if (percentage <= 40) return PERFORMANCE_MESSAGES.RANGE_21_40;
  if (percentage <= 60) return PERFORMANCE_MESSAGES.RANGE_41_60;
  if (percentage <= 80) return PERFORMANCE_MESSAGES.RANGE_61_80;
  return PERFORMANCE_MESSAGES.RANGE_81_100;
}

/**
 * @summary
 * Starts a new quiz session
 *
 * @function startQuiz
 * @returns {QuizStartResponse} New quiz session data
 *
 * @example
 * const quiz = startQuiz();
 * console.log(quiz.sessionId); // "uuid-v4-string"
 */
export function startQuiz(): QuizStartResponse {
  const sessionId = uuidv4();
  const questions = selectRandomQuestions(QUIZ_CONSTANTS.TOTAL_QUESTIONS);

  const session: QuizSession = {
    sessionId,
    questions,
    currentQuestion: 0,
    score: 0,
    correctAnswers: 0,
    startTime: new Date(),
  };

  activeSessions.set(sessionId, session);

  return {
    sessionId,
    firstQuestion: sanitizeQuestion(questions[0]),
    totalQuestions: QUIZ_CONSTANTS.TOTAL_QUESTIONS,
    timePerQuestion: QUIZ_CONSTANTS.TIME_PER_QUESTION,
  };
}

/**
 * @summary
 * Submits an answer and returns feedback
 *
 * @function submitAnswer
 * @param {AnswerSubmission} submission - User's answer submission
 * @returns {AnswerFeedback} Feedback for the submitted answer
 *
 * @throws {Error} When session not found or invalid question index
 *
 * @example
 * const feedback = submitAnswer({
 *   sessionId: "uuid",
 *   questionIndex: 0,
 *   selectedOptionIndex: 2
 * });
 */
export function submitAnswer(submission: AnswerSubmission): AnswerFeedback {
  const { sessionId, questionIndex, selectedOptionIndex } = submission;

  const session = activeSessions.get(sessionId);
  if (!session) {
    throw new Error('sessionNotFound');
  }

  if (questionIndex !== session.currentQuestion) {
    throw new Error('invalidQuestionIndex');
  }

  const currentQuestion = session.questions[questionIndex];
  const selectedOption = currentQuestion.opcoes[selectedOptionIndex];
  const correctOption = currentQuestion.opcoes.find((opt) => opt.correta);

  if (!selectedOption || !correctOption) {
    throw new Error('invalidOptionIndex');
  }

  const isCorrect = selectedOption.correta;
  const pointsEarned = isCorrect ? QUIZ_CONSTANTS.POINTS_PER_CORRECT_ANSWER : 0;

  if (isCorrect) {
    session.score += pointsEarned;
    session.correctAnswers += 1;
  }

  session.currentQuestion += 1;

  const isLastQuestion = session.currentQuestion >= QUIZ_CONSTANTS.TOTAL_QUESTIONS;
  const nextQuestion = !isLastQuestion ? session.questions[session.currentQuestion] : null;

  const message = isCorrect
    ? `Correto! +${QUIZ_CONSTANTS.POINTS_PER_CORRECT_ANSWER} pontos`
    : `Incorreto! A resposta correta era: ${correctOption.texto}`;

  return {
    correct: isCorrect,
    message,
    correctAnswer: correctOption.texto,
    pointsEarned,
    currentScore: session.score,
    isLastQuestion,
    nextQuestion: nextQuestion ? sanitizeQuestion(nextQuestion) : null,
  };
}

/**
 * @summary
 * Handles timeout for a question (no answer submitted)
 *
 * @function handleTimeout
 * @param {string} sessionId - Session identifier
 * @param {number} questionIndex - Question index that timed out
 * @returns {AnswerFeedback} Feedback for timeout
 *
 * @throws {Error} When session not found
 */
export function handleTimeout(sessionId: string, questionIndex: number): AnswerFeedback {
  const session = activeSessions.get(sessionId);
  if (!session) {
    throw new Error('sessionNotFound');
  }

  if (questionIndex !== session.currentQuestion) {
    throw new Error('invalidQuestionIndex');
  }

  const currentQuestion = session.questions[questionIndex];
  const correctOption = currentQuestion.opcoes.find((opt) => opt.correta);

  if (!correctOption) {
    throw new Error('noCorrectOption');
  }

  session.currentQuestion += 1;

  const isLastQuestion = session.currentQuestion >= QUIZ_CONSTANTS.TOTAL_QUESTIONS;
  const nextQuestion = !isLastQuestion ? session.questions[session.currentQuestion] : null;

  return {
    correct: false,
    message: `Tempo esgotado! A resposta correta era: ${correctOption.texto}`,
    correctAnswer: correctOption.texto,
    pointsEarned: 0,
    currentScore: session.score,
    isLastQuestion,
    nextQuestion: nextQuestion ? sanitizeQuestion(nextQuestion) : null,
  };
}

/**
 * @summary
 * Gets final quiz results and cleans up session
 *
 * @function getResults
 * @param {string} sessionId - Session identifier
 * @returns {QuizResults} Final quiz results
 *
 * @throws {Error} When session not found
 *
 * @example
 * const results = getResults("uuid");
 * console.log(results.finalScore); // 120
 */
export function getResults(sessionId: string): QuizResults {
  const session = activeSessions.get(sessionId);
  if (!session) {
    throw new Error('sessionNotFound');
  }

  const percentageCorrect =
    Math.round((session.correctAnswers / QUIZ_CONSTANTS.TOTAL_QUESTIONS) * 100 * 10) / 10;

  const results: QuizResults = {
    finalScore: session.score,
    correctAnswers: session.correctAnswers,
    percentageCorrect,
    performanceMessage: getPerformanceMessage(percentageCorrect),
  };

  activeSessions.delete(sessionId);

  return results;
}

/**
 * @summary
 * Gets current session state (for debugging/admin purposes)
 *
 * @function getSession
 * @param {string} sessionId - Session identifier
 * @returns {QuizSession | undefined} Session data or undefined
 */
export function getSession(sessionId: string): QuizSession | undefined {
  return activeSessions.get(sessionId);
}
