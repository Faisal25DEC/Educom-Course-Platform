import { LOGIN_USER } from "./user.types";

const initialState = {
  auth: false,
  currentUser: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER: {
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
