import { data } from "autoprefixer";



function useCurrencyInfo(currency){

    cosnt [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency])) //OR res.currency
    },[currency])
    return data;
}

export default useCurrencyInfo;