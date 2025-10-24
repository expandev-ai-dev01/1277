import { useState } from 'react';
import { Button } from '@/core/components/Button';
import { cn } from '@/core/utils';
import type { QuizQuestionProps } from './types';

/**
 * @component QuizQuestion
 * @summary Displays quiz question with options and timer
 * @domain quiz
 * @type page-component
 * @category quiz
 */
export const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  timeRemaining,
  currentScore,
  onSubmitAnswer,
  feedback,
  isSubmitting,
}: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (index: number) => {
    if (feedback || isSubmitting) return;
    setSelectedOption(index);
    onSubmitAnswer(index);
  };

  const getOptionClassName = (index: number) => {
    const baseClasses =
      'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 text-lg';

    if (feedback) {
      if (question.options[index].correct) {
        return cn(baseClasses, 'bg-green-100 border-green-500 text-green-900');
      }
      if (selectedOption === index && !question.options[index].correct) {
        return cn(baseClasses, 'bg-red-100 border-red-500 text-red-900');
      }
      return cn(baseClasses, 'bg-gray-100 border-gray-300 text-gray-600');
    }

    if (selectedOption === index) {
      return cn(baseClasses, 'bg-adventure-blue text-white border-adventure-blue');
    }

    return cn(
      baseClasses,
      'bg-white border-gray-300 hover:border-adventure-blue hover:bg-blue-50 cursor-pointer'
    );
  };

  const getTimerColor = () => {
    if (timeRemaining > 20) return 'text-green-600';
    if (timeRemaining > 10) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-600">
              Pergunta {questionNumber} de {totalQuestions}
            </span>
            <span className="text-lg font-semibold text-gray-600">Pontuação: {currentScore}</span>
          </div>

          <div className="flex justify-center mb-6">
            <div
              className={cn(
                'text-4xl font-bold font-adventure',
                getTimerColor(),
                timeRemaining <= 5 && 'animate-pulse'
              )}
            >
              ⏱️ {timeRemaining}s
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{question.text}</h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={feedback !== null || isSubmitting}
                className={getOptionClassName(index)}
              >
                <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {feedback && (
          <div
            className={cn(
              'p-6 rounded-lg text-center',
              feedback.correct
                ? 'bg-green-100 border-2 border-green-500'
                : 'bg-red-100 border-2 border-red-500'
            )}
          >
            <p
              className={cn(
                'text-xl font-bold mb-2',
                feedback.correct ? 'text-green-800' : 'text-red-800'
              )}
            >
              {feedback.message}
            </p>
            {!feedback.correct && (
              <p className="text-gray-700">
                <strong>Resposta correta:</strong> {feedback.correctAnswer}
              </p>
            )}
            <p className="text-lg font-semibold mt-2">
              {feedback.correct ? '🎉 +10 pontos!' : '😔 +0 pontos'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
