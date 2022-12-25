import ContextProvider from './context/contextProvider';
// import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  return (
  <div>
   <ContextProvider>
     <Register />
   </ContextProvider>
    
   <ToastContainer />
  </div>
  );
}

export default App;
