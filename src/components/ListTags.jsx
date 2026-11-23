import '../styles/ListTags.scss'
import Tag from './Tag'

function ListTags({ tags }) {

//state

//comportements

//affichage
    return (
        <ul className="list-tags">
            {tags.map((tag) => (
                <Tag key={tag} name={tag}/>
            ))}
        </ul>
    )
}

export default ListTags
