import '../styles/Home.scss'
import Banner from "./Banner.jsx"
import ListCards from "./ListCards.jsx"
import photoAccueil from "../assets/IMG.jpg"

function Affichage () {

//state

//comportements

//affichage

    return <section>
        <Banner title="Chez vous, partout et ailleurs" description="crique avec des sapins sur les montagnes et de la brume" cover={photoAccueil}/>
        <ListCards/>
    </section>
}

export default Affichage 
