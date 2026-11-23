import '../styles/Collapse.scss'
import { useState } from "react";

function Collapse({ title, text, img}) {

//state
const [close , setclose] = useState(true)

//comportements

const handlechange = () => {
    setclose(!close)
}

//affichage
    return (
    <div className={close ? "collapse" : "collapse collapse--open"}>
        <div className="collapse__visible">
            <h2 className="collapse__title">{title}</h2>
            <button className="collapse__button" onClick={handlechange} ><img src={img} alt="icone de fleche vers le bas" /></button>
        </div>
        <div className="collapse__paragraphe">{text}</div>
    </div>
)
}

export default Collapse