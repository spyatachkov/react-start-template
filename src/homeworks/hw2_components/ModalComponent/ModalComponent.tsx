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
  const [isVisible, setVisible] = useState(visible);

  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <div className="modal-window" onClick={handleClose}>
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
              <button onClick={handleClose}>X</button>
            </div>
            My modal window with {children}
          </div>
        </div>
      )}
    </>
  );
}
