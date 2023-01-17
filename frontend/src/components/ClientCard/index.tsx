import { BackendClientResponse } from '../../services/backendApi';
import { Text, TopicTitle } from '../../styles/Text';
import { StyledClientCard } from './styles';

const ClientCard = ({
  name,
  email,
  cpf,
  phoneNumber,
  address,
}: BackendClientResponse) => {
  return (
    <StyledClientCard>
      <TopicTitle>{name}</TopicTitle>
      <Text>E-mail: {email}</Text>
      <Text>CPF: {cpf}</Text>
      <Text>Phone-Number{phoneNumber}</Text>
      <Text>Address: {Object.values(address).slice(1).join(', ')}</Text>
    </StyledClientCard>
  );
};

export default ClientCard;
