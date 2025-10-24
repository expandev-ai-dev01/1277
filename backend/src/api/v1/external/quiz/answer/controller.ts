/**
 * @api {post} /external/quiz/answer Submit Answer
 * @apiName SubmitAnswer
 * @apiGroup Quiz
 * @apiVersion 1.0.0
 *
 * @apiDescription Submits an answer for the current question
 *
 * @apiParam {String} sessionId Session identifier
 * @apiParam {Number} questionIndex Current question index (0-14)
 * @apiParam {Number} selectedOptionIndex Selected option index (0-3)
 *
 * @apiSuccess {Boolean} correct Whether answer was correct
 * @apiSuccess {String} message Feedback message
 * @apiSuccess {String} correctAnswer Text of correct answer
 * @apiSuccess {Number} pointsEarned Points earned (0 or 10)
 * @apiSuccess {Number} currentScore Updated total score
 * @apiSuccess {Boolean} isLastQuestion Whether this was the last question
 * @apiSuccess {Object} nextQuestion Next question data (null if last)
 *
 * @apiError {String} ValidationError Invalid parameters
 * @apiError {String} SessionNotFound Session not found
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse, errorResponse } from '@/middleware/error';
import { submitAnswer } from '@/services/quiz';

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  questionIndex: z.number().int().min(0).max(14),
  selectedOptionIndex: z.number().int().min(0).max(3),
});

export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = bodySchema.parse(req.body);

    const feedback = submitAnswer(validated);
    res.json(successResponse(feedback));
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json(errorResponse('Parâmetros inválidos', 'VALIDATION_ERROR', error.errors));
    } else if (error.message === 'sessionNotFound') {
      res.status(404).json(errorResponse('Sessão não encontrada', 'SESSION_NOT_FOUND'));
    } else if (error.message === 'invalidQuestionIndex') {
      res.status(400).json(errorResponse('Índice de pergunta inválido', 'INVALID_QUESTION_INDEX'));
    } else if (error.message === 'invalidOptionIndex') {
      res.status(400).json(errorResponse('Índice de opção inválido', 'INVALID_OPTION_INDEX'));
    } else {
      res.status(500).json(errorResponse('Erro ao processar resposta', 'SUBMIT_ANSWER_ERROR'));
    }
  }
}
