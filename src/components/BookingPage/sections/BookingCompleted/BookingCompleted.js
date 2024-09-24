import { useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";
import { useEffect } from "react";


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
            <h2>Reservation Confirmated</h2>
            <img src="#" alt="Confirmed icon"/>
            <p>Your reservation is confirmed.</p>
            <p> We look forward to xwelcoming you!</p>
            <p>If you need to make any changes, please contact us at **** or ****.</p>
            <CallToAction text="Go Back to Home" onclick={handleClick}/>
          </section>
        </>
    );
  }
  export { BookingCompleted };