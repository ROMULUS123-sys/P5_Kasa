import '../styles/Card.scss'
import { Link } from "react-router-dom"

function Card({id, title, cover}) {

//state

//comportements

//affichage
    return (
    <Link to={`/FicheLogement/${id}`} className="card">
        <img className="card__img" src={cover} alt={title} />
        <h2 className="card__title">{title}</h2>
    </Link>
    ) 
}

export default Card
