import { useState } from "react";
import "./BookingPage.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { BookingForm } from "./sections/BookingForm/BookingForm";
import { Routes, Route } from 'react-router-dom';
import { BookingConfirmation } from "./sections/BookingConfirmation/BookingConfirmation";
import { BookingCompleted } from "./sections/BookingCompleted/BookingCompleted";

function BookingPage() {
  const [isSection, setIsSection] = useState(true);

  return (
    <>
      <Header isSection={isSection}/>
      <main className="booking-page">
        <Routes>
          <Route path='/' element={<BookingForm/>}/>
          <Route path='confirmation' element={<BookingConfirmation/>}/>
          <Route path='completed' element={<BookingCompleted setIsSection={setIsSection}/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export { BookingPage };
