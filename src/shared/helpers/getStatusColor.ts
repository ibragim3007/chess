import { STATUS_TYPES } from '../interfaces/globalInterfaces';

export const getStatusColor = (status?: STATUS_TYPES) => {
  if (status === 'error') return 'red';
  if (status === 'success') return 'green';
  if (status === 'warning') return 'yellow';
  return 'white';
};
