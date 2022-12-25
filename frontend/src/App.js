import ContextProvider from './context/contextProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  return (
  <div>
   <ContextProvider>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
   </ContextProvider>
    
   <ToastContainer />
  </div>
  );
}

export default App;
