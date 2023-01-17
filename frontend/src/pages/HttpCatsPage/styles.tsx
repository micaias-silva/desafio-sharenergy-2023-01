import { Container, Flex } from '../../styles/Containers';
import { styled } from '../../styles/stitches.config';

export const StyledHttpCatsPage = styled('main', {
  [`& ${Container}`]: {
    [`${Flex}`]: {
      flexDirection: 'column',
    },
  },
});
