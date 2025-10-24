import { clsx } from 'clsx';
import type { LoadingSpinnerSize } from './types';

export interface LoadingSpinnerVariantProps {
  size?: LoadingSpinnerSize;
  className?: string;
}

export function getLoadingSpinnerClassName(props: LoadingSpinnerVariantProps): string {
  const { size = 'medium', className } = props;

  return clsx(
    'animate-spin rounded-full border-4 border-gray-200 border-t-adventure-blue',
    {
      'h-8 w-8': size === 'small',
      'h-12 w-12': size === 'medium',
      'h-16 w-16': size === 'large',
    },
    className
  );
}
