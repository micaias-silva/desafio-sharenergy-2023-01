import NavigationButton from '../../components/Button';
import { BasicButtonStyle } from '../../components/Button/styles';
import { Text, Title } from '../../styles/Text';

const HomePage = () => {
  return (
    <main>
      <Title>
        Welcome, <Text color="blue">Sharenergy</Text>
      </Title>
      <NavigationButton to="/users">Users</NavigationButton>
      <NavigationButton to="/clients">Clients</NavigationButton>
      <NavigationButton to="/http-cats">HTTP Cats</NavigationButton>
      <NavigationButton to="/random-dog">Random Dog</NavigationButton>
    </main>
  );
};

export default HomePage;
