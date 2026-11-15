import '../styles/APropos.scss'
import Banner from './Banner'
import Collapse from './Collapse'

function AffichageAPropos () {
    return<section>
        <Banner/>
        <div>
            <Collapse/>
            <Collapse/>
            <Collapse/>
            <Collapse/>
        </div>
    </section>
}

export default AffichageAPropos