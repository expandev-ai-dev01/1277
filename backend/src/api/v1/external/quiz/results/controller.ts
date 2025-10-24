/**
 * @api {get} /external/quiz/results/:sessionId Get Results
 * @apiName GetResults
 * @apiGroup Quiz
 * @apiVersion 1.0.0
 *
 * @apiDescription Gets final quiz results and cleans up session
 *
 * @apiParam {String} sessionId Session identifier (URL parameter)
 *
 * @apiSuccess {Number} finalScore Final score (0-150)
 * @apiSuccess {Number} correctAnswers Number of correct answers (0-15)
 * @apiSuccess {Number} percentageCorrect Percentage of correct answers
 * @apiSuccess {String} performanceMessage Personalized performance message
 *
 * @apiError {String} ValidationError Invalid session ID format
 * @apiError {String} SessionNotFound Session not found
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse, errorResponse } from '@/middleware/error';
import { getResults } from '@/services/quiz';

const paramsSchema = z.object({
  sessionId: z.string().uuid(),
});

export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = paramsSchema.parse(req.params);

    const results = getResults(validated.sessionId);
    res.json(successResponse(results));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res
        .status(400)
        .json(errorResponse('ID de sessão inválido', 'VALIDATION_ERROR', error.errors));
    } else if (error.message === 'sessionNotFound') {
      res.status(404).json(errorResponse('Sessão não encontrada', 'SESSION_NOT_FOUND'));
    } else {
      res.status(500).json(errorResponse('Erro ao obter resultados', 'GET_RESULTS_ERROR'));
    }
  }
}
