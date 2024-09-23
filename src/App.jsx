
import { useState } from 'react';
import {InputBox} from './components';
import usecurrencyInfo from './hooks/usecurrencyInfo';
function App(){
    const [amount,setAmount]=useState();
    const [currency,setcurrency]=useState("usd");
    const [From,setFrom] = useState("usd");
    const [To,setTo] =useState("inr");
    const [convertedAmount,setConvertedAmount]=useState(0);

    const currencyInfo = usecurrencyInfo(From);
    const currencyOptions=Object.keys(currencyInfo);

    const swap=()=>{
        setFrom(To);
        setTo(From);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const convert=()=>{
        setConvertedAmount(amount*currencyInfo[To]);
    }
    return (
        <div className='flex flex-col items-center justify-center my-10'>
        <InputBox 
            label={"From"}
            amount={amount}
            onCurrencyChange={(currency)=> setFrom(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={From}
            onAmountChange={(amount)=> setAmount(amount)}
        />
        <InputBox 
            label={"To"}
            amount={convertedAmount}
            onCurrencyChange={(currency)=> setTo(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={To}
            onAmountChange={(convertedAmount)=> setConvertedAmount(convertedAmount)}
        />
        <button onClick={(convert)} className='mx-auto bg-blue-400 rounded m-1 p-1' >
            convert {From} to {To}
        </button>
        </div>
    )
}
export default App