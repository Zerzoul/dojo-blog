import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const url = "http://localhost:8000/blogs/"
    const {data,errorMessage,isPending} = useFetch(url + id);
    const history = useHistory();

    const handleClick = () => {
        fetch(url + id,{
            method:"DELETE",
        }).then(()=>{
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
            { errorMessage && <div>{errorMessage}</div> }
            { isPending && <div>Loading...</div> }
            { data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick} >Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;