import { useState, useEffect, useCallback, useRef } from 'react';
import { quizService } from '../../services/quizService';
import type { QuizSession, QuizQuestion, QuizFeedback } from '../../types';
import type { UseQuizSessionReturn } from './types';

/**
 * @hook useQuizSession
 * @summary Manages quiz session state and interactions
 * @domain quiz
 * @type domain-hook
 * @category data
 */
export const useQuizSession = (): UseQuizSessionReturn => {
  const [session, setSession] = useState<QuizSession | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [feedback, setFeedback] = useState<QuizFeedback | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    setTimeRemaining(30);

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearTimer]);

  const startQuiz = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const response = await quizService.start();

      const newSession: QuizSession = {
        sessionId: response.sessionId,
        questions: [response.firstQuestion],
        currentQuestionIndex: 0,
        score: 0,
        correctAnswers: 0,
        timePerQuestion: response.timePerQuestion,
        totalQuestions: response.totalQuestions,
      };

      setSession(newSession);
      setCurrentQuestion(response.firstQuestion);
      startTimer();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('Erro ao iniciar quiz'));
      }
    } finally {
      setIsLoading(false);
    }
  }, [startTimer]);

  const submitAnswer = useCallback(
    async (optionIndex: number) => {
      if (!session || isSubmitting) return;

      clearTimer();
      setIsSubmitting(true);
      setError(null);

      try {
        const response = await quizService.submitAnswer({
          sessionId: session.sessionId,
          questionIndex: session.currentQuestionIndex,
          selectedOptionIndex: optionIndex,
        });

        setFeedback(response);

        const updatedSession: QuizSession = {
          ...session,
          score: response.currentScore,
          correctAnswers: response.correct ? session.correctAnswers + 1 : session.correctAnswers,
          currentQuestionIndex: session.currentQuestionIndex + 1,
        };

        if (response.nextQuestion) {
          updatedSession.questions = [...session.questions, response.nextQuestion];
        }

        setSession(updatedSession);

        setTimeout(() => {
          setFeedback(null);
          if (response.nextQuestion) {
            setCurrentQuestion(response.nextQuestion);
            startTimer();
          } else {
            setCurrentQuestion(null);
          }
        }, 2000);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Erro ao enviar resposta'));
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [session, isSubmitting, clearTimer, startTimer]
  );

  const handleTimeout = useCallback(async () => {
    if (!session || isSubmitting) return;

    clearTimer();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await quizService.handleTimeout({
        sessionId: session.sessionId,
        questionIndex: session.currentQuestionIndex,
      });

      setFeedback(response);

      const updatedSession: QuizSession = {
        ...session,
        score: response.currentScore,
        currentQuestionIndex: session.currentQuestionIndex + 1,
      };

      if (response.nextQuestion) {
        updatedSession.questions = [...session.questions, response.nextQuestion];
      }

      setSession(updatedSession);

      setTimeout(() => {
        setFeedback(null);
        if (response.nextQuestion) {
          setCurrentQuestion(response.nextQuestion);
          startTimer();
        } else {
          setCurrentQuestion(null);
        }
      }, 2000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('Erro ao processar timeout'));
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [session, isSubmitting, clearTimer, startTimer]);

  const resetQuiz = useCallback(() => {
    clearTimer();
    setSession(null);
    setCurrentQuestion(null);
    setFeedback(null);
    setError(null);
    setTimeRemaining(30);
  }, [clearTimer]);

  useEffect(() => {
    if (timeRemaining === 0 && currentQuestion && !feedback) {
      handleTimeout();
    }
  }, [timeRemaining, currentQuestion, feedback, handleTimeout]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return {
    session,
    currentQuestion,
    isLoading,
    isSubmitting,
    error,
    timeRemaining,
    startQuiz,
    submitAnswer,
    handleTimeout,
    feedback,
    resetQuiz,
  };
};
