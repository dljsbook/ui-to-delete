import * as React from 'react';
import styled from 'styled-components';
import {
  Children,
} from 'types';
import { colors, lighten } from '../../variables';

interface IProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: Children;
  index?: number;
}

interface IStyledButtonProps {
  color: string;
}

const StyledButton = styled.button<IStyledButtonProps>`
  ${props => `background: linear-gradient(${lighten(props.color, 15)}, ${lighten(props.color, 0)});`}

  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  margin: 0 10px;
  cursor: pointer;
  outline: none;

  span {
    margin-right: 10px;
  }

  &:hover {
    ${props => `background: linear-gradient(${lighten(props.color, 10)}, ${lighten(props.color, -5)});`}
  }

  &:active {
    background: linear-gradient(hsl(210,100%,73%), hsl(210,100%,58%));
    ${props => `background: linear-gradient(${lighten(props.color, 10)}, ${lighten(props.color, -10)});`}
  }
`;

const Button:React.SFC<IProps> = ({
  children,
  handleClick,
  index,
}) => (
  <StyledButton
    onClick={handleClick}
    color={colors.categories[index || 0].join(',')}
  >
    {children}
  </StyledButton>
);

export default Button;
