import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Welcome page for the Adventure Time Quiz
 * @domain quiz
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Public: Yes
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Hero, Instructions, Start Button
 *
 * @userFlows
 * - Primary: View welcome message and start quiz
 */
export const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-adventure-blue mb-4 font-adventure">
            Bem-vindo ao Quiz!
          </h2>
          <p className="text-xl text-gray-700">Teste seus conhecimentos sobre Hora de Aventura</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="bg-adventure-yellow bg-opacity-20 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Como Funciona:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-adventure-blue mr-2">✓</span>
                <span>Responda perguntas sobre a série Hora de Aventura</span>
              </li>
              <li className="flex items-start">
                <span className="text-adventure-blue mr-2">✓</span>
                <span>Receba feedback imediato sobre suas respostas</span>
              </li>
              <li className="flex items-start">
                <span className="text-adventure-blue mr-2">✓</span>
                <span>Veja sua pontuação final ao terminar</span>
              </li>
              <li className="flex items-start">
                <span className="text-adventure-blue mr-2">✓</span>
                <span>Compartilhe seus resultados com amigos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" className="text-xl px-12 py-4">
            Começar Quiz
          </Button>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Divirta-se testando seus conhecimentos sobre Finn, Jake e toda a Terra de Ooo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
