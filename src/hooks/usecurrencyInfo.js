
import { useEffect,useState } from "react";

function usecurrencyInfo(currency){

    const [Data,setData] = useState({});
    useEffect(()=>{
        let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
        fetch(url)
        .then((res)=>{return res.json()})
        .then((res)=> setData(res[currency]))
        .catch((error)=>{
            console.log("fetching Error Occurs at useCurrencyInfo: " ,error);
        })
    },[currency]);
    // console.log(Data);
    return Data;
}
export default usecurrencyInfo;
