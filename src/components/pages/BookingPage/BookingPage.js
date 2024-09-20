import { CallToAction } from '../../CallToAction/CallToAction';
import './BookingPage.css'

function BookingPage(){
    const handleSumit = () => {
        console.log('reservaded')
    }

    return (
      <section className="booking-page">
        <img className="booking-page__img" src='#' alt='bg'/>
        <div className="booking__intro">
          <h2 className='subtitle'>Booking</h2>
          <p className='description-text'>
            Reserve your table and enjoy a unique culinary experience. Select
            the date, time, and number of guests, and fill in your details to
            confirm your reservation. If you have any special requests, feel
            free to mention them in the comments section. We look forward to
            welcoming you!
          </p>
        </div>
        <div className='booking__form'>
            <form>
                <h3 className='card-title'>Contant Information</h3>
                <label htmlFor='bookingName'>Full Name</label>
                <input type='text' id='bookingName'></input>

                <label htmlFor='bookingTelephone'>Telephone</label>
                <input type='number' id='bookingTelephone'></input>

                <label htmlFor='bookingEmail'>Email</label>
                <input type='email' id='bookingEmail'></input>

                <h3 className='card-title'>Reservation Information</h3>

                <label htmlFor='bookingDate'>Date</label>
                <input type='date' id='bookingDate'></input>

                <label htmlFor='bookingTime'>Time</label>
                <input type='time' id='bookingTime'></input>

                <label htmlFor='bookingGuests'>Email</label>
                <input type='number' id='bookingGuests'></input>

                <h3 className='card-title'>Details</h3>

                <label htmlFor='bookingTerrace'>Terrace</label>
                <input type='checkbox' id='bookingTerrace'></input>
                <CallToAction text='Submit' onclick={handleSumit}/>
            </form>
        </div>

      </section>
    );
}

export {BookingPage};