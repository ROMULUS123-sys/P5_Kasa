import '../styles/FicheLogement.scss'
import { useParams } from 'react-router-dom'


function AffichageLogement () {
    const {id} = useParams()
   return <h1>Fiche Logement {id}</h1>
}

export default AffichageLogement 