import './HighlightCard.css'

function HighlightCard(){
    return (
      <article className="highlight-card">
        <img className="highlight-card__img" src="#" alt="" />
        <div className="highlight-card__content">
          <h3 className="highlight-card__title">Greek Salad</h3>
          <p className="highlight-card__price">$10.00</p>
          <p className="highlight-card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
          <button className='highlight-card__button' type="button">Order delivery <span>#</span></button>
        </div>
      </article>
    );
}

export default HighlightCard;