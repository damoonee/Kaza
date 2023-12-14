import imgBanner from '../assets/banner-home.png'
import '../style/Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='banner_home'></div>
            <img src={imgBanner} alt='Nature' className='banner_img'/>
            <p className='banner_text'>Chez vous, <br className='retour_ligne'/>partout et ailleurs</p>
        </div>
    )
}

export default Banner;

