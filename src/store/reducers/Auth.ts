import { GET_DATA_USER } from "constants";

const INITIAL_STATE = {
  dataUser: {},
};

const AuthReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_DATA_USER:
      return {
        ...state,
        dataUser: {
          user_name: action.payload.dataUser.user_name,
          user_email: action.payload.dataUser.user_email,
        },
      };

    default:
      return state;
  }
};

export default AuthReducer;
