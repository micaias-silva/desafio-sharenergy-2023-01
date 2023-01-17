import { styled } from '../../styles/stitches.config';
import { Text } from '../../styles/Text';

export const StyledClientCard = styled('div', {
  background: '$gray2',
  padding: '$1',
  borderRadius: '15px',
  margin: '$1 0',

  [`${Text}`]: {
    display: 'block',
    fontSize: '$larger',
    margin: '3px 0',
  },
});
