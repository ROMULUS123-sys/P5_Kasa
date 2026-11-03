import { NavLink } from "react-router-dom"

function Root (props) {
  return <>
    <header>
      <img src="" alt="" />
      <nav>
        <NavLink to="/Home">Accueil</NavLink>
        <NavLink to="/APropos">A Propos</NavLink>
      </nav>
    </header>
    <main>
    {props.children}
    </main>
    <footer>
        <img src="" alt="" />
        <p></p>
    </footer>
  </>
}

export default Root 