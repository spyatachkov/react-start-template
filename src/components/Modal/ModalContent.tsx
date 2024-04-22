import React, { HTMLAttributes, memo } from 'react';
import cn from 'clsx';
import { ModalHeader } from './ModalHeader';
import s from './ModalContent.module.scss';

export type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
  full?: boolean;
};

// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
export const ModalContent = memo<ModalContentProps>(({ className, full, onClose, children, ...props }) => (
  <div data-testid="content" className={cn(s.root, className)} {...props}>
    <ModalHeader onClose={onClose} />
    {children}
  </div>
));

ModalContent.displayName = 'ModalContent';
