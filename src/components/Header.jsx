
function Header(){
    return(
        <>
        <div className="header__logo">
            <a href="##" className="logo"><img src="./img/Group 3.svg" alt="logo"/></a>
            <div className="header__logo__text"><img src="./img/WEBKUMA.svg" alt=""/></div>
        </div>
        <nav className="header__nav">
            <ul className="header__nav__list">
                <li className="header__nav__list__item">RU</li>
                <li className="header__nav__list__item">ENG</li>
                <li className="header__nav__list__item">НАШИ РАБОТЫ</li>
                <li className="header__nav__list__item">УСЛУГИ</li>
            </ul>
        </nav>
        </>
    )
}
export default Header