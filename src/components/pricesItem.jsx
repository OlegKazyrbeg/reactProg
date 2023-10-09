import PricesMain from './prices';
function pricesItem(props){

    return(
        <>
            <PricesMain title={props.infoCards[0].cardsName}
                        price={props.infoCards[0].cardsPrice}>
            </PricesMain>
            <PricesMain title={props.infoCards[1].cardsName}
                        price={props.infoCards[1].cardsPrice}>
            </PricesMain>
            <PricesMain title={props.infoCards[2].cardsName}
                        price={props.infoCards[2].cardsPrice}>
            </PricesMain> 
        </>
    )
}
export default pricesItem