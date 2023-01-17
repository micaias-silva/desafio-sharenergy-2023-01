import { globalCss } from '@stitches/react';
import { ReactNode } from 'react';

interface GlobalStyleProps {
  children: ReactNode;
}

export const colors = {
  color: {
    blue: { color: '$blue' },
    gray: { color: '$gray' },
    gray2: { color: '$gray2' },
    gray3: { color: '$gray3' },
    white: { color: '$white' },
  },
};

const font: string =
  "url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400;1,700&display=swap')";

const globalStyles = globalCss({
  '@import': font,

  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontSize: '$normal',
  },
  html: {
    fontFamily: 'Lato',
    scrollBehavior: 'smooth',
    fontSize: '67.5%',
    background: '#000000',
  },
});

export const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  globalStyles();
  return <>{children}</>;
};
