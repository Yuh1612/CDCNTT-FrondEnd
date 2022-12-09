
import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderPage from './component/HeaderPage';
import FooterPage from './component/FooterPage';
import HeaderPageUser from './component/HeaderPageUser';
import HeaderPageTeacher from './component/HeaderPageTeacher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Container/HomePage';
import LogIn from './Container/Login';
import SignUp from './Container/SignUp';
function App() {
  return (
    <div className="App">
{/* <BrowserRouter>
      <Routes> */}


        <HeaderPage />
        {/* <HeaderPageUser/> */}
        {/* <HeaderPageTeacher /> */}
        {/* <main> */}
          <Outlet />
          {/* <Route path='/'>
            <HomePage />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </main>
        <FooterPage /> */}
      {/* </Routes>
    </BrowserRouter> */}
    </div>

  );
}

export default App
