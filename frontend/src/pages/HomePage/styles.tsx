import { Container, Flex } from '../../styles/Containers';
import { styled } from '../../styles/stitches.config';

export const StyledHomePage = styled('main', {
  [`& ${Container}`]: {
    [`${Flex}`]: {
      width: '100%',
      height: '100%',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
