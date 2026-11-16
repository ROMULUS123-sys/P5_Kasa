import '../styles/Error404.scss'
import { Link } from "react-router-dom"


function PageError () {
    return <section className='erreur'>
        <h1 className='erreur__title'>404</h1>
        <p className='erreur__paragraphe'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/Home" className='erreur__link'>Retourner sur la page d'accueil</Link>
    </section>
}

export default PageError 