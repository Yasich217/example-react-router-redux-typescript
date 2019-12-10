import {ACTION} from '../Constants/MainPageConstants';

const initialState = {
  trigger: false
};

function mainPageReducer(state = initialState, action) {

  switch (action.type) {
    case ACTION.TOGGLE_TRIGGER:
      return {
        ...state,
        trigger: action.payload
      };
  };

  return state;
};

export {
  mainPageReducer
};
