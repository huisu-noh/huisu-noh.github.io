import { Link } from "react-router-dom"

function Header () {
    return <header>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/experiences'}>Experiences</Link></li>
            <li><Link to={'/certificate'}>Certificate</Link></li>
            <li><Link to={'/book'}>Book</Link></li>
        </ul>
    </header>
}

export default Header