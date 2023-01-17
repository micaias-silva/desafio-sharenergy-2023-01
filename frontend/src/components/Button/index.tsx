import { StyledComponent } from '@stitches/react/types/styled-component';
import { ReactNode } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { StyledBasicButton, StyledNavigationButton } from './styles';

interface ButtonProps {
  //   Style: StyledComponent<'button'>;
  children: ReactNode;
  to?: string;
}

const NavigationButton = ({ children, to }: ButtonProps) => {
  const history = useHistory();
  return (
    <StyledNavigationButton onClick={() => (to ? history.push(to) : null)}>
      {children}
    </StyledNavigationButton>
  );
};

export default NavigationButton;
