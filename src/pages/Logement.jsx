import { useLocation } from "react-router-dom";
import Product from '../datas/logements.json';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Slider from '../components/Slide';
import Tags from '../components/Tags';
import Collapse from '../components/collapse';
import Error from '../pages/Error';

import '../style/Logement.css';

const Logement = () => {

    const loc = useLocation()
    const params = new URLSearchParams(loc.search)
    const productId = params.get("id")   
    
    const product = Product.find((product) => product.id === productId);
    
    if (product === undefined) {
        return (
            <Error />
        );
    }

    const tags = product?.tags.map((tags, i) => {
        return <Tags key={i} nom={tags} />;
    });

    const equipments = product && product.equipments;

    const equip =
		product &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));

    const { title, location, pictures } = product;

    return (
        <main className="product">
            <Slider slides={pictures} />
            <div className="product_content">
                <div className="product_description">
                    <h1 className="logement_title">{title}</h1>
                    <p className="logement_location">{location}</p>
                    <div className="description-info_titletags_tags">
                        {tags}
                    </div>
                </div>

                <div className="description-info_proprietaire">
                    {/* Hosting */}
                    <div className="description-info_proprietaire_nom-prop">
                    <Host
                        name={product?.host.name}
                        picture={product?.host.picture}
                    />
                    </div>
                    {/* Rating */}
                    <div className="description-info_proprietaire_rate">
                    <Rating score={product.rating} />
                    </div>
              </div>
            </div>
                
            <div className="collapse-fiche-container">
					<Collapse
						aboutTitle="Description"
						aboutText={product.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
			</div>
        </main>
    );
}

export default Logement;
