import logoFooter from '../assets/logo_white.svg'
import '../style/Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt='Kasa' className='img_footer'/>
            <p className='footer_text'>© 2020 Kasa. All <br className='retour_ligne' />rights reserved</p>
        </footer>
    )
}

export default Footer;