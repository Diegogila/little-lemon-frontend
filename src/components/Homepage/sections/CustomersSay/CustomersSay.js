import CardContainer from '../../../cards/CardsContainer/CardsContainer';
import TestimonialCard from '../../../cards/TestimonialCard.css/TestimonialCard';
import './CustomersSay.css'
import adrianImage from '../../../../assets/images/adrian.png'
import sofiaImage from '../../../../assets/images/sofia.png'
import marceloImage from '../../../../assets/images/marcelo.png'

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

function CustomersSay(){
    return (
        <section className="customers-say-section">
            <h2 className='customers-say-section__title section-title'>Testimonials</h2>
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

export default CustomersSay;