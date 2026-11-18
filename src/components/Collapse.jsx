import '../styles/Collapse.scss'
import { useState } from "react";

function Collapse({ title, text, img}) {

//state
const [open , setOpen] = useState()

//comportements

//affichage
    return (
    <div className="collapse">
        <div className="collapse__visible">
            <h2 className="collapse__title">{title}</h2>
            <button className="collapse__button"><img src={img} alt="" /></button>
        </div>
        <p className="collapse__paragraphe">{text}</p>
    </div>
)
}

export default Collapse