import React, { FC } from 'react';
import cn from 'clsx';
import { sum } from './sum';
import './button.css';

interface ButtonProps {
  onClick: () => void;
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
}
/**
 * Primary UI component for user interaction
 */

export const Button: FC<ButtonProps> = ({ onClick, primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={cn('storybook-button', `storybook-button--${size}`, mode)}
      style={{ backgroundColor: backgroundColor || 'green', margin: '15px 15px' }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
