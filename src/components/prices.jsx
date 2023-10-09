
function priceMain(props){
    return(
        <article className="prices__card">
            <h1 className="prices__card__title">{props.title}</h1>
            <div className="prices__card__price">{props.price}</div>
            <ul className="prices__card__list">
                <li className="prices__card__list__item">Из чего состоит услуга</li>
                <li className="prices__card__list__item">Из чего состоит услуга</li>
                <li className="prices__card__list__item">Из чего состоит услуга</li>
                <li className="prices__card__list__item">Из чего состоит услуга</li>
            </ul>
            <button className="prices__card__button">Выбрать</button>
        </article>
    )
}
export default priceMain