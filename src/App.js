import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {
  createUserDocumentFromAuth,
  db,
  getUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/user/user.actions";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user, {
          courses: [{ id: null, progress: null, review: null }],
        });
        const data = getUserDocumentFromAuth(user);
        data.then((res) => {
          console.log(res.data());
          onSnapshot(doc(db, "users", res.id), (doc) => {
            doc.exists() &&
              dispatch(getCurrentUser({ ...res.data(), id: res.id }));
          });
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
      </Routes>
    </div>
  );
}

export default App;
