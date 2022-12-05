import './App.css';
import { Outlet } from 'react-router-dom';
import HeaderPage from './component/HeaderPage';
import FooterPage from './component/FooterPage';

function App() {
  return (
    <div className="App ">
      <HeaderPage />
      <Outlet />
      <FooterPage />
     
    </div>
  );
}

export default App;
