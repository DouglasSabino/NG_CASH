import Transactions from '../components/Transactions';
import BankHistory from '../components/BankHistory';
import { useEffect, useContext, useRef } from 'react';
import appContext from '../context/appContext';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Axios from 'axios';

function Home() {
  const containerRef = useRef();

  const { 
    balance, 
    setBalance, 
    user, 
    setUser, 
    showBalance, 
    setShowBalance 
  } = useContext(appContext);

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
      setShowBalance(true);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const changePassword = () => {
    let classes = containerRef.current.className;
    const arrayClasses = classes.split(' ');
    if (classes.includes('enable')) {
      const balanceValue = containerRef.current.innerText;
      console.log(balanceValue);
      const vetorBalance = balanceValue.split('');
      const cryptBalanceVetor = vetorBalance.map((_e) => '*');
      const cryptBalance = cryptBalanceVetor.join('');
      containerRef.current.innerText = cryptBalance;
      arrayClasses.pop();
      const stringClasses = arrayClasses.join(',');
      const replacedString = stringClasses.replace(/,/g, " ");
      containerRef.current.className = replacedString;
      setShowBalance(false);
    }else {
      containerRef.current.innerText = balance.toFixed(2);
      arrayClasses.push('enable');
      const stringClasses = arrayClasses.join(',');
      const replacedString = stringClasses.replace(/,/g, " ");
      containerRef.current.className = replacedString;
      setShowBalance(true);
    }
  }

  return (
   <div className='bg-slate-700 h-[100vh] w-[100vw]'>
    <div className='py-6 pl-16 bg-black shadow-lg shadow-white flex justify-center' >
     <h1 className=' text-white pt-5 w-96 font-gentium text-4xl mr-0' >Olá {user.username}</h1>
     <div className='mr-auto ml-[20vw] w-[80px]'>
       <img
        className='shadow-2x' 
        src="https://play-lh.googleusercontent.com/OvpI_Ut-8B3-Z7t0iu4y0oKjInkCcu8vNVzQP48eb6fG89xODw7gqsB26_ozYgsBWxU" 
        alt="logo NG Cash"
       />
     </div>
     {/*Deixar class 'enable' sempre por ultimo no atributo className da tag p'*/}
     <h2 className='text-white pt-5 font-gentium text-4xl flex pr-5'>Saldo Atual: <p className='text-white w-20 ml-3 mr-3 enable' ref={containerRef}>{!showBalance ? balance.toFixed(2) : '******' }</p></h2>
     <div onClick={ changePassword } className='text-white text-4xl hover:cursor-pointer pr-16 pt-5'>
      { showBalance ?  <AiFillEye /> : <AiFillEyeInvisible /> }
     </div>
    </div>
    <div className='flex'>
      <Transactions />
      <BankHistory />
    </div>
   </div>
  );
}

export default Home;
