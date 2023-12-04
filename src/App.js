import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {
  createUserDocumentFromAuth,
  getUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./firebase/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./store/user/user.actions";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard";
import CourseDashboard from "./pages/CourseDashboard";
function App() {
  const dispatch = useDispatch();
  const [authState, setAuthState] = useState(true);

  const { auth } = useSelector((state) => state.userReducer);

  useEffect(() => {
    setAuthState(auth);
  }, [auth]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user, {
          courses: [{ id: null, progress: null, review: null, syllabus: null }],
        });
        const data = getUserDocumentFromAuth(user);
        data.then((res) => {
          console.log(res.data());

          dispatch(getCurrentUser({ ...res.data(), id: res.id }));
        });
        console.log(user);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/courses" element={authState ? <Courses /> : <Login />} />
        <Route
          path={`/courses/:courseId`}
          element={authState ? <CourseDetails /> : <Login />}
        />
        <Route
          path={`/dashboard/:userId`}
          element={authState ? <Dashboard /> : <Login />}
        />
        <Route
          path={`/dashboard/:userId/:courseId`}
          element={authState ? <CourseDashboard /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
