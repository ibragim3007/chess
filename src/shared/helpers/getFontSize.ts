import { SIZE_TYPES } from '../interfaces/globalInterfaces';

export const getFontSize = (size?: SIZE_TYPES) => {
  if (size === 'large') return '20px';
  if (size === 'normal') return '16px';
  if (size === 'small') return '14px';

  return '16px';
};
