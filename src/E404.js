import { Link } from "react-router-dom";
import './E404.css';
function E404(){
    return(
        <div className="e404">
            <h1>Page Not Found</h1>
             <Link to='/'>Home</Link>
        </div>
    )
}


export default E404;