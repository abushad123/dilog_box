import { CiFaceSmile } from 'react-icons/ci';
import { PiSmileySadLight } from 'react-icons/pi';
import { useState } from 'react'


function DilogBox({count }) {
const [dilog, setDilog] = useState(false);
const [sub, setSub] = useState({
    cancle:true,
    subscribe:false,
    unsubscribe:true
});

const handleDilog = () => {
    setSub({
        cancle:false,
        subscribe:true,
        unsubscribe:false
    })
}

const handleDilogUnsubscribe = () => {
    setSub({
        cancle:false,
        subscribe:false,
        unsubscribe:true
    })
}
  return (
    <>
     <div
        className="block w-80 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div
            className="mb-2 flex flex-row justify-center text-xl font-medium leading-tight text-neutral-800 ">
            {sub.cancle ? "Hello !!" : null }  {sub.subscribe  ? (<span className='ms-2 inline-block align-middle'><CiFaceSmile size={70}  /></span>) : null} {sub.unsubscribe  ? (<span className={`ms-2  inline-block align-middle ${sub.unsubscribe ? `hidden` : null}`}><PiSmileySadLight size={70} /></span>) : null}
        </div>
        <p className="mb-4 text-base text-neutral-600">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. 
        </p>
        
        <div className="flex flex-row justify-between">
            {sub.cancle ? (<button
            type="button"
            className="inline-block rounded bg-gray-500 px-4 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            onClick={count}
            data-te-ripple-color="light">
            Cancel 
        </button>) : null}
        
        {sub.subscribe ? null : (<button
            type="button"
            className="inline-block rounded bg-red-500 px-6 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out  "
            data-te-ripple-init
            onClick={handleDilog}
            data-te-ripple-color="light">

            Subscribe 
        </button>) }
        
        {!sub.unsubscribe ? (<button
            type="button"
            className="inline-block rounded bg-red-500 px-6   text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out  "
            data-te-ripple-init
            onClick={handleDilogUnsubscribe}
            data-te-ripple-color="light">
            Unsubscribe
        </button>) : null}
        
        </div>
        
</div>
    </>
  )
}

export default DilogBox

