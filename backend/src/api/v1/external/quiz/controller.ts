/**
 * @api {post} /external/quiz/start Start Quiz
 * @apiName StartQuiz
 * @apiGroup Quiz
 * @apiVersion 1.0.0
 *
 * @apiDescription Starts a new quiz session with 15 random questions
 *
 * @apiSuccess {String} sessionId Unique session identifier
 * @apiSuccess {Object} firstQuestion First question data
 * @apiSuccess {Number} totalQuestions Total number of questions (15)
 * @apiSuccess {Number} timePerQuestion Time limit per question in seconds (30)
 *
 * @apiError {String} ServerError Internal server error
 */

import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '@/middleware/error';
import { startQuiz } from '@/services/quiz';

export async function startHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const quizData = startQuiz();
    res.json(successResponse(quizData));
  } catch (error: any) {
    res.status(500).json(errorResponse('Erro ao iniciar quiz', 'START_QUIZ_ERROR'));
  }
}
