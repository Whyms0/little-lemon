import './stylesheets/BookingForm.css';
import '../App.css';
import { useState } from 'react';

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  dispatch, 
  submitForm
}) => {
  const [touchedFields, setTouchedFields] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false
  });

  const handleBlur = (field) => {
    setTouchedFields({
      ...touchedFields,
      [field]: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  const isDateValid = date && new Date(date) >= new Date(new Date().toDateString());
  const isTimeValid = !!time;
  const isGuestsValid = guests >= 2 && guests <= 10;
  const isOccasionValid = !!occasion; // Changed this to require an occasion

  const isFormValid = () =>
    isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3 className="headin">Book Your Experience!</h3>

      {/* Date Input */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        required
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => {
          const newDate = e.target.value;
          setDate(newDate);
          dispatch(new Date(newDate));
        }}
        onBlur={() => handleBlur('date')}
      />
      {!isDateValid && touchedFields.date && (
        <p className="error">Please choose a valid date.</p>
      )}

      {/* Time Select */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
        onBlur={() => handleBlur('time')}
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {!isTimeValid && touchedFields.time && (
        <p className="error">Please select a time.</p>
      )}

      {/* Guests Input */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        placeholder="Add number of guests"
        value={guests}
        required
        onChange={(e) => setGuests(Number(e.target.value))}
        onBlur={() => handleBlur('guests')}
      />
      {!isGuestsValid && touchedFields.guests && (
        <p className="error">Minimum of 2 guests required.</p>
      )}

      {/* Occasion Select */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
        onBlur={() => handleBlur('occasion')}
      >
        <option value="">Select an occasion</option>
        {guests === 2 && <option value='date'>Date</option>}
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      {!isOccasionValid && touchedFields.occasion && (
        <p className="error">Please select an occasion</p>
      )}

      <input
        id="submitbtn"
        aria-label="On Click"
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid()}
      />
    </form>
  );
};

export default BookingForm;