import { BsFillBackspaceFill } from "react-icons/bs";
import { RxEnter } from "react-icons/rx";
import { toast } from 'react-toastify';
import { useContext } from 'react';
import appContext from '../context/appContext';
import Axios from 'axios';

function Transactions() {
  const {  
    valueToTransfer, 
    setValueToTransfer, 
    userToRecive, 
    setUserToRecive 
    } = useContext(appContext);

  const clickTransfer = ({target}) => {
    // if (valueToTransfer.length === 0) setValueToTransfer('0');
    if (valueToTransfer[0] === '0') {
      const arraySetValue = valueToTransfer.split('');
      arraySetValue.pop();
      arraySetValue.push(target.innerText);
      const currentyValue = arraySetValue.join('');
      setValueToTransfer(currentyValue);
    } else {
      setValueToTransfer(valueToTransfer + target.innerText);
    }
  }

  const clickToSendMoney = () => {
    Axios.post('http://localhost:3001/transactions', {
      userToReceive: userToRecive, 
      balance: Number(valueToTransfer)
    },{
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((response) => {
      setValueToTransfer('0')
      toast.success(response.data)
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.response.data.message);
    });
  }

  const hadleChangeUserToRevice = ({target}) => {
    setUserToRecive(target.value);
  }

  return (
     <div className="pt-5 m-24 w-[30vw] h-[70vh] bg-black rounded-3xl shadow-2xl shadow-white">
        <div className="flex justify-center pt-2 font-gentium text-7xl mb-6 m-auto w-[25vw] h-[10vh] bg-slate-500 rounded-3xl shadow-md shadow-neutral-50">
          { valueToTransfer }
        </div>
        <div className="mx-36 w-[30vw] h-[70vh]">
            <div>
              <input placeholder="Usuario que irá receber trasnferencia" className="text-center pl-[1px] w-[15vw] font-gentium" onChange={hadleChangeUserToRevice} type='text'/>
            </div>
            <div>
              <div className="justify-center font-gentium flex-wrap flex mt-14  w-[21vw] h-[40vh] ml-[-60px]">
                <div
                  onClick={clickTransfer} 
                  name='1' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    1
                </div>
                <div
                  onClick={clickTransfer} 
                  name='2' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    2
                </div>
                <div
                  onClick={clickTransfer} 
                  name='3' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    3
                </div>
                <div
                  onClick={clickTransfer} 
                  name='4' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    4
                </div>
                <div
                  onClick={clickTransfer} 
                  name='5' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    5
                </div>
                <div
                  onClick={clickTransfer} 
                  name='6' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    6
                </div>
                <div
                  onClick={clickTransfer} 
                  name='7' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    7
                </div>
                <div
                  onClick={clickTransfer} 
                  name='8' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    8
                </div>
                <div
                  onClick={clickTransfer} 
                  name='9' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    9
                </div>
                <div
                  onClick={clickTransfer} 
                  name='backspace' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <BsFillBackspaceFill />
                </div>
                <div
                  onClick={clickTransfer} 
                  name='0' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    0
                </div>
                <div
                  onClick={clickToSendMoney} 
                  name='enter' 
                  className="text-white hover:cursor-pointer w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RxEnter />
                </div>
                    
                <div
                  onClick={clickTransfer} 
                  className=" text-white hover:cursor-pointer shadow w-80 text-center h-16 text-[50px] ml-9 mr-5">
                  .
                </div>
              </div>
            </div>
        </div>
        
     </div>
  );
}

export default Transactions;
