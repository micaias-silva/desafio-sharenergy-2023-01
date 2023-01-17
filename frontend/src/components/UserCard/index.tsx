import { BackendUserResponse } from '../../services/backendApi';
import { Flex } from '../../styles/Containers';
import { Text, TopicTitle } from '../../styles/Text';
import {
  StyledUserCard,
  UserFrame,
  UserInfo,
  UserProfilePicture,
} from './styles';
import noUserSvg from '../../assets/no-user.svg';

const UserCard = ({
  id,
  email,
  username,
  firstName,
  lastName,
  profilePictureUrl,
  birthdate,
}: BackendUserResponse) => {
  return (
    <StyledUserCard>
      <Flex>
        <UserFrame>
          <UserProfilePicture src={profilePictureUrl || noUserSvg} />
        </UserFrame>

        <UserInfo>
          <div>
            {firstName && lastName && (
              <TopicTitle>{firstName + ' ' + lastName}</TopicTitle>
            )}
            <Text>{username}</Text>
            <Text>{email}</Text>
          </div>
          {birthdate ? (
            <Text>
              {new Date(Date.now()).getFullYear() -
                new Date(birthdate).getFullYear()}
            </Text>
          ) : null}
        </UserInfo>
      </Flex>
    </StyledUserCard>
  );
};

export default UserCard;
