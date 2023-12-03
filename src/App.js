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
  setCourse,
} from "./firebase/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/user/user.actions";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard";
import CourseDashboard from "./pages/CourseDashboard";
function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setCourse({
  //     id: 2,
  //     name: "Data Science Fundamentals with Python",
  //     instructor: "John Smith",
  //     description:
  //       "Explore the basics of data science using Python and popular libraries like Pandas and NumPy.",
  //     enrollmentStatus: "Open",
  //     thumbnail:
  //       "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
  //     duration: "12 weeks",
  //     schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
  //     location: "Online",
  //     prerequisites: ["Basic Python knowledge", "Familiarity with statistics"],
  //     review: 0,
  //     reviewCount: 0,
  //     price: 6999,
  //     syllabus: [
  //       {
  //         week: 1,
  //         topics: [
  //           "Introduction to Data Science",
  //           "Overview of data science",
  //           "Applications of data science",
  //         ],
  //       },
  //       {
  //         week: 2,
  //         topics: [
  //           "Data Wrangling with Pandas",
  //           "Cleaning and organizing data with Pandas",
  //           "Advanced Pandas techniques",
  //         ],
  //       },
  //       {
  //         week: 3,
  //         topics: [
  //           "Exploratory Data Analysis (EDA)",
  //           "Statistical analysis with NumPy",
  //           "Data visualization with Matplotlib",
  //         ],
  //       },
  //       {
  //         week: 4,
  //         topics: [
  //           "Machine Learning Basics",
  //           "Supervised learning algorithms",
  //           "Unsupervised learning algorithms",
  //         ],
  //       },
  //       {
  //         week: 5,
  //         topics: [
  //           "Model Evaluation and Validation",
  //           "Feature engineering",
  //           "Introduction to neural networks",
  //         ],
  //       },
  //       // Additional weeks and topics...
  //     ],
  //     students: [],
  //   });
  // }, []);

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
        <Route path="/courses" element={<Courses />} />
        <Route path={`/courses/:courseId`} element={<CourseDetails />} />
        <Route path={`/dashboard/:userId`} element={<Dashboard />} />
        <Route
          path={`/dashboard/:userId/:courseId`}
          element={<CourseDashboard />}
        />
      </Routes>
    </div>
  );
}

export default App;
