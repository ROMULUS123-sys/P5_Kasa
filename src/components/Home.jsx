import '../styles/Home.scss'
import Banner from "./Banner.jsx"
import Card from "./Card.jsx"

function Affichage () {
    return <section>
        <Banner/>
        <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
}

export default Affichage 