import {useState} from 'react'

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

    return (
        <div className="home">
            <div>
                <h2>Home Page</h2>
                <p>{` you click ${click} times`}</p>
                <button onClick={handleClick}>Click on me</button>
            </div>
            <div>
                {
                    blogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Home;