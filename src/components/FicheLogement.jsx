import '../styles/FicheLogement.scss'
import { useParams, Navigate } from 'react-router-dom'
import logements from "../../logements.json"
import Collapse from './Collapse'
import ListTags from './ListTags'
import ListStars from './ListStars'
import Carrousel from './Carrousel'
import chevron from "../assets/chevron_under.svg"


function AffichageLogement () {

//state
const { id } = useParams()
const logement = logements.find((logement) => logement.id === id)

//comportements

//affichage
    if (!logement) {
        return <Navigate to="/404" replace />
    }

    return <section className="logement">
        <Carrousel pictures={logement.pictures} title={logement.title}/>
        <div className="logement__infos">
            <div className="logement__main">
                <h1 className="logement__title">{logement.title}</h1>
                <p className="logement__location">{logement.location}</p>
                <ListTags tags={logement.tags}/>
            </div>
            <div className="logement__side">
                <div className="logement__host">
                    <p className="logement__host-name">{logement.host.name}</p>
                    <img className="logement__host-picture" src={logement.host.picture} alt={logement.host.name} />
                </div>
                <ListStars rating={logement.rating}/>
            </div>
        </div>
        <div className="logement__collapses">
            <Collapse title="Description" text={logement.description} img={chevron}/>
            <Collapse
                title="Équipements"
                text={
                    <ul className="logement__equipments">
                        {logement.equipments.map((equipment) => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                }
                img={chevron}
            />
        </div>
    </section>
}

export default AffichageLogement 
