const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
        {
            blogs.map(({title, body, author, id}) => (
                <div className="blog-preview" key={id}>
                    <h2>{title}</h2>
                    <p>Written by {author}</p>
                    <button onClick={()=>handleDelete(id)}>delte blog</button>
                </div>
            ))
        }
    </div>
    );
}
 
export default BlogList;