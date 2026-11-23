import '../styles/Star.scss'
import starActive from '../assets/star-active.svg'
import starInactive from '../assets/star-inactive.svg'

function Star({ grey }){

//state

//comportements

//affichage

    return <img className="star" src={grey ? starInactive : starActive} alt="" />
}

export default Star
