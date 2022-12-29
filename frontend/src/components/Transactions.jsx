import { 
  RiNumber0, 
  RiNumber1, 
  RiNumber2, 
  RiNumber3, 
  RiNumber4, 
  RiNumber5, 
  RiNumber6, 
  RiNumber7, 
  RiNumber8, 
  RiNumber9 } from "react-icons/ri";
  import { BsFillBackspaceFill } from "react-icons/bs";
  import { RxEnter } from "react-icons/rx";

function Transactions() {
  return (
     <div className="pt-5 m-24 w-[30vw] h-[70vh] bg-black rounded-3xl shadow-2xl md:shadow-orange-800">
        <div className="mb-6 m-auto w-[25vw] h-[10vh] bg-slate-400 rounded-3xl shadow-md shadow-neutral-50">
        
        </div>
        <div className="mx-36 w-[30vw] h-[70vh]">
            <div>
              <input placeholder="Usuario que irá receber trasnferencia" className="text-center pl-[1px] w-[15vw] font-gentium"  type='text'/>
            </div>
            <div>
              <div className="justify-center font-gentium flex-wrap flex mt-14  w-[21vw] h-[40vh] ml-[-60px]">
                <div 
                  name='1' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber1  />
                </div>
                <div 
                  name='2' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber2  />
                </div>
                <div 
                  name='3' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber3  />
                </div>
                <div 
                  name='4' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber4  />
                </div>
                <div 
                  name='5' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber5  />
                </div>
                <div 
                  name='6' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber6  />
                </div>
                <div 
                  name='7' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber7  />
                </div>
                <div 
                  name='8' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber8  />
                </div>
                <div 
                  name='9' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber9  />
                </div>
                <div 
                  name='backspace' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <BsFillBackspaceFill  />
                </div>
                <div 
                  name='0' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RiNumber0  />
                </div>
                <div 
                  name='enter' 
                  className="text-white w-16 text-center h-16 text-[50px] ml-9 mr-5">
                    <RxEnter  />
                </div>
              </div>
            </div>
        </div>
        
     </div>
  );
}

export default Transactions;
