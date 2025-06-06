import React, {useState, useReducer} from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';

function App() {
  const initializeTimes = () => {
    return (
      ["17:00", "17:30", "18:00", "18:30", '19:00', "20:00", "20:30"]
    )
  }
  const updateTimes = (state, action) => {
    return (
      initializeTimes()
    )
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  const [date , setDate] = useState("")
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState('0')
  const [occasion, setOccasion] = useState('')
    return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route
  path='/reservations'
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
    />
  }
/>
   </Routes>
   <Footer />
   </>
  );
}

export default App;
