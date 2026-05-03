import type { Preview } from '@storybook/nextjs-vite'
import { withThemeByClassName } from '@storybook/addon-themes';

import '../app/globals.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#0F0F0F' },
      },
    },
    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: 'dark' },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;