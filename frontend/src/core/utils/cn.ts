import { clsx, type ClassValue } from 'clsx';

/**
 * @utility cn
 * @summary Utility function to merge class names
 * @domain core
 * @type utility-function
 * @category styling
 *
 * @description
 * Combines clsx for conditional classes with tailwind-merge for
 * proper Tailwind CSS class merging.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
