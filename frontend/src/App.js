import ContextProvider from './context/contextProvider';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
   <ContextProvider>
     <Login />
   </ContextProvider> 
  );
}

export default App;
