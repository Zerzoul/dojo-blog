import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author};

        setIsPending(true)

        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setIsPending(false);
            history.push("/");
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { isPending ? <div>Loading...</div> : <button>Add Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;