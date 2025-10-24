import { useQuizSession } from '@/domain/quiz/hooks/useQuizSession';
import { useQuizResults } from '@/domain/quiz/hooks/useQuizResults';
import { QuizStart } from './_impl/QuizStart';
import { QuizQuestion } from './_impl/QuizQuestion';
import { QuizResults } from './_impl/QuizResults';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorMessage } from '@/core/components/ErrorMessage';

/**
 * @page QuizPage
 * @summary Main quiz page orchestrating quiz flow
 * @domain quiz
 * @type page-component
 * @category quiz-management
 *
 * @routing
 * - Path: /quiz
 * - Public: Yes
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Start, Question, Results
 *
 * @userFlows
 * - Primary: Start quiz, answer questions, view results
 */
export const QuizPage = () => {
  const {
    session,
    currentQuestion,
    isLoading,
    isSubmitting,
    error,
    timeRemaining,
    startQuiz,
    submitAnswer,
    feedback,
    resetQuiz,
  } = useQuizSession();

  const {
    results,
    isLoading: isLoadingResults,
    error: resultsError,
  } = useQuizResults({
    sessionId: session?.sessionId || null,
    enabled:
      !currentQuestion &&
      session !== null &&
      session.currentQuestionIndex >= session.totalQuestions,
  });

  if (error) {
    return <ErrorMessage title="Erro no Quiz" message={error.message} onRetry={resetQuiz} />;
  }

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  if (!session) {
    return <QuizStart onStart={startQuiz} />;
  }

  if (currentQuestion) {
    return (
      <QuizQuestion
        question={currentQuestion}
        questionNumber={session.currentQuestionIndex + 1}
        totalQuestions={session.totalQuestions}
        timeRemaining={timeRemaining}
        currentScore={session.score}
        onSubmitAnswer={submitAnswer}
        feedback={feedback}
        isSubmitting={isSubmitting}
      />
    );
  }

  if (isLoadingResults) {
    return <LoadingSpinner size="large" />;
  }

  if (resultsError) {
    return (
      <ErrorMessage
        title="Erro ao Carregar Resultados"
        message={resultsError.message}
        onRetry={resetQuiz}
      />
    );
  }

  if (results) {
    return <QuizResults results={results} onRestart={resetQuiz} />;
  }

  return <LoadingSpinner size="large" />;
};

export default QuizPage;
