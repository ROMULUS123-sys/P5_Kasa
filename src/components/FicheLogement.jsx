import '../styles/FicheLogement.scss'
import { useParams } from 'react-router-dom'
import Collapse from './Collapse'
import Tag from "./Tag"
import Star from './Star'


function AffichageLogement () {

//state

//comportements

//affichage
    return <>
        <div>
            <div>
                <div>
                    <h1>titre</h1>
                    <p>Description</p>
                </div>
                <div>
                    <p>Nom</p>
                    <img src="" alt="" />
                </div>
            </div>
            <div>
                <Tag/>
                <Tag/>
                <Tag/>
            </div>
            <div>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        </div>
        <div>
            <Collapse/>
            <Collapse/>
        </div>
    </>
}

export default AffichageLogement 