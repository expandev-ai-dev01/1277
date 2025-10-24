import { getButtonClassName } from './variants';
import type { ButtonProps } from './types';

/**
 * @component Button
 * @summary Reusable button component with variants
 * @domain core
 * @type ui-component
 * @category form
 *
 * @props
 * @param {ButtonVariant} variant - Button style variant
 * @param {ButtonSize} size - Button size
 * @param {boolean} fullWidth - Full width button
 * @param {boolean} disabled - Disabled state
 * @param {ReactNode} children - Button content
 *
 * @styling
 * - Variants: primary, secondary, danger, ghost
 * - Sizes: sm, md, lg
 * - Responsive: Adapts to container
 *
 * @accessibility
 * - Keyboard: Fully keyboard accessible
 * - ARIA: Proper button semantics
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={getButtonClassName({ variant, size, fullWidth, className })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
