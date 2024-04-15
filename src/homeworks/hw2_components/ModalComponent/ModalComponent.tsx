import React, { ReactNode, useEffect, useState } from 'react';
import './modal.scss';

export interface ModalComponentProps {
  visible: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

/**
 * Компонент модального окна.
 * Состоит из темной маски, белого квадратного окна и кнопки закрытия.
 * Обработчики писать пока не нужно.
 * Обладает проспом visible и children, для них должны быть реализовано управление в сторибук.
 * Логики монтирования в body пока не нужно реализовывать.
 */
export function ModalComponent({ visible, onClose, children }: ModalComponentProps) {
  return (
    <>
      {visible && (
        <div className="modal-window" onClick={onClose}>
          <div
            className="modal-window__content"
            role="dialog"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-window__header">
              <span>
                <strong>Header</strong>
              </span>
              <button onClick={onClose}>X</button>
            </div>
            My modal window with {children}
          </div>
        </div>
      )}
    </>
  );
}
