import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [click, setClick] = useState(0)
    const  [blogs, setBlogs] = useState([
        {title: "My new website", body:"lorem ipsum...", author:"mario", id: 1 },
        {title: "Welcome party!", body:"lorem ipsum...", author:"yoshi", id: 2 },
        {title: "Web dev top tips", body:"lorem ipsum...", author:"mario", id: 3 },
    ])
    const handleClick = () => {
        let manyClick = click
        setClick(manyClick += 1 ) 
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use Effect ran')
    }, [blogs])

    return (
        <div className="home">
            <div>
                <h2>Home Page</h2>
                <p>{` you click ${click} times`}</p>
                <button onClick={handleClick}>Click on me</button>
            </div>
            <div>
                <BlogList blogs={blogs} title="All blogs !" handleDelete={handleDelete}/>
            </div>

        </div>
    );
}
 
export default Home;