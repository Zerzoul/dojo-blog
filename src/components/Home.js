import {useState} from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const [click, setClick] = useState(0)


    const handleClick = () => {
        let manyClick = click
        setClick(manyClick += 1 ) 
    }

    const {data,errorMessage,isPending} = useFetch("http://localhost:8000/blogs");

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
                { data && <BlogList blogs={data} title="All blogs !"/> }
            </div>

        </div>
    );
}
 
export default Home;