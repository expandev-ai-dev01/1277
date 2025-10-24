import { getErrorMessageClassName } from './variants';
import type { ErrorMessageProps } from './types';

/**
 * @component ErrorMessage
 * @summary Error message display component
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {string} title - Error title
 * @param {string} message - Error message
 * @param {Function} onRetry - Optional retry callback
 * @param {Function} onBack - Optional back navigation callback
 *
 * @accessibility
 * - ARIA: role="alert" for error announcement
 * - Keyboard: Buttons are keyboard accessible
 */
export const ErrorMessage = ({ title, message, onRetry, onBack }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[400px]">
      <div className={getErrorMessageClassName()} role="alert">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">{message}</p>
          <div className="flex gap-4 justify-center">
            {onRetry && (
              <button
                onClick={onRetry}
                className="px-6 py-2 bg-adventure-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Tentar Novamente
              </button>
            )}
            {onBack && (
              <button
                onClick={onBack}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
