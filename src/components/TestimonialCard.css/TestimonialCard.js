import './TestimonialCard.css'
import starIcon from '../../assets/icons/star.svg'

function TestimonialCard({name,image,rate,comment}){
  console.log(name,rate)
  return (
      <article className="testimonial-card">
        <h3 className="testimonial-card__title card-title">{name}</h3>
        <img className="testimonial-card__img" src={image} alt={name} />
        <div className="testimonial-card__rate description-text">
          {[...Array(rate)].map((_,i) => <img key={i} src={starIcon} alt='star'/>)}
          </div>
        <p className="testimonial-card__comment description-text">{comment}</p>
      </article>
    );
}

export default TestimonialCard;