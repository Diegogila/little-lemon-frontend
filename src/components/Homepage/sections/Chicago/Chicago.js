import './Chicago.css'
import image1 from '../../../../assets/images/restaurant.jpg'
import image2 from '../../../../assets/images/restaurant-chef-B.jpg'


function Chicago(){
    return (
      <section className="chicago-section">
        <article className="chicago-section__container">
          <div className="chicago-section__info">
            <div className='chicago-section__titles'>
                <h1 className='display-title'>Little Lemon</h1>
                <h2 className='subtitle'>Chicago</h2>
            </div>
            <p className='lead-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="chicago-section__image">
            <img src={image1} alt="retaurant" />
            <img src={image2} alt="chef" />
          </div>
        </article>
      </section>
    );
}

export default Chicago;