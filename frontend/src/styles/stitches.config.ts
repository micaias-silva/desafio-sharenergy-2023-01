import { createStitches } from '@stitches/react';

export const { styled, globalCss } = createStitches({
  media: {
    mobile: '(max-width: 768px)',
  },
  theme: {
    colors: {
      blue: '#2c7edf',
      gray: '#1e1e1e',
      gray2: '#333333',
      gray3: '#4a4a4a',
      white: '#fafafa',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    fontSizes: {
      normal: '1rem',
      topic: '1.5rem',
      title: '2.25rem',
    },
    space: {
      1: '0.5rem',
      2: '1rem',
    },
  },
});
