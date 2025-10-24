import { Button } from '@/core/components/Button';
import type { QuizResultsProps } from './types';

/**
 * @component QuizResults
 * @summary Displays final quiz results with performance message
 * @domain quiz
 * @type page-component
 * @category quiz
 */
export const QuizResults = ({ results, onRestart }: QuizResultsProps) => {
  const getPerformanceEmoji = () => {
    if (results.percentageCorrect >= 80) return '🏆';
    if (results.percentageCorrect >= 60) return '⭐';
    if (results.percentageCorrect >= 40) return '👍';
    if (results.percentageCorrect >= 20) return '📚';
    return '💪';
  };

  const getScoreColor = () => {
    if (results.percentageCorrect >= 80) return 'text-green-600';
    if (results.percentageCorrect >= 60) return 'text-adventure-blue';
    if (results.percentageCorrect >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="text-8xl mb-4">{getPerformanceEmoji()}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-adventure-blue mb-4 font-adventure">
            Quiz Concluído!
          </h2>
        </div>

        <div className="mb-8 space-y-6">
          <div className="bg-gradient-to-r from-adventure-blue to-adventure-purple rounded-lg p-8 text-white text-center">
            <p className="text-2xl mb-2">Sua Pontuação</p>
            <p className="text-6xl font-bold font-adventure">{results.finalScore}</p>
            <p className="text-xl mt-2">de 150 pontos possíveis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-adventure-yellow bg-opacity-20 rounded-lg p-6 text-center">
              <p className="text-gray-600 text-lg mb-2">Respostas Corretas</p>
              <p className="text-4xl font-bold text-gray-800">{results.correctAnswers} / 15</p>
            </div>

            <div className="bg-adventure-green bg-opacity-20 rounded-lg p-6 text-center">
              <p className="text-gray-600 text-lg mb-2">Percentual de Acerto</p>
              <p className={`text-4xl font-bold ${getScoreColor()}`}>
                {results.percentageCorrect.toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="bg-adventure-pink bg-opacity-20 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-gray-800 mb-2">{results.performanceMessage}</p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Button
            variant="primary"
            size="lg"
            className="text-xl px-12 py-4 font-adventure"
            onClick={onRestart}
          >
            Jogar Novamente
          </Button>

          <p className="text-gray-600">
            Compartilhe seu resultado com seus amigos e desafie-os a fazer melhor!
          </p>
        </div>
      </div>
    </div>
  );
};
