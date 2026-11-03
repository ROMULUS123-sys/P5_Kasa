import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageError from "./Error404.jsx"
import Root from "./LayoutHF.jsx"
import Affichage from './Home.jsx'
import AffichageAPropos from './APropos.jsx'
import AffichageLogement from './FicheLogement.jsx'

const router = createBrowserRouter([

    {
        path: "/",
        element: <Root><Affichage/></Root> 
    },
    {
      path: "/Home",
      element: <Root><Affichage/></Root>
    },
    {
      path: "/APropos",
      element: <Root><AffichageAPropos/></Root>
    },
    {
      path: "/FicheLogement/:id",
      element: <Root><AffichageLogement/></Root>
    },
    {
        path: "*",
        element: <Root><PageError/></Root>
    }

])

function Chemin (){
return <RouterProvider router={router} />;
}


export default Chemin