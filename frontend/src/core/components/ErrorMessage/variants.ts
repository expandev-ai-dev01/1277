import { clsx } from 'clsx';

export function getErrorMessageClassName(): string {
  return clsx('max-w-md w-full p-8 bg-white rounded-lg shadow-lg border-2 border-red-200');
}
