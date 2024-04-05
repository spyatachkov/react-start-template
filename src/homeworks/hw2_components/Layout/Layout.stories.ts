import type { Meta } from '@storybook/react';

import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Homework/Layout',
  component: Layout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    logo: 'logo',
  },
};
