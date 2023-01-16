import { BackendUserResponse } from '../../services/backendApi';
import { Text } from '../../styles/Text';

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
    <div>
      <Text>{username}</Text>
      <Text>{email}</Text>
      {firstName ? <Text>{firstName}</Text> : null}
      {lastName ? <Text>{lastName}</Text> : null}
      {birthdate ? <Text>{birthdate}</Text> : null}
      {profilePictureUrl ? <img src={profilePictureUrl} /> : null}
    </div>
  );
};

export default UserCard;
