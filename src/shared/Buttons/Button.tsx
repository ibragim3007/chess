import { styled } from 'styled-components';
import { SIZE_TYPES } from '../interfaces/globalInterfaces';
import { getFontSize } from '../helpers/getFontSize';

interface ButtonProps {
  size?: SIZE_TYPES;
}

export const Button = styled.button<ButtonProps>`
  background-color: #732dff;
  padding: 10px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: ${props => getFontSize(props.size)};
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: bold;
  letter-spacing: 1.5px;

  &:disabled {
    background-color: #5c536e;
    opacity: 0.7;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.3);
  }
`;
