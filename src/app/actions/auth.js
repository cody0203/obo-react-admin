import { AUTH_HANDLER } from '../types';

export const authHandler = payload => {
  return {
    type: AUTH_HANDLER,
    payload
  };
};
