import CardContainer from '../CardContainer/CardContainer';
import TestimonialCard from '../TestimonialCard.css/TestimonialCard';
import './Testimonials.css'
import adrianImage from '../../assets/images/adrian.png'
import sofiaImage from '../../assets/images/sofia.png'
import marceloImage from '../../assets/images/marcelo.png'

const testimonials = [
    {
        name: 'Adrian',
        image: adrianImage,
        rate: 5,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'Sofia',
        image: sofiaImage,
        rate: 3,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'Mercelo',
        image: marceloImage,
        rate: 4,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

function Testimonials(){
    return (
        <section className="testimonials-section">
            <h2 className='testimonials-section__title section-title'>Testimonials</h2>
            <CardContainer>
                {testimonials.map((tm,i) => {
                    return <TestimonialCard 
                    key={i}
                    name={tm.name}
                    image={tm.image}
                    rate={tm.rate}
                    comment={tm.comment}/>
                })}
            </CardContainer>
        </section>
    )
}

export default Testimonials;