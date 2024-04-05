import React from 'react';
import './operation.css';

interface OperationProps {
  amount: number;
  category: string;
  title: string;
  description: string;
  date: string;
}

/**
 * Компонент полного отображения операции. Содержит сумму операции, название категории, название, описание, дату - все это он получает из пропсов. Также в нем есть кнопка редактирования (пока не активная)
 */
export function OperationComponent({ amount, category, title, description, date }: OperationProps) {
  return (
    <div className="operation-card-wrapper">
      <div className="operation-card__content">
        <div className="operation-card__title">
          <div className="amount">&#128176;{amount} RUB</div>
          <div className="title-block">
            <div className="title">&#128200; {title}, </div>
            <div className="date">, &nbsp;({date})</div>
          </div>
        </div>
        <div className="operation-card__description">
          <div className="category">&#127831; {category}</div>
          <div className="description-text">
            <p>{description}</p>
          </div>
          <button disabled className="btn">
            Редактировать
          </button>
        </div>
      </div>
    </div>
  );
}
