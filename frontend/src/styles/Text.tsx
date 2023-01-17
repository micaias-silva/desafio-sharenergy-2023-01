import { colors } from './Global';
import { styled } from './stitches.config';

const baseText = {
  color: '$white',
  fontSize: 'inherit',
  fontWeight: 'inherit',
};

export const Link = styled('a', {
  ...baseText,
  textDecoration: 'none',
  fontWeight: '$bold',

  '&:hover': {
    filter: 'brightness(5)',
  },
});

export const Label = styled('label', {
  ...baseText,
  color: '$gray3',
  fontSize: '$larger',
  fontWeight: '$bold',
});

export const Text = styled('span', {
  ...baseText,
  //   fontWeight: '$light',
  wordBreak: 'break-word',
  variants: { ...colors },
});

export const Title = styled('h1', {
  ...baseText,
  textAlign: 'center',
  fontSize: '$largest',
  fontWeight: '$bold',
  margin: '$2 0',
  variants: { ...colors },
});

export const TopicTitle = styled('h2', {
  ...baseText,
  margin: '0 0 $1 0',
  fontSize: '$larger',
  fontWeight: '$bold',
  variants: { ...colors },
});
