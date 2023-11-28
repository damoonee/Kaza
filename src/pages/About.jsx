import AboutBanner from '../components/BannerAbout'
import Collapse from '../components/collapse';
import AboutCol from '../datas/Collapse.json'

function About() {
    return (
        <>
            <AboutBanner />
            {AboutCol.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
        </>
    )
}

export default About;