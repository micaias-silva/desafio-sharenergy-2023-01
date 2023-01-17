import { NavLink } from 'react-router-dom';
import { Flex } from '../../styles/Containers';
import { styled } from '../../styles/stitches.config';

export const StyledHeader = styled('header', {
  position: 'fixed',
  zIndex: 10,
  width: '100%',
  height: 80,
  top: 0,
  background: 'Black',
  borderBottom: '2px solid $blue',
  a: {
    color: '$white',
    textDecoration: 'none',
    fontWeight: '$bold',
    fontSize: '$larger',
    '@mobile': {
      fontSize: '$normal',
    },
    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
  [`& ${Flex}`]: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
});
