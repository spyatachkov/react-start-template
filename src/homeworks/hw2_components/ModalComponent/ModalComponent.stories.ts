import type { Meta } from '@storybook/react';

import { ModalComponent } from './ModalComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ModalComponent> = {
  title: 'Homework/ModalComponent',
  component: ModalComponent,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Modal = {
  args: {
    visible: true,
    children: 'children',
  },
};
