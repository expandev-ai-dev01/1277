import { Router } from 'express';
import * as quizStartController from '@/api/v1/external/quiz/controller';
import * as quizAnswerController from '@/api/v1/external/quiz/answer/controller';
import * as quizTimeoutController from '@/api/v1/external/quiz/timeout/controller';
import * as quizResultsController from '@/api/v1/external/quiz/results/controller';

const router = Router();

/**
 * @summary
 * External (public) API routes configuration for V1
 *
 * @module routes/v1/externalRoutes
 */

// Quiz routes - /api/v1/external/quiz
router.post('/quiz/start', quizStartController.startHandler);
router.post('/quiz/answer', quizAnswerController.postHandler);
router.post('/quiz/timeout', quizTimeoutController.postHandler);
router.get('/quiz/results/:sessionId', quizResultsController.getHandler);

export default router;
