import React, { memo } from 'react';
// eslint-disable-next-line import/named
import { WithTranslation, withTranslation } from 'react-i18next';

import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import s from './Header.module.scss';
import cn from 'clsx';
import { LangSwitcher } from '../LangSwitcher';

export type HeaderOriginProps = WithTranslation & {
  className?: string;
};

/**
 * Компонент Header. Должен прилипать при прокрутке страницы и содержать компонент Logo
 */
export const HeaderOrigin = memo<HeaderOriginProps>(({ className, t }) => {
  return (
    <header className={cn(s.root, className)}>
      <div>
        <Logo />
        <span>{t(`header.appName`)}</span>
      </div>
      <div>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
});

HeaderOrigin.displayName = 'HeaderOrigin';

export const Header = withTranslation()(HeaderOrigin);
