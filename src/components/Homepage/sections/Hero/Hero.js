import './Hero.css'
import image from '../../../../assets/images/restauranfood.jpg'
import { CallToAction } from '../../../CallToAction/CallToAction';

function Hero(){
    return (
      <section className="hero-section">
        <div className="hero-section__text">
            <div className='hero-section__titles'>
                <h1 className='cosmetic-title'>Little Lemon</h1>
                <h2 className='subtitle'>Chicago</h2>
            </div>
          <p className='lead-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
            <CallToAction text='Reserve a table' onclick={() => console.log('reserved')}/>
        </div>
        <div className="hero-section__image-container">
            <img src={image} alt='Restaurant food'/>
        </div>
      </section>
    );
}

export default Hero;