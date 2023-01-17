import { styled } from '../../styles/stitches.config';
import { Text } from '../../styles/Text';

export const StyledUserCard = styled('div', {
  border: 'none',
  borderRadius: 15,
  background: '$gray3',
  margin: '$1 0',
});

export const UserInfo = styled('div', {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'space-between',

  [`& ${Text}`]: {
    display: 'block',
    fontSize: '$larger',
    fontWeight: '$bold',
  },
});

export const UserFrame = styled('figure', {
  padding: 20,
  textAlign: 'center',
  background: '$whites',
});

export const UserProfilePicture = styled('img', {
  borderRadius: '50%',
  border: '2px solid $white',
  width: '96px',
});
