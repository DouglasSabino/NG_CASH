import { useEffect, useContext } from 'react';
import appContext from '../context/appContext';
import { AiFillEye } from "react-icons/ai";
import Axios from 'axios';

function Home() {
  const { balance, setBalance, user, setUser } = useContext(appContext);
  useEffect(() => {
   const user = JSON.parse(localStorage.getItem('user'));
   setUser(user);
   const token = localStorage.getItem('token');
   Axios.get(`http://localhost:3001/accounts/${user.accountId}`,
   {
    headers: {
        "Authorization": `${token}`,
     }
   }).then((result) => {
      setBalance(result.data[0].balance);
   })
  },[]);

  return (
   <div className='h-[100vh] w-[100vw]'>
    <div className='pl-16 bg-slate-400 shadow-md flex justify-center' >
     <h1 className='font-gentium text-4xl mr-auto' >Olá {user.username}</h1>
     <h2 className='font-gentium text-4xl flex pr-5'>{`Saldo Atual: ${balance}`}</h2>
     <div  className='text-4xl pr-16  pt-1'>
      <AiFillEye />
     </div>
    </div>
   </div>
  );
}

export default Home;
