import { useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";
import bg from "../../../../assets/images/restaurant.jpg";
import "./BookingForm.css";

function BookingForm({ data, setData }) {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleSumit = (e) => {
    navigate("/booking/confirmation", { state: data });
    e.preventDefault();
  };
  return (
    <>
      <img className="booking-page__img" src={bg} alt="Restaurant" />
      <section className="booking-form">
        <div className="booking-page__intro">
          <h2 className="section-title">Booking</h2>
          <p className="description-text">
            Reserve your table and enjoy a unique culinary experience. Select
            the date, time, and number of guests, and fill in your details to
            confirm your reservation. If you have any special requests, feel
            free to mention them in the comments section. We look forward to
            welcoming you!
          </p>
        </div>
        <div className="booking__form-container">
          <form>
            <h3 className="card-title">Contant Information</h3>
            <label className="input-label" htmlFor="bookingName">
              Full Name
            </label>
            <input
              value={data.name}
              onChange={handleChange}
              name="name"
              type="text"
              id="bookingName"
              required
            />

            <label className="input-label" htmlFor="bookingTelephone">
              Telephone
            </label>
            <input
              value={data.tel}
              onChange={handleChange}
              name="tel"
              type="tel"
              id="bookingTelephone"
              required
            />

            <label className="input-label" htmlFor="bookingEmail">
              Email
            </label>
            <input
              value={data.email}
              onChange={handleChange}
              name="email"
              type="email"
              id="bookingEmail"
              required
            />

            <h3 className="card-title">Reservation Information</h3>

            <label className="input-label" htmlFor="bookingDate">
              Date
            </label>
            <input
              value={data.date}
              onChange={handleChange}
              name="date"
              type="date"
              id="bookingDate"
              min={new Date().toISOString().split("T")[0]}
              required
            />

            <label className="input-label" htmlFor="bookingTime">
              Time
            </label>
            <select id="bookingTime" value={data.time} onChange={handleChange} name="time" required>
              <option value="">Select a time</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
            </select>

            <label className="input-label" htmlFor="bookingGuests">
              Guests
            </label>
            <input
              value={data.guests}
              onChange={handleChange}
              name="guests"
              type="number"
              id="bookingGuests"
              required
            />

            <h3 className="card-title">Details</h3>
            <div className="input-container">
              <label className="input-label" htmlFor="bookingTerrace">
                Terrace
              </label>
              <input
                className="input-checkbox"
                checked={data.terrace}
                onChange={handleChange}
                name="terrace"
                type="checkbox"
                id="bookingTerrace"
              />
            </div>
            <CallToAction
              type="submit"
              className="booking-form__submit"
              text="Submit"
              onClick={handleSumit}
            />
          </form>
        </div>
      </section>
    </>
  );
}

export { BookingForm };
