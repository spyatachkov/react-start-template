import React, { FC } from 'react';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../../localization';
import s from './LangSwitcher.module.scss';

export type ThemeSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;
  return (
    <>
      <button
        type="button"
        className={cn(s.root, className, 'setting-button')}
        onClick={() => i18n.changeLanguage(lang)}
      >
        {lang}
      </button>
    </>
  );
};
