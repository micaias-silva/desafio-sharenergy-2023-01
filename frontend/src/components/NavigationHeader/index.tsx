import { NavLink } from 'react-router-dom';
import { Flex } from '../../styles/Containers';
import { StyledHeader } from './styles';

const NavigationHeader = () => {
  return (
    <StyledHeader>
      <Flex as="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/http-cats">HTTP Cats</NavLink>
        <NavLink to="/random-dog">Random Dog</NavLink>
      </Flex>
    </StyledHeader>
  );
};

export default NavigationHeader;
