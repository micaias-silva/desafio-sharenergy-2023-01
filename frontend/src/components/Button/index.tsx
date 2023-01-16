import { StyledComponent } from '@stitches/react/types/styled-component';
import { ReactNode } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { BasicButtonStyle } from './styles';

interface ButtonProps {
  //   Style: StyledComponent<'button'>;
  children: ReactNode;
  to?: string;
}

const NavigationButton = ({ children, to }: ButtonProps) => {
  const history = useHistory();
  return (
    <BasicButtonStyle onClick={() => (to ? history.push(to) : null)}>
      {children}
    </BasicButtonStyle>
  );
};

export default NavigationButton;
