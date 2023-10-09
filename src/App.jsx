import './App.css';
import Header from './components/Header';
import HeaderButtomScroll from './components/headerButtomScroll';
import MainHi from './components/mainHi';
import PricesItem from './components/pricesItem';
import Works from './components/works';
import TechologItem from './components/technologItem';


function app(){

  const infoCards = [
    {
        cardsName: 'Название услуги1',
        cardsPrice: '$ 1,000',
    },
    {
        cardsName: 'Название услуги2',
        cardsPrice: '$ 1,002',
    },
    {
        cardsName: 'Название услуги3',
        cardsPrice: '$ 1,003',
    } 
]

const technologes = [
  {
      technoTitle: 'Java Script1',
      technoInfo: 'Небольшая информация1' 

  },
  {
      technoTitle: 'Java Script12',
      technoInfo: 'Небольшая информация12' 

  },
  {
      technoTitle: 'Java Script13',
      technoInfo: 'Небольшая информация13' 

  },
  {
      technoTitle: 'Java Script14',
      technoInfo: 'Небольшая информация14' 

  },
]

  return(
    <div className="wrapper">
      <header className="header">
        <div className="container header__row">
            <Header/>
        </div>
      </header>
      <main className="main">
        <section className="main__hi">
          <div className="container main__hi__row">
            <MainHi/>
            <div className="main__hi__button__scroll">
              <HeaderButtomScroll/>
            </div>
          </div>
         </section>
         <section className="main__prices">
          <div className="container">
            <h2 className="main__prices__title">УСЛУГИ</h2>
            <div className="main__prices__row">
              <PricesItem infoCards={infoCards}/>
            </div>
          </div>
        </section>
        <section className="works">
          <div className="container">
            <h2 className="works__title">НАШИ РАБОТЫ</h2>
              <Works/>
          </div>
        </section>
        <section className="description__technolog">
          <div className="container">
            <TechologItem technologes={technologes}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default app
