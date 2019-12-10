import {ACTION} from '../Constants/MainPageConstants';

export function toggleTrigger(payload) {
  return {
    type: ACTION.TOGGLE_TRIGGER,
    payload
  };
};
