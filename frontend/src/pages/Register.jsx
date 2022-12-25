import { useContext } from 'react';
import { toast } from 'react-toastify';
import appContext from '../context/appContext';
import Axios from 'axios';

function Register() {
  const { 
    user, 
    setUser, 
    password, 
    setPassword, 
  } = useContext(appContext);

  const handleClick = () => {
      Axios.post('http://localhost:3001/register',{
        username: user,
        password
      }).then((_response) => {
        toast.success('Usuario Criado com Sucesso');
      }).catch((e) => {
        if (e.response.data.message.includes('Usuario já cadastrado')) {
          toast.error(e.response.data.message);  
        } else {
          toast.error(e.message);
        }
      });
  };

  const handleChange = ({target}) => {
    if ( target.name === "fieldUser") {
      setUser(target.value);
    } else {
      setPassword(target.value);
    } 
  };

  return (
   <div className="pt-40 h-[100vh] w-[100vw] bg-cover bg-[url('../public/images/background.jpg')]">
    <div  className="border-2 rounded-3xl flex flex-col justify-center mx-[38rem] px-16 shadow-2xl shadow-gray-600">
      <div className="pt-11 pb-11 m-auto w-[17rem]">
        <img 
          src="https://play-lh.googleusercontent.com/OvpI_Ut-8B3-Z7t0iu4y0oKjInkCcu8vNVzQP48eb6fG89xODw7gqsB26_ozYgsBWxU" 
          alt="logo NG Cash"
        />
      </div>
      <div className="flex justify-center mb-4 px-2 text-center">
        <input 
          className="placeholder:text-gray-500 pl-[14px]" 
          type="text"
          name="fieldUser" 
          placeholder="Digite seu usuario"
          onChange={ handleChange }
        />
      </div>
      <div className="flex justify-center mb-8">
        <input 
          className="placeholder:text-gray-500 pl-[14px]" 
          type="password"
          name="fieldPass"  
          placeholder="Digite sua senha"
          onChange={ handleChange }
        />
      </div>
      <div className="bg-black text-cyan-50 mx-10 mb-7  flex justify-center shadow-md shadow-gray-600">
        <input className="" type="submit" value="Register" onClick={ handleClick } />
      </div>
    </div>
   </div>
  );
}

export default Register;
