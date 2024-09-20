import './Homepage.css'
import image from '../../../assets/images/restauranfood.jpg'
import { CallToAction } from '../../CallToAction/CallToAction';

function Homepage(){
    return (
      <section className="homepage-section">
        <div className="homepage-section__text">
            <div className='homepage-section__titles'>
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
        <div className="homepage-section__image-container">
            <img src={image} alt='Restaurant food'/>
        </div>
      </section>
    );
}

export default Homepage;