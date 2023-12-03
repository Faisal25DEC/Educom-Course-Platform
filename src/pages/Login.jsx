import AuthFrom from "../components/AuthFrom";
import { signInAuthUserWithEmailAndPassword } from "../firebase/firebase";

const Login = () => {
  const handleSubmit = async ({ email, password }) => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthFrom onSignUp={false} handleSubmit={handleSubmit} />;
};

export default Login;
