import { styled } from 'styled-components';
import { SIZE_TYPES, STATUS_TYPES } from '../interfaces/globalInterfaces';
import { getStatusColor } from '../helpers/getStatusColor';
import { getFontSize } from '../helpers/getFontSize';

interface InputProps {
  borderColor?: STATUS_TYPES;
  size?: SIZE_TYPES;
}

export const Input = styled.input<InputProps>`
  border-radius: 3px;
  padding: 10px 15px;
  outline: none;
  border: none;
  font-size: ${props => getFontSize(props.size)};
  letter-spacing: 1.2px;
  border-bottom: 3px solid ${props => getStatusColor(props.borderColor)};
  box-shadow: 0px 8px 25px -5px rgba(255, 255, 0, 0.2);
  color: #fff;
  background-color: rgba(20, 20, 20, 1);
  backdrop-filter: blur(10px);

  transition: 0.2s ease;
`;
