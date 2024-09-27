import { useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";
import './BookingConfirmation.css'
import { submitAPI } from "../../../../utils/api";

function BookingConfirmation({formState}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const confirmation = submitAPI(formState);
      if(confirmation){
        navigate('/booking/completed');
      }
    }



    return (
      <section className="booking-confirmation">
        <h2 className="subtitle">Reservation Summary</h2>
        <p className="booking__name-confirmation">{formState.name}</p>
        <p className="booking__email-confirmation">{formState.email}</p>
        <hr/>
        <div className="booking__confirmacion-table">
          <p>Contact</p>
          <p className="lead-text">+52 {formState.tel}</p>
          <p>Date</p>
          <p className="lead-text">{formState.date}</p>
          <p>Time</p>
          <p className="lead-text">{formState.time}</p>
          <p>Occasion</p>
          <p className="lead-text">{formState.occasion}</p>
          <p>Table for</p>
          <p className="lead-text">{formState.guests}</p>
          <p>Details</p>
          {formState.terrace ? <p className="lead-text">Terrace</p> : <p className="lead-text">No</p>}
        </div>
        <hr/>
        <h3 className="description-text">
          Please note that your reservation is subject to availability. We will
          do our best to accommodate your request, but table availability is not
          guaranteed until you receive a confirmation. If we are unable to meet
          your preferred time, we will contact you with alternative options.
        </h3>
        <CallToAction type="submit" className="confirmation__button" text="Confirm" onclick={handleSubmit} />
      </section>
    );
  }
  export { BookingConfirmation };