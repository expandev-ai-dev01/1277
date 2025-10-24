/**
 * @api {post} /external/quiz/timeout Handle Timeout
 * @apiName HandleTimeout
 * @apiGroup Quiz
 * @apiVersion 1.0.0
 *
 * @apiDescription Handles timeout for a question (no answer submitted)
 *
 * @apiParam {String} sessionId Session identifier
 * @apiParam {Number} questionIndex Question index that timed out (0-14)
 *
 * @apiSuccess {Boolean} correct Always false for timeout
 * @apiSuccess {String} message Timeout message with correct answer
 * @apiSuccess {String} correctAnswer Text of correct answer
 * @apiSuccess {Number} pointsEarned Always 0 for timeout
 * @apiSuccess {Number} currentScore Current total score
 * @apiSuccess {Boolean} isLastQuestion Whether this was the last question
 * @apiSuccess {Object} nextQuestion Next question data (null if last)
 *
 * @apiError {String} ValidationError Invalid parameters
 * @apiError {String} SessionNotFound Session not found
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse, errorResponse } from '@/middleware/error';
import { handleTimeout } from '@/services/quiz';

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  questionIndex: z.number().int().min(0).max(14),
});

export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = bodySchema.parse(req.body);

    const feedback = handleTimeout(validated.sessionId, validated.questionIndex);
    res.json(successResponse(feedback));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Parâmetros inválidos', 'VALIDATION_ERROR', error.errors));
    } else if (error.message === 'sessionNotFound') {
      res.status(404).json(errorResponse('Sessão não encontrada', 'SESSION_NOT_FOUND'));
    } else if (error.message === 'invalidQuestionIndex') {
      res.status(400).json(errorResponse('Índice de pergunta inválido', 'INVALID_QUESTION_INDEX'));
    } else {
      res.status(500).json(errorResponse('Erro ao processar timeout', 'TIMEOUT_ERROR'));
    }
  }
}
