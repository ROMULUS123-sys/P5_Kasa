import '../styles/ListStars.scss'
import Star from './Star'

function ListStars({ rating }) {

//state
const positions = [1, 2, 3, 4, 5]
const note = Number(rating)

//comportements

//affichage
    return (
        <div className="list-stars" aria-label={`Note : ${note} sur 5`}>
            {positions.map((position) => (
                <Star key={position} grey={position > note}/>
            ))}
        </div>
    )
}

export default ListStars
