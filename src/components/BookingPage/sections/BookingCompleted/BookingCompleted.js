import { useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";
import { useEffect } from "react";
import './BookingCompleted.css'
import bookingCompleted from '../../../../assets/icons/Booking-completed.svg'


function BookingCompleted({setIsSection}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  useEffect(() => {
    setIsSection(false);
  },[setIsSection]);

    return (
        <>
          <section className="booking-completed">
            <div className="booking-completed__confirmation">
              <h2 className="booking-completed__title subtitle">Reservation Confirmated</h2>
              <img src={bookingCompleted} alt="Confirmed icon"/>
              <div>
                <p className="lead-text">Your reservation is confirmed.</p>
                <p className="lead-text"> We look forward to welcoming you!</p>
              </div>
            </div>
            <p className="booking-completed__warnings description-text">If you need to make any changes, please contact us at **** or ****.</p>
            <CallToAction className="booking-completed__button" text="Go Back to Home" onclick={handleClick}/>
          </section>
        </>
    );
  }
  export { BookingCompleted };