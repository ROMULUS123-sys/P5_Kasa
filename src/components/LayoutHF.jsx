import { NavLink } from "react-router-dom"
import photoHeader from "../assets/logo_rouge_desktop.jpg"
import photoFooter from "../assets/logo_noir_et_blanc_desktop.png"
import '../styles/Layout.scss'

function Root (props) {
    
//state

//comportements

//affichage
  return <>
    <header className="navbar">
      <img className="navbar__logo" src={photoHeader} alt="logo rouge du site" />
      <nav className="navbar__links">
        <NavLink to="/Home" className="navbar__link">Accueil</NavLink>
        <NavLink to="/APropos" className="navbar__link">A Propos</NavLink>
      </nav>
    </header>
    <main className="main">
    {props.children}
    </main>
    <footer className="footer">
        <img className="footer__logo" src={photoFooter} alt="logo blanc du site" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  </>
}

export default Root 