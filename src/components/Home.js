import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [click, setClick] = useState(0)
    const  [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const  [errorMessage, setErrorMessage] = useState(null)

    const handleClick = () => {
        let manyClick = click
        setClick(manyClick += 1 ) 
    }

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error("Couldn't fetch the data for this ressource !")
                }
                return res.json()
            })
            .then((data)=>{
                setBlogs(data);
                setIsPending(false)
                setErrorMessage(null)
            })
            .catch(err=>{
                setIsPending(false)
                setErrorMessage(err.message)
            })
    }, [])

    return (
        <div className="home">
            <div>
                <h2>Home Page</h2>
                <p>{` you click ${click} times`}</p>
                <button onClick={handleClick}>Click on me</button>
            </div>
            <div>
                { errorMessage && <div>{errorMessage}</div> }
                { isPending && <div>Loading...</div> }
                { blogs && <BlogList blogs={blogs} title="All blogs !"/> }
            </div>

        </div>
    );
}
 
export default Home;