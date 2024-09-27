import { useNavigate } from "react-router-dom";
import bg from "../../../../assets/images/restaurant.jpg";
import { CallToAction } from "../../../CallToAction/CallToAction";
import "./BookingForm.css";
import {useState } from "react";

function BookingForm({ formState, setFormState, availableTimes, dispatch }) {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "date") {
      dispatch({ type: "update", date: new Date(value) });
    }

    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    if (Object.values(errors).includes(false)) {
      navigate("/booking/confirmation");
    }
  };

  //-------------Validation-----------------------
  const validateForm = (e) => {
    const { name } = e.target;
    if (!formState[name]) setErrors({ ...errors, [name]: true });
    else setErrors({ ...errors, [name]: false });
  };
  //-------------------------------------------------------

  return (
    <>
      <img className="booking-page__img" src={bg} alt="Restaurant" />
      <section className="booking-form">
        <div className="booking-page__intro">
          <h2 className="section-title">Book Now!</h2>
          <p className="description-text">
            Reserve your table and enjoy a unique culinary experience. Select
            the date, time, and number of guests, and fill in your details to
            confirm your reservation. If you have any special requests, feel
            free to mention them in the comments section. We look forward to
            welcoming you!
          </p>
        </div>
        <div className="booking__form-container">
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label className="input-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                onBlur={validateForm}
                aria-label="Type Name"
                required
              />
              {errors.name && (
                <span style={{ color: "red" }}>Name is required</span>
              )}
            </div>

            <div className="input-div">
              <label className="input-label" htmlFor="tel">
                Telephone
              </label>
              <input
                type="number"
                id="tel"
                name="tel"
                value={formState.tel}
                onChange={handleInputChange}
                onBlur={validateForm}
                aria-label="Type Telephone"
                required
              />
              {errors.tel && (
                <span style={{ color: "red" }}>Telephone is required</span>
              )}
            </div>

            <div className="input-div">
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                onBlur={validateForm}
                aria-label="Type Email"
                required
              />
              {errors.email && (
                <span style={{ color: "red" }}>Email is required</span>
              )}
            </div>

            <h3 className="card-title">Reservation Information</h3>

            <div className="input-div">
              <label className="input-label" htmlFor="bookingDate" >
                Date
              </label>
              <input
                type="date"
                id="bookingDate"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                value={formState.date}
                onChange={handleInputChange}
                onBlur={validateForm}
                aria-label="Select Date"
              />
            </div>

            <div className="input-div">
              <label className="input-label" htmlFor="bookingTime">
                Time
              </label>
              <select
                id="bookingTime"
                name="time"
                value={formState.time}
                onChange={handleInputChange}
                onBlur={validateForm}
                aria-label="Select Time"
              >
                <option value="">Select a time</option>
                {availableTimes.map((time, i) => (
                  <option key={i} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && (
                <span style={{ color: "red" }}>Time is required</span>
              )}
            </div>

            <div className="input-div">
              <label className="input-label" htmlFor="bookingOccasion" >
                Occasion
              </label>
              <select
                id="bookingOccasion"
                name="occasion"
                value={formState.occasion}
                onChange={handleInputChange}
                aria-label="Select Occasion"
              >
                <option value="Casual">Casual</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="input-container">
              <label className="input-label" htmlFor="bookingGuests">
                Guests
              </label>
              <input
                className="input-number"
                id="bookingGuests"
                type="number"
                name="guests"
                min="1"
                value={formState.guests}
                onChange={handleInputChange}
                aria-label="Type Number of Guests"
              />
              {errors.guests && (
                <span style={{ color: "red" }}>{errors.guests}</span>
              )}
            </div>

            <h3 className="card-title">Details</h3>

            <div className="input-container">
              <label className="input-label" htmlFor="bookingTerrace">
                Terrace
              </label>
              <input
                className="input-checkbox"
                id="bookingTerrace"
                type="checkbox"
                name="terrace"
                checked={formState.terrace}
                onChange={handleInputChange}
                aria-label="On click if you want in Terrace"
              />
            </div>

            <CallToAction
              text="Submit"
              type="submit"
              className="booking-form__submit"
              aria-label="Sumit form"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export { BookingForm };
