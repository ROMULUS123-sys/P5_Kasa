import Card from "./Card.jsx"
import logements from "../../logements.json"

function ListCards() {
    return(
        <div>
            {logements.map((logement) => (
                <Card
                key = {logement.id}
                title = {logement.title}
                cover = {logement.cover}
                />
            ))}
        </div>
    )
}

export default ListCards