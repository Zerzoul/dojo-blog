import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(()=>{
        fetch(url)
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
                setIsPending(false)
                setErrorMessage(err.message)
            })
    }, [url]);
    return {data, isPending, errorMessage}
}
 
export default useFetch;