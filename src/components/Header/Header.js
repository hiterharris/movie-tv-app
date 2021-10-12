import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/movies" className='link'>Movies</Link>
        </div>
    )
}

export default Header