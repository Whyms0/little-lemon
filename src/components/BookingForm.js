    import React, {useState} from 'react'
    import './stylesheets/BookingForm.css'
    import '../App.css'
    const BookingForm = ({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatch, submitForm }) => {
        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = { date, time, guests, occasion };
            submitForm(formData);
        }
        return (
        <>
            <form className='booking-form' onSubmit={handleSubmit}>

        <h3 className='headin'>Book Your Experience !</h3>
        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            value={date}
            required
            onChange={(e) => {
            const newDate = e.target.value;
            setDate(newDate)
            dispatch(new Date(e.target.value))
  }}
/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}>
            {availableTimes.map(time => 
                <option key={time}>{time}</option>
            )}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select 
        id="occasion"
        value={occasion}
        onChange={ (e) => setOccasion(e.target.value)
        }
        >
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <input id='submitbtn' type="submit" value="Make Your reservation" />
            </form>
        </>
        );
    }

    export default BookingForm