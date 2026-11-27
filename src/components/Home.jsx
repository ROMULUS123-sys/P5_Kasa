import '../styles/Home.scss'
import Banner from "./Banner.jsx"
import ListCards from "./ListCards.jsx"
import photoAccueil from "../assets/IMG.jpg"

function Affichage () {

//state

//comportements

//affichage

    return <section>
        <Banner
            title={<>
                <span className="banner__line">Chez vous, </span>
                <span className="banner__line">partout et ailleurs</span>
            </>}
            description="crique avec des sapins sur les montagnes et de la brume" cover={photoAccueil}/>
        <ListCards/>
    </section>
}

export default Affichage 
