import { useLocation, useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";
import './BookingConfirmation.css'

function BookingConfirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state || {};

    const handleClick = () => {
        navigate('/booking/completed');
    }


    return (
      <section className="booking-confirmation">
        <h2 className="subtitle">Reservation Summary</h2>
        <div className="booking-onfirmation__name-email">
          <p className="booking__name-confirmation">{data.name}</p>
          <p className="booking__email-confirmation">{data.email}</p>
        </div>
        <div className="booking__confirmacion-table">
          <p>Date</p>
          <p className="lead-text">{data.date}</p>
          <p>Time</p>
          <p className="lead-text">{data.time}</p>
          <p>Table for</p>
          <p className="lead-text">{data.guests}</p>
          <p>Details</p>
          {data.terrace ? <p className="lead-text">Terrace</p> : <p className="lead-text">No</p>}
        </div>
        <h3 className="description-text">
          Please note that your reservation is subject to availability. We will
          do our best to accommodate your request, but table availability is not
          guaranteed until you receive a confirmation. If we are unable to meet
          your preferred time, we will contact you with alternative options.
        </h3>
        <CallToAction text="Confirm" onclick={handleClick} />
      </section>
    );
  }
  export { BookingConfirmation };