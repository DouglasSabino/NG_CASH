import { useContext } from 'react';
import appContext from '../context/appContext';

function Login() {
  const { user } = useContext(appContext);
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
        <input className="placeholder:text-gray-500 pl-[14px]" type="text" placeholder="Digite seu usuario"/>
      </div>
      <div className="flex justify-center mb-8">
        <input className="placeholder:text-gray-500 pl-[14px]" type="password" placeholder="Digite sua senha"/>
      </div>
      <div className="bg-black text-cyan-50 mx-10 mb-7  flex justify-center shadow-md shadow-gray-600">
        <input className="" type="submit" value="Login" onClick={() => { window.alert(user) }}/>
      </div>
    </div>
   </div>
  );
}

export default Login;
