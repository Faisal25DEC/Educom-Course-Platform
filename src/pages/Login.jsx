import AuthFrom from "../components/AuthFrom";
import { signInAuthUserWithEmailAndPassword } from "../firebase/firebase";

const Login = () => {
  const handleSubmit = async ({ email, password }) => {
    await signInAuthUserWithEmailAndPassword(email, password);
  };

  return <AuthFrom onSignUp={false} />;
};

export default Login;
