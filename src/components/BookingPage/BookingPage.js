import { useEffect, useReducer, useState } from "react";
import "./BookingPage.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BookingForm } from "./sections/BookingForm/BookingForm";
import { Routes, Route } from 'react-router-dom';
import { BookingConfirmation } from "./sections/BookingConfirmation/BookingConfirmation";
import { BookingCompleted } from "./sections/BookingCompleted/BookingCompleted";
import { fetchAPI } from "../../utils/api";

export const initializeTimes  = (date) => fetchAPI(date);

export const updateTimes = (state,action) => {
  switch (action.type) {
    case 'update':
      return initializeTimes(action.date);
    default:
      throw new Error();
  }
}


function BookingPage() {
  const [isSection, setIsSection] = useState(true);
  const [availableTimes, dispatch] = useReducer(updateTimes,[]);
  const initialFormState = {
    name: "",
    tel: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    occasion: "Casual",
    guests: 1,
    terrace: false,
  };
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    dispatch({type:"update", date: new Date()});
  },[]);


  return (
    <>
      <Header isSection={isSection}/>
      <main className="booking-page">
        <Routes>
          <Route path='/' element={<BookingForm formState={formState} setFormState={setFormState} availableTimes={availableTimes} dispatch={dispatch}/>}/>
          <Route path='confirmation' element={<BookingConfirmation formState={formState}/>}/>
          <Route path='completed' element={<BookingCompleted setIsSection={setIsSection} />}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export { BookingPage };
