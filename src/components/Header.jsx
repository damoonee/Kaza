import logo from '../assets/logo.svg';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='Kasa' className='header_logo'/>
            <nav className='header_link'>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">Acceuil</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;