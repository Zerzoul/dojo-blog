import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [click, setClick] = useState(0)
    const  [blogs, setBlogs] = useState(null)

    const handleClick = () => {
        let manyClick = click
        setClick(manyClick += 1 ) 
    }

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then((data)=>{
            setBlogs(data)
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
                {blogs && <BlogList blogs={blogs} title="All blogs !"/>}
            </div>

        </div>
    );
}
 
export default Home;