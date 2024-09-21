import { useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";

function BookingForm({data,setData}) {
    const navigate = useNavigate();
    const handleChange = (e) => {
      setData({...data,[e.target.name]:e.target.value});
    };
    const handleSumit = (e) => {
      e.preventDefault();
      console.log(data);
      navigate('/booking/confirmation',{state:data});
    };
    return (
          <section className="booking-form">
            <img className="booking-page__img" src="#" alt="bg" />
            <div className="booking-page__intro">
              <h2 className="subtitle">Booking</h2>
              <p className="description-text">
                Reserve your table and enjoy a unique culinary experience. Select the
                date, time, and number of guests, and fill in your details to confirm
                your reservation. If you have any special requests, feel free to
                mention them in the comments section. We look forward to welcoming
                you!
              </p>
            </div>
            <div className="booking__form">
              <form>
                <h3 className="card-title">Contant Information</h3>
                <label htmlFor="bookingName">Full Name</label>
                <input value={data.name} onChange={handleChange} name='name' type="text" id="bookingName"></input>
  
                <label htmlFor="bookingTelephone">Telephone</label>
                <input value={data.tel} onChange={handleChange} name='tel' type="number" id="bookingTelephone"></input>
  
                <label htmlFor="bookingEmail">Email</label>
                <input value={data.email} onChange={handleChange} name='email' type="email" id="bookingEmail"></input>
  
                <h3 className="card-title">Reservation Information</h3>
  
                <label htmlFor="bookingDate">Date</label>
                <input value={data.date} onChange={handleChange} name='date' type="date" id="bookingDate"></input>
  
                <label htmlFor="bookingTime">Time</label>
                <input value={data.time} onChange={handleChange} name='time' type="time" id="bookingTime"></input>
  
                <label htmlFor="bookingGuests">Guests</label>
                <input value={data.guests} onChange={handleChange} name='guests' type="number" id="bookingGuests"></input>
  
                <h3 className="card-title">Details</h3>
  
                <label htmlFor="bookingTerrace">Terrace</label>
                <input value={data.terrace} onChange={handleChange} name='terrace' type="checkbox" id="bookingTerrace"></input>
                <CallToAction text="Submit" onclick={handleSumit} />
              </form>
            </div>
  
          </section>
    );
  }
  
  export { BookingForm };