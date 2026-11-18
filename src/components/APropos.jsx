import '../styles/APropos.scss'
import Banner from './Banner'
import Collapse from './Collapse'
import photoAPropos from "../assets/image_a_propos.jpg"
import chevron from "../assets/chevron_under.svg"

function AffichageAPropos () {

//state

//comportements

//affichage
    return<section>
        <Banner cover={photoAPropos} description="paysage de montagnes avec des arbres en premier plan et des pics de montagnes en fond"/>
        <div>
            <Collapse title="Fiabilité" text="Les annonces postées sur Kasa garantissent une
                            fiabilité totale. Les photos sont conformes aux
                            logements, et toutes les informations sont
                            régulièrement vérifiées par nos équipes."
                            img={chevron}/>
            <Collapse title="Respect" text="La bienveillance fait partie des valeurs
                            fondatrices de Kasa. Tout comportement
                            discriminatoire ou de perturbation du voisinage
                            entraînera une exclusion de notre plateforme."
                            img={chevron}/>
            <Collapse title="Service" text="La qualité du service est au cœur de notre
                            engagement chez Kasa. Nous veillons à ce que
                            chaque interaction, que ce soit avec nos hôtes ou
                            nos locataires, soit empreinte de respect et de
                            bienveillance."
                            img={chevron}/>
            <Collapse title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour
                            nos hôtes que pour les voyageurs, chaque
                            logement correspond aux critères de sécurité
                            établis par nos services. En laissant une note
                            aussi bien à l'hôte qu'au locataire, cela permet à
                            nos équipes de vérifier que les standards sont
                            bien respectés. Nous organisons également des
                            ateliers sur la sécurité domestique pour nos
                            hotes."
                            img={chevron}/>
        </div>
    </section>
}

export default AffichageAPropos