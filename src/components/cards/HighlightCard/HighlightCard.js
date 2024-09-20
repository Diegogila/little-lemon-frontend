import './HighlightCard.css'

function HighlightCard({title,price,description,image}){
    return (
      <article className="highlight-card">
        <img className="highlight-card__img" src={image} alt={title} />
        <div className="highlight-card__content">
          <h3 className="highlight-card__title card-title">{title}</h3>
          <p className="highlight-card__price description-text">${price}</p>
          <p className="highlight-card__description description-text">{description}</p>
          <button className='highlight-card__button' type="button">Order delivery <span></span></button>
        </div>
      </article>
    );
}

export default HighlightCard;