import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
function BookingFormWithState({ onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  return (
    <BookingForm
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
      submitForm={onSubmit}
    />
  );
}

test("renders static heading in BookingForm", () => {
  render(<BookingFormWithState onSubmit={jest.fn()} />);
  const heading = screen.getByText(/Book Your Experience/i);
  expect(heading).toBeInTheDocument();
});

test("submits the booking form", () => {
  const mockSubmit = jest.fn();

  render(<BookingFormWithState onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2025-04-11" },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "3" },
  });
  fireEvent.change(screen.getByLabelText(/Occasion/i), {
    target: { value: "Birthday" },
  });

  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

  expect(mockSubmit).toHaveBeenCalledWith({
    date: "2025-04-11",
    time: "17:00",
    guests: "3",
    occasion: "Birthday",
  });
});
