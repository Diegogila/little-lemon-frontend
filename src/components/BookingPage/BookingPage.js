import { useState } from "react";
import "./BookingPage.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BookingForm } from "./sections/BookingForm/BookingForm";
import { Routes, Route } from 'react-router-dom';
import { BookingConfirmation } from "./sections/BookingConfirmation/BookingConfirmation";
import { BookingCompleted } from "./sections/BookingCompleted/BookingCompleted";

function BookingPage() {

  const [bookingData, setBookingData] = useState({
    name: "",
    tel: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    terrace: false,
  });

  return (
    <>
      <Header isSection={true}/>
      <main className="booking-page">
        <Routes>
          <Route path='/' element={<BookingForm data={bookingData} setData={setBookingData}/>}/>
          <Route path='confirmation' element={<BookingConfirmation/>}/>
          <Route path='completed' element={<BookingCompleted/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export { BookingPage };
