import { useEffect, useContext, useRef } from 'react';
import appContext from '../context/appContext';
import { AiFillEye } from "react-icons/ai";
import Axios from 'axios';

function Home() {
  const containerRef = useRef();
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const changePassword = () => {
    let situation = containerRef.current.className;
    const vetorSituation = situation.split(' ');
    if (situation.includes('enable')) {
      const balanceValue = containerRef.current.innerText;
      const vetorBalance = balanceValue.split('');
      const cryptBalanceVetor = vetorBalance.map((_e) => '*');
      const cryptBalance = cryptBalanceVetor.join('');
      containerRef.current.innerText = cryptBalance;
      vetorSituation.pop();
      const s = vetorSituation.join(',');
      const replace = s.replace(/,/g, " ");
      containerRef.current.className = replace
    }else {
      containerRef.current.innerText = balance;
      vetorSituation.push('enable');
      const s = vetorSituation.join(',');
      const replace = s.replace(/,/g, " ");
      containerRef.current.className = replace
    }
  }

  return (
   <div className='h-[100vh] w-[100vw]'>
    <div className='pl-16 bg-slate-400 shadow-md flex justify-center' >
     <h1 className='font-gentium text-4xl mr-auto' >Olá {user.username}</h1>
     {/*Deixar class 'enable' sempre por ultimo no atributo className da tag p'*/}
     <h2 className='font-gentium text-4xl flex pr-5'>Saldo Atual: <p className='w-20 ml-3 mr-3 enable' ref={containerRef}>{balance}</p></h2>
     <div onClick={ changePassword } className='text-4xl pr-16  pt-1'>
      <AiFillEye />
     </div>
    </div>
   </div>
  );
}

export default Home;
