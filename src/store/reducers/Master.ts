import { IS_LOADING } from 'constants';

const INITIAL_STATE = {
  isLoading: false,
};

const MasterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default MasterReducer;
