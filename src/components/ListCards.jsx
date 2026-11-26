import Card from "./Card.jsx"
import logements from "../../logements.json"
import '../styles/ListCards.scss'

function ListCards() {
    return(
        <div className="list-cards">
            {logements.map((logement) => (
                <Card
                key = {logement.id}
                id = {logement.id}
                title = {logement.title}
                cover = {logement.cover}
                />
            ))}
        </div>
    )
}

export default ListCards