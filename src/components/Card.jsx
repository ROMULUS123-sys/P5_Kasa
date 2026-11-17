import '../styles/Card.scss'

function Card({title, cover}) {

//state

//comportements

//affichage
    return (
    <div className="card">
        <img className="card__img" src={cover} alt={title} />
        <h2 className="card__title">{title}</h2>
    </div>
    ) 
}

export default Card