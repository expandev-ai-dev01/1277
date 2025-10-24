import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type error-page
 * @category public
 *
 * @routing
 * - Path: *
 * - Fallback: Catches all unmatched routes
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
        <h1 className="text-6xl font-bold text-adventure-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Página Não Encontrada</h2>
        <p className="text-xl text-gray-600 mb-8">
          Ops! Parece que você se perdeu na Terra de Ooo.
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
          Voltar para o Início
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
