import { Button } from '@/core/components/Button';
import type { QuizStartProps } from './types';

/**
 * @component QuizStart
 * @summary Quiz start screen with instructions
 * @domain quiz
 * @type page-component
 * @category quiz
 */
export const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-adventure-blue mb-4 font-adventure">
            Quiz de Hora de Aventura
          </h2>
          <p className="text-xl text-gray-700">Teste seus conhecimentos sobre a série!</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="bg-adventure-yellow bg-opacity-20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Regras do Quiz:</h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-adventure-blue mr-3 text-2xl">📝</span>
                <span>
                  O quiz contém <strong>15 perguntas</strong> sobre Hora de Aventura
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-adventure-blue mr-3 text-2xl">⏱️</span>
                <span>
                  Você tem <strong>30 segundos</strong> para responder cada pergunta
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-adventure-blue mr-3 text-2xl">⭐</span>
                <span>
                  Cada resposta correta vale <strong>10 pontos</strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-adventure-blue mr-3 text-2xl">✅</span>
                <span>
                  Você receberá <strong>feedback imediato</strong> após cada resposta
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-adventure-green bg-opacity-20 rounded-lg p-6">
            <p className="text-center text-gray-700 text-lg">
              Prepare-se para uma aventura matemática pela Terra de Ooo!
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="text-xl px-12 py-4 font-adventure"
            onClick={onStart}
          >
            Iniciar Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};
