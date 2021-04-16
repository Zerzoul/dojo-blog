import {useState} from 'react'

const Home = () => {
    const [click, setClick] = useState(0)

    const handleClick = () => {
        let manyClick = click
        setClick(manyClick += 1 ) 
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{` you click ${click} times`}</p>
            <button onClick={handleClick}>Click on me</button>
        </div>
    );
}
 
export default Home;