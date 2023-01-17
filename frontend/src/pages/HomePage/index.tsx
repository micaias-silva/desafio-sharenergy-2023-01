import NavigationButton from '../../components/Button';
import { StyledBasicButton } from '../../components/Button/styles';
import { Container, Flex } from '../../styles/Containers';
import { Text, Title } from '../../styles/Text';
import { StyledHomePage } from './styles';
import catIconSvg from '../../assets/cat-icon.svg';
import pawIconSvg from '../../assets/paw-icon.svg';
import userIconSvg from '../../assets/user-icon.svg';
import clientIconSvg from '../../assets/client-icon.svg';

const HomePage = () => {
  return (
    <StyledHomePage>
      <Container>
        <Title>
          Welcome, <Text color="blue">Sharenergy</Text>
        </Title>
        <Flex>
          <NavigationButton to="/users">
            <img src={userIconSvg} />
          </NavigationButton>
          <NavigationButton to="/clients">
            <img src={clientIconSvg} />
          </NavigationButton>
          <NavigationButton to="/http-cats">
            <img src={catIconSvg} />
          </NavigationButton>
          <NavigationButton to="/random-dog">
            <img src={pawIconSvg} />
          </NavigationButton>
        </Flex>
      </Container>
    </StyledHomePage>
  );
};

export default HomePage;
