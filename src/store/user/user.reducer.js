import { GET_CURRENT_USER, LOGIN_USER } from "./user.types";

const initialState = {
  auth: false,
  currentUser: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_USER: {
      return {
        ...state,
        auth: true,
        currentUser: { ...payload },
      };
    }

    default: {
      return state;
    }
  }
};
