import './CardContainer.css'

function CardContainer(props){
    return (
        <div className="card-container">
            <div className='card-track'>{props.children}</div>
        </div>
    )
}

export default CardContainer;