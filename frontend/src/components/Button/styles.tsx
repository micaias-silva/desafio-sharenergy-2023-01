import { styled } from '../../styles/stitches.config';

export const BasicButtonStyle = styled('button', {
  background: '$white',
  padding: '15px 5px',
  fontWeight: '$bold',
  fontSize: '1.2rem',
  textAlign: 'center',
  border: '2px solid transparent',
  borderRadius: 15,

  '&:hover': {
    border: '2px solid $blue',
  },
  '&:active': {
    filter: 'brightness(0.8)',
  },
});
