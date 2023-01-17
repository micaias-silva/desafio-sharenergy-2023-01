import { Container, Flex } from '../../styles/Containers';
import { styled } from '../../styles/stitches.config';

export const StyledRandomDogPage = styled('main', {
  [`& ${Container}`]: {
    [`${Flex}`]: {
      justifyContent: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
});

export const RefreshButton = styled('button', {
  background: '$white',
  border: '2px solid transparent',
  width: 100,
  height: 100,
  borderRadius: '50%',
  color: '$gray2',
  cursor: 'pointer',

  '&:active': {
    filter: 'brightness(0.8)',
  },
  '&:hover': {
    border: '2px solid $blue',
  },
  img: {
    width: '75%',
  },
});
