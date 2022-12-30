import { BsFillBackspaceFill } from "react-icons/bs";
import { RxEnter } from "react-icons/rx";
import { useContext } from 'react';
import appContext from '../context/appContext';

function Transactions() {
  const {  valueToTransfer, setValueToTransfer } = useContext(appContext);
 
  const clickTransfer = ({target}) => {
    let decimal = 0;
    if (decimal === 0) {
      const transferArray = Number(target.innerText).toFixed(2).split('.');
      const [real, centavos] = transferArray;
    } 
    
  }

  return (
     <div className="pt-5 m-24 w-[30vw] h-[70vh] bg-black rounded-3xl shadow-2xl shadow-white">
        <div className="pl-80 pt-2 font-gentium text-7xl mb-6 m-auto w-[25vw] h-[10vh] bg-slate-500 rounded-3xl shadow-md shadow-neutral-50">
          { valueToTransfer.toFixed(2) }
        </div>
        <div className="mx-36 w-[30vw] h-[70vh]">
            <div>
              <input placeholder="Usuario que irá receber trasnferencia" className="text-center pl-[1px] w-[15vw] font-gentium"  type='text'/>
            </div>
            <div>
              <div className="justify-center font-gentium flex-wrap flex mt-14  w-[21vw] h-[40vh] ml-[-60px]">
                <div
                  onClick={clickTransfer} 
                  name='1' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    1
                </div>
                <div
                  onClick={clickTransfer} 
                  name='2' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    2
                </div>
                <div
                  onClick={clickTransfer} 
                  name='3' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    3
                </div>
                <div
                  onClick={clickTransfer} 
                  name='4' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    4
                </div>
                <div
                  onClick={clickTransfer} 
                  name='5' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    5
                </div>
                <div
                  onClick={clickTransfer} 
                  name='6' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    6
                </div>
                <div
                  onClick={clickTransfer} 
                  name='7' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    7
                </div>
                <div
                  onClick={clickTransfer} 
                  name='8' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    8
                </div>
                <div
                  onClick={clickTransfer} 
                  name='9' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    9
                </div>
                <div
                  onClick={clickTransfer} 
                  name='backspace' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <BsFillBackspaceFill />
                </div>
                <div
                  onClick={clickTransfer} 
                  name='0' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    0
                </div>
                <div
                  onClick={clickTransfer} 
                  name='enter' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RxEnter />
                </div>
              </div>
            </div>
        </div>
        
     </div>
  );
}

export default Transactions;
