import React, { ReactNode } from 'react';
import './modal.css';

interface ModalComponentProps {
  visible: boolean;
  children: ReactNode;
}

/**
 * Компонент модального окна.
 * Состоит из темной маски, белого квадратного окна и кнопки закрытия.
 * Обработчики писать пока не нужно.
 * Обладает проспом visible и children, для них должны быть реализовано управление в сторибук.
 * Логики монтирования в body пока не нужно реализовывать.
 */
export function ModalComponent({ visible, children }: ModalComponentProps) {
  return (
    <>
      {visible && (
        <div className="modal-window">
          <div className="modal-window__content">
            <div className="modal-window__header">
              <span>
                <strong>Header</strong>
              </span>
              <button>X</button>
            </div>
            My modal window with {children}
          </div>
        </div>
      )}
    </>
  );
}
