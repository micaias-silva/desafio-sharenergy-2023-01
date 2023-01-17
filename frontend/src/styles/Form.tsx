import { StyledBasicButton } from '../components/Button/styles';
import { styled } from './stitches.config';

export const Input = styled('input', {
  background: '$gray2',
  border: 'none',
  borderRadius: 10,
  padding: '$1',
  color: '$white',
  display: 'block',
  fontWeight: '$bold',
  fontSize: '$larger',
  width: '100%',

  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
  },
  '&::placeholder': {
    color: '$white',
    filter: 'opacity(0.5)',
    fontWeight: '$bold',
  },
});

export const Form = styled('form', {
  maxWidth: 500,
  margin: 'auto',
  [`& ${Input}`]: {
    marginBottom: '$1',
  },

  [`& ${StyledBasicButton}`]: {
    marginTop: '$1',
    background: '$blue',
    width: '100%',
    color: '$white',
    fontSize: '$largest',
    '&:hover': {
      border: '2px solid $white',
    },

    input: {
      display: 'inline-block',
      marginRight: '$1',
    },
  },
});
