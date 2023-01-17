import { styled } from '../../styles/stitches.config';

export const StyledBasicButton = styled('button', {
  background: '$white',
  padding: '15px 5px',
  fontWeight: '$bold',
  fontSize: 'larger',
  textAlign: 'center',
  border: '2px solid transparent',
  borderRadius: 15,
  width: '10%',
  cursor: 'pointer',
  display: 'block',
  height: 'fit-content',

  '&:hover': {
    border: '2px solid $blue',
  },
  '&:active': {
    filter: 'brightness(0.8)',
  },
});

export const StyledNavigationButton = styled('button', {
  background: '$gray',
  border: '2px solid transparent',
  padding: 90,
  maxWidth: '10vw',
  maxHeight: '10vw',
  borderRadius: '50%',
  color: '$white',
  img: {
    translate: '-50% -50%',
  },
  '&:hover': {
    border: '2px solid $blue',
  },
  '&:active': {
    filter: 'brightness(0.8)',
  },
});
