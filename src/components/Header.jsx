import logo from '../assets/logo.svg';
import '../style/Header.css';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='Kasa' className='header_logo'/>
            <nav className='header_link'>
                <a href='/' className='header_active'>Acceuil</a>
                <a href='/about'>A propos</a>
            </nav>
        </header>
    )
}

export default Header;