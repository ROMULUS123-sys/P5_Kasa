import '../styles/Error404.scss'
import { Link } from "react-router-dom"


function PageError () {
    return <section>
        <h1>404;</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/Home">Retourner sur la page d'accueil</Link>
    </section>
}

export default PageError 