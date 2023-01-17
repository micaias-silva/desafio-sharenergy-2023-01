import LoginForm from '../../components/LoginForm';
import { Container } from '../../styles/Containers';
import { StyledLoginPage } from './style';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Container>
        <LoginForm />
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
