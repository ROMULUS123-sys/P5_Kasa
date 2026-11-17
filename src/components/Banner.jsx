function Banner({ title, cover, description}){

//state

//comportements

//affichage
    return (
        <div className="banner">
            <img className="banner__img" src={cover} alt={description} />
            <h1 className="banner__title" >{title}</h1>
        </div>
    )
}

export default Banner