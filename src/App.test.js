import BookingForm from "./components/BookingForm";
import { fireEvent, render, screen } from "@testing-library/react";

test("renders static heading in BookingForm", () => {
  const mockProps = {
    date: "",
    setDate: jest.fn(),
    time: "",
    setTime: jest.fn(),
    guests: 1,
    setGuests: jest.fn(),
    occasion: "",
    setOccasion: jest.fn(),
    availableTimes: ["17:00", "18:00"],
    dispatch: jest.fn(),
  };

  render(<BookingForm {...mockProps} />);
  const heading = screen.getByText(/Book Your Experience/i);
  expect(heading).toBeInTheDocument();
});

test("submits the booking form", () => {
  const mockProps = {
    date: "",
    setDate: jest.fn(),
    time: "",
    setTime: jest.fn(),
    guests: 1,
    setGuests: jest.fn(),
    occasion: "",
    setOccasion: jest.fn(),
    availableTimes: ["17:00", "18:00"],
    dispatch: jest.fn(),
  };

  render(<BookingForm {...mockProps} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2025-04-11" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: '3'}
 })
 fireEvent.change(screen.getByLabelText(/Occasion/i), {
  target: { value: "Birthday"}
 })
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

  expect(mockProps.setDate).toHaveBeenCalledWith("2025-04-11");
});
