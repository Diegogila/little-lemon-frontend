import { useEffect, useReducer, useState } from "react";
import "./BookingPage.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BookingForm } from "./sections/BookingForm/BookingForm";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BookingConfirmation } from "./sections/BookingConfirmation/BookingConfirmation";
import { BookingCompleted } from "./sections/BookingCompleted/BookingCompleted";

export const initializeState = (date) => window.fetchAPI(date);
export const updateTimes = (state,action) => {
  switch (action.type) {
    case 'show':
      return state = initializeState(action.date);
    default:
      throw new Error();
  }
}


function BookingPage() {
  const [isSection, setIsSection] = useState(true);
  const [availableTimes, dispatch] = useReducer(updateTimes,initializeState());
  const [isSumited, setIsSumited] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({type:"show", date: new Date()});
  },[]);

  
  const submitForm = (values) => {
    setIsSumited(window.submitAPI(values));
    navigate("/booking/confirmation", { state: values });
  }

  // useEffect(() => {
  //   setConfirmation(window.submitAPI(data));
  // },[data]);
  
  return (
    <>
      <Header isSection={isSection}/>
      <main className="booking-page">
        <Routes>
          <Route path='/' element={<BookingForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch}/>}/>
          <Route path='confirmation' element={<BookingConfirmation isSumited={isSumited} />}/>
          <Route path='completed' element={<BookingCompleted setIsSection={setIsSection}/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export { BookingPage };
