import Technologes from './technologes';


function techologItem(props){
    return(
        <>
        <Technologes technoTitle={props.technologes[0].technoTitle} technoInfo={props.technologes[0].technoInfo}/>
        <Technologes technoTitle={props.technologes[1].technoTitle} technoInfo={props.technologes[1].technoInfo}/>
        <Technologes technoTitle={props.technologes[2].technoTitle} technoInfo={props.technologes[2].technoInfo}/>
        <Technologes technoTitle={props.technologes[3].technoTitle} technoInfo={props.technologes[3].technoInfo}/>
        </>
    )
}
export default techologItem