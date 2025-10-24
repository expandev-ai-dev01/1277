import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Loading spinner component for async operations
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {LoadingSpinnerSize} size - Size of the spinner (small, medium, large)
 * @param {string} className - Additional CSS classes
 *
 * @styling
 * - Variants: small, medium, large
 * - Responsive: Scales appropriately
 *
 * @accessibility
 * - ARIA: role="status" with aria-label
 * - Screen Reader: Announces loading state
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div
        className={getLoadingSpinnerClassName({ size, className })}
        role="status"
        aria-label="Carregando"
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
};
