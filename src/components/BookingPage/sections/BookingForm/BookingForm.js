import { useNavigate } from "react-router-dom";
import { CallToAction } from "../../../CallToAction/CallToAction";
import bg from "../../../../assets/images/restaurant.jpg";
import "./BookingForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookingForm({availableTimes,setAvailableTimes}) {
  const navigate = useNavigate();


  const handleSumit = (values) => {
    navigate("/booking/confirmation", { state: values });
  };

  const initialFormState = {
    name: "",
    tel: "",
    email: "",
    date: "",
    time: "",
    occasion:"",
    guests: 1,
    terrace: false,
  };


  //-------------Validation-----------------------
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("The name is required"),
    tel: Yup.number()
      .integer()
      .positive()
      .required("The telephone is required"),
    email: Yup.string()
      .email("We need a valid email")
      .required("Email is required"),
    date: Yup.date().required("Date is required").min(new Date()),
    time: Yup.string().required("We need a time"),
    guests: Yup.number().positive().integer(),
  });
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
          <Formik
            initialValues={initialFormState}
            validationSchema={validationSchema}
            onSubmit={handleSumit}
          >
            {() => (
              <Form>
                <div className="input-div">
                  <label className="input-label">Name</label>
                  <Field type="text" name="name" />
                  <ErrorMessage
                    name="name"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-div">
                  <label className="input-label">Telephone</label>
                  <Field type="number" name="tel" />
                  <ErrorMessage
                    name="tel"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-div">
                  <label className="input-label">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>

                <h3 className="card-title">Reservation Information</h3>

                <div className="input-div">
                  <label className="input-label" htmlFor="bookingDate">
                    Date
                  </label>
                  <Field
                    name="date"
                    type="date"
                    id="bookingDate"
                    min={new Date().toISOString().split("T")[0]}
                    className="input-field"
                  />
                  <ErrorMessage
                    name="date"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-div">
                  <label className="input-label" htmlFor="bookingTime">
                    Time
                  </label>
                  <Field
                    as="select"
                    name="time"
                    id="bookingTime"
                    className="input-field"
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map((time,i) => {
                      return <option key={i} value={time}>{time}</option>
                    })}
                    {/* <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option> */}
                  </Field>
                  <ErrorMessage
                    name="time"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-div">
                  <label className="input-label" htmlFor="bookingOccasion">
                    Occasion
                  </label>
                  <Field
                    as="select"
                    name="occasion"
                    id="bookingOccasion"
                    className="input-field"
                  >
                    <option value="Casual">Casual</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                  </Field>
                  <ErrorMessage
                    name="time"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-container">
                  <label className="input-label" htmlFor="bookingGuests">
                    Guests
                  </label>
                  <Field
                    name="guests"
                    type="number"
                    min="1"
                    id="bookingGuests"
                    className="input-number"
                  />
                  <ErrorMessage
                    name="guests"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
                <h3 className="card-title">Details</h3>
                <div className="input-container">
                  <label className="input-label" htmlFor="bookingTerrace">
                    Terrace
                  </label>
                  <Field
                    name="terrace"
                    type="checkbox"
                    id="bookingTerrace"
                    className="input-checkbox"
                  />
                </div>
                <CallToAction className="booking-form__submit" text="Submit" type="submit"/>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}

export { BookingForm };
