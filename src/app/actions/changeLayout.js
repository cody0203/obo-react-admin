import { COLLAPSED_HANDLER } from 'app/types';

export const toggleCollapsed = payload => {
  return {
    type: COLLAPSED_HANDLER,
    payload
  };
};
