import { NavLink } from 'react-router-dom';
import { StyledHeader } from './styles';

const NavigationHeader = () => {
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/http-cats">HTTP Cats</NavLink>
        <NavLink to="/random-dog">Random Dog</NavLink>
      </nav>
    </StyledHeader>
  );
};

export default NavigationHeader;
