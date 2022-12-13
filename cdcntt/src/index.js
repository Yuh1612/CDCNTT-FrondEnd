import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Container/HomePage";
import LogIn from "./Container/Login";
import SignUp from "./Container/SignUp";
import UserProfile from "./Container/UserProfile";
import SavedTeacher from "./component/SavedTeacher";
import TeacherProfile from "./Container/TeacherProfile";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="savedteacher" element={<SavedTeacher />} />
          <Route path="teacher/:teacherId" element={<TeacherProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
