import { useLocation, useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";

function BookingConfirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state || {};

    const handleClick = () => {
        navigate('/booking/completed');
    }

    return (
            <section className="booking-confirmation">
              BookingConfirmation
              <p>{data.name}</p>
              <CallToAction text='Confirm' onclick={handleClick}/>
            </section>
    );
  }
  export { BookingConfirmation };