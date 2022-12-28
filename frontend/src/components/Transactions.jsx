function Transactions() {
  return (
   <div className="pt-5 m-24 w-[30vw] h-[70vh] bg-black rounded-3xl shadow-2xl md:shadow-orange-800">
      <div className="mb-6 m-auto w-[25vw] h-[10vh] bg-slate-400 rounded-3xl shadow-md shadow-neutral-50">
        
      </div>
      <div className="mx-36 w-[30vw] h-[70vh]">
        <input placeholder="Usuario que irá receber trasnferencia" className="text-center pl-[1px] w-[15vw] font-gentium"  type='text'/>
      </div>
   </div>
  );
}

export default Transactions;
