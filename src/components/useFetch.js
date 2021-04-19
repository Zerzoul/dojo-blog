import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController()
        fetch(url, { signal: abortCont.abort() })
            .then(res => {
                if(!res.ok){
                    throw Error("Couldn't fetch the data for this ressource !")
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false)
                setErrorMessage(null)
            })
            .catch(err => {
                if( err.name === "AbortError"){
                    console.log('Fetch Aborted')
                }
                else {
                    setIsPending(false)
                    setErrorMessage(err.message)
                }
            })
            return () => abortCont.abort();
    }, [url]);
    return {data, isPending, errorMessage}
}
 
export default useFetch;