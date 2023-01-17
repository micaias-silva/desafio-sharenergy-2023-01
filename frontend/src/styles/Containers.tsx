import { styled } from './stitches.config';

export const Container = styled('div', {
  margin: '0 auto',
  padding: '0 1rem',
  display: 'block',
  maxWidth: '75rem',
  '@mobile': {
    maxWidth: '40rem',
  },
});

export const Wrapper = styled('div', {
  minHeight: '100vh - 100',
  maxWidth: '100%',
  marginTop: 100,
});

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
});

export const Section = styled('section', {
  margin: '$2 0',
});

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  gridGap: '1px 1px',
  '@mobile': {
    gridTemplateColumns: '100%',
  },
});

export const PageButtonContainer = styled('div', {
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
});
