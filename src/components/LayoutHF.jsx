import { NavLink } from "react-router-dom"
import photo from "../assets/logo_rouge_desktop.jpg"
import '../styles/Layout.scss'

function Root (props) {
  return <>
    <header className="navbar">
      <img className="navbar__logo" src={photo} alt="logo rouge du site" />
      <nav className="navbar__links">
        <NavLink to="/Home" className="navbar__link">Accueil</NavLink>
        <NavLink to="/APropos" className="navbar__link">A Propos</NavLink>
      </nav>
    </header>
    <main>
    {props.children}
    </main>
    <footer className="footer">
        <img className="footer__logo" src={photo} alt="logo blanc du site" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  </>
}

export default Root 