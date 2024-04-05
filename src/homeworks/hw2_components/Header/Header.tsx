import React from 'react';

import './header.css';
import { Logo } from '../Logo/Logo';

/**
 * Компонент Header. Должен прилипать при прокрутке страницы и содержать компонент Logo
 */
export function Header() {
  return (
    <header>
      <div className="hw-header">
        <div>
          <Logo />
        </div>
        <div>Учет доходов/расходов</div>
      </div>
    </header>
  );
}
