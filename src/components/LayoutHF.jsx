import { NavLink } from "react-router-dom"
import photo from "../assets/logo_rouge_desktop.jpg"

function Root (props) {
  return <>
    <header>
      <img src={photo} alt="logo rouge du site" />
      <nav>
        <NavLink to="/Home">Accueil</NavLink>
        <NavLink to="/APropos">A Propos</NavLink>
      </nav>
    </header>
    <main>
    {props.children}
    </main>
    <footer>
        <img src={photo} alt="logo rouge du site" />
        <p></p>
    </footer>
  </>
}

export default Root 