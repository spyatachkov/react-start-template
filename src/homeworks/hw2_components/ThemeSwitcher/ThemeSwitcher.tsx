import React, { FC } from 'react';
import cn from 'clsx';
import s from './ThemeSwitcher.module.scss';
import { Theme, useThemeContext } from '../../../theming';

export type ThemeSwitcherProps = {
  className?: string;
};

const icons = {
  [Theme.light]: 'light',
  [Theme.dark]: 'dark',
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button type="button" className={cn(s.root, className, 'setting-button')} onClick={toggleTheme}>
      {icons[theme]}
    </button>
  );
};
