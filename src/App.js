/* global fetchAPI */
import React, { useState, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import BookingConfirmation from './components/BookingConfirmation';
import { fetchAPI, submitAPI } from './api';

export const initializeTimes = () => {
  const today = new Date()
  const availableTimes = fetchAPI(today)
  return availableTimes
};

  export const updateTimes = (state, action) => {
  return fetchAPI(action);
  }
function App() {
  const navigate = useNavigate()
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("0");
  const [occasion, setOccasion] = useState("");

  const submitForm = (formData) => {
    const success = submitAPI(formData)
    if (success) {
      navigate('/confirmation')
    }
    else {
      alert('your booking failed, please try again')
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path='/confirmation' element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
