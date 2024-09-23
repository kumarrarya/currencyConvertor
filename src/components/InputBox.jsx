function InputBox({label,amount,onAmountChange,onCurrencyChange,currencyOptions=[],selectCurrency="usd"}){
    return (
        <div className="flex items-center justify-center w-1/2 mx-auto my-auto">
        <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block">
            {label}
            </label>
            <input 
                className="outline-none w-full bg-transparent py-1.5" 
                type="number" 
                placeholder="Amount" 
                value={amount} 
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">
                Currency-Type
            </p>
            <select 
                className="round-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                value={selectCurrency}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                {
                    currencyOptions.map((currency)=>(
                        <option value={currency} key={currency}>
                            {currency}
                        </option>
                    ))
                }
            </select>
        </div>
    </div>
    )
}

export default InputBox;
