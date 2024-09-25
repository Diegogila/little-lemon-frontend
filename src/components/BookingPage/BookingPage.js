import { useReducer, useState } from "react";
import "./BookingPage.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BookingForm } from "./sections/BookingForm/BookingForm";
import { Routes, Route } from 'react-router-dom';
import { BookingConfirmation } from "./sections/BookingConfirmation/BookingConfirmation";
import { BookingCompleted } from "./sections/BookingCompleted/BookingCompleted";

function BookingPage() {
  const [isSection, setIsSection] = useState(true);
  const initialTimes = () => ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
  const updateTimes = (state,action) => {
    return state
  }

  const [availableTimes, dispatch] = useReducer(updateTimes,initialTimes());

  return (
    <>
      <Header isSection={isSection}/>
      <main className="booking-page">
        <Routes>
          <Route path='/' element={<BookingForm availableTimes={availableTimes} dispatch={dispatch}/>}/>
          <Route path='confirmation' element={<BookingConfirmation/>}/>
          <Route path='completed' element={<BookingCompleted setIsSection={setIsSection}/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export { BookingPage };
