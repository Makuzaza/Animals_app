import { Link } from "react-router-dom";
import '../index.css'

function Home () {
    return (
        <main >
        <div className="home">
        <Link to='/animals'><div className="img_animals">Animals</div></Link>
        <Link to='/birds'><div className="img_birds">Birds</div></Link>
        </div></main>
    );
}

export default Home;