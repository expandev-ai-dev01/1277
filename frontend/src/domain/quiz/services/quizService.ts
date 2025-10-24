import { publicClient } from '@/core/lib/api';
import type {
  QuizStartResponse,
  QuizAnswerRequest,
  QuizTimeoutRequest,
  QuizFeedback,
  QuizResults,
} from '../types';

/**
 * @service quizService
 * @summary Quiz service for public endpoints
 * @domain quiz
 * @type rest-service
 * @apiContext external
 *
 * @description
 * All methods in this service use publicClient which targets:
 * /api/v1/external/quiz/...
 */
export const quizService = {
  /**
   * @endpoint POST /api/v1/external/quiz/start
   * @summary Starts a new quiz session with 15 random questions
   */
  async start(): Promise<QuizStartResponse> {
    const response = await publicClient.post('/quiz/start');
    return response.data.data;
  },

  /**
   * @endpoint POST /api/v1/external/quiz/answer
   * @summary Submits an answer for the current question
   */
  async submitAnswer(data: QuizAnswerRequest): Promise<QuizFeedback> {
    const response = await publicClient.post('/quiz/answer', data);
    return response.data.data;
  },

  /**
   * @endpoint POST /api/v1/external/quiz/timeout
   * @summary Handles timeout for a question (no answer submitted)
   */
  async handleTimeout(data: QuizTimeoutRequest): Promise<QuizFeedback> {
    const response = await publicClient.post('/quiz/timeout', data);
    return response.data.data;
  },

  /**
   * @endpoint GET /api/v1/external/quiz/results/:sessionId
   * @summary Gets final quiz results and cleans up session
   */
  async getResults(sessionId: string): Promise<QuizResults> {
    const response = await publicClient.get(`/quiz/results/${sessionId}`);
    return response.data.data;
  },
};
