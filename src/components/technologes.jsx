
function technologes(props){
    return(
        <>
        <article className="description__technolog__item">
            <div className="description__technolog__left">
                <div className="description__technolog__logo">
                    <img src="./img/logoJS.svg" alt="" className="description__technolog__img" />
                </div>
                <div className="description__technolog__text">
                    <h1 className="description__technolog__title">{props.technoTitle}</h1>
                    <p className="description__technolog__info">{props.technoInfo}</p>
                </div>
            </div>
            <button className="description__technolog__button"><img src="./img/Vector3.svg" alt="" /></button>
        </article>
        </>
    )
}
export default technologes