import { useEffect, useContext } from 'react';
import appContext from '../context/appContext';
import Axios from 'axios';

function BankHistory () {

  const { user, bankHistory, setBankHistory } = useContext(appContext);
  
  // const fixedId = user.accountId.split('').pop();
  
  useEffect(() => {
    console.log(user);
    Axios.post('localhost:3001/transactions/find',
    {
     headers: {
         Authorization: localStorage.getItem('token'),
         user: ''
      }
    }).then((result) => {
      
     })
  },[]);

  return (
    <div className="bg-black rounded-xl shadow-2xl shadow-white h-[43rem] w-[62rem] mt-24">
       
    </div>
  );
}

export default BankHistory;