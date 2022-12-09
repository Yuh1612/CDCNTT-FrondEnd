import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='userprofile' element={<UserProfile />} />
          <Route path='savedteacher' element={<SavedTeacher />} />
          <Route path='teacherprofile' element={<TeacherProfile/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
<App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
