import type { Meta } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LangSwitcher> = {
  title: 'Homework/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    className: '',
  },
};
