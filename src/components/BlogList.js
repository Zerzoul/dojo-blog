import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
        {
            blogs.map(({title, body, author, id}) => (
                <div className="blog-preview" key={id}>
                    <Link to={`blog/${id}`}>
                        <h2>{title}</h2>
                        <p>Written by {author}</p>
                    </Link>
                </div>
            ))
        }
    </div>
    );
}
 
export default BlogList;