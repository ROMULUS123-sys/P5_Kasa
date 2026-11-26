import '../styles/Carrousel.scss'
import { useState } from "react";
import arrowLeft from "../assets/vector-left.svg"
import arrowRight from "../assets/vector-right.svg"

function Carrousel({ pictures, title }) {

//state
const [index, setIndex] = useState(0)
const total = pictures.length

//comportements
const handleNext = () => {
    setIndex(index === total - 1 ? 0 : index + 1)
}

const handlePrevious = () => {
    setIndex(index === 0 ? total - 1 : index - 1)
}

//affichage
    return (
        <div className="carrousel">
            <img
                className="carrousel__img"
                src={pictures[index]}
                alt={`${title}, photo ${index + 1} sur ${total}`}
            />

            {total > 1 && (
                <>
                    <button className="carrousel__icon" onClick={handlePrevious}>
                        <img src={arrowLeft} alt="Image précédente" />
                    </button>
                    <button className="carrousel__icon carrousel__icon--right" onClick={handleNext}>
                        <img src={arrowRight} alt="Image suivante" />
                    </button>
                    <p className="carrousel__text">{index + 1}/{total}</p>
                </>
            )}
        </div>
    )
}

export default Carrousel
