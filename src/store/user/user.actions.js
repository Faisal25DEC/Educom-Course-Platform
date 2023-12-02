import { createAuthUserWithEmailAndPassword } from "../../firebase/firebase";

export const signup =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
