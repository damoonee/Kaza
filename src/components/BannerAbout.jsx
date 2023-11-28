import bannerAbout from '../assets/banner-about.png'
import '../style/About.css'

function About() {
    return (
        <main className='about'>
            <div className='about_banner'>
                <img src={ bannerAbout } alt='Paysages des montagnes parcemer de neige' className='img_about'/>
            </div>
        </main>
    )
}

export default About;