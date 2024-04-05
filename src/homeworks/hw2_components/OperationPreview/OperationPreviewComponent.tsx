import React from 'react';
import './operation-preview.css';

interface OperationPreviewProps {
  amount: number;
  category: string;
  title: string;
  description: string;
}

/**
 * Компонент краткого отображения операции. Содержит сумму операции, название категории, название, описание (обрезанно) - все это он получает из пропсов
 */
export function OperationPreviewCardComponent({ amount, category, title, description }: OperationPreviewProps) {
  return (
    <>
      <div className="operation-preview-card-wrapper">
        <div className="operation-preview-card__content">
          <div className="operation-preview-card__title">
            <div className="amount">{amount} RUB</div>
            <div className="title">{title}</div>
          </div>
          <div className="operation-preview-card__description">
            <div className="category">{category}</div>
            <div className="description-text">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
