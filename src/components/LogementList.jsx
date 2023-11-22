import { Link } from 'react-router-dom'
import { logementList } from '../../src/datas/logement'
import '../style/LogementList.css'

function LocationList() {
    return (
        <main className='logement'>
            <div className='logement_list'>
                {logementList.map(({ id, cover, title}) =>
                    <article key={id} className='logement_content'>
                        <Link to={`/location?id=${id}`}>
                            <div className='logement_list_content'></div>
                            <img className='logement_cover' src={cover} alt={`Logement ${title}`} />
                            <p className='logement_name'>{title}</p>
                        </Link>
                    </article>
                )}
            </div>
        </main>
    )
}

export default LocationList;