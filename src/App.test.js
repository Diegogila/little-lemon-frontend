import { render, screen,fireEvent  } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BookingPage } from "./components/BookingPage/BookingPage";
import { initializeTimes } from "./components/BookingPage/BookingPage";
import { updateTimes } from "./components/BookingPage/BookingPage";

describe("BookingPage Main", () => {
  test("Renders the BookingForm heading", () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const headingElement = screen.getByText("Book Now!");
    expect(headingElement).toBeInTheDocument();
  });

  test("InitializeTimes should return the correct initial times", () => {
    const result = initializeTimes(new Date());
    expect(result.length).toBeGreaterThan(0);
  });

  test("Should return the state updated", () => {
    const state = initializeTimes(new Date());

    const action = { type: "update", date: new Date() };

    const newState = updateTimes(state, action);

    expect(newState).toEqual(state);
  });
});

describe("BookingPage Form", () => {
  const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];

  const setup = () => {

    render(<MemoryRouter><BookingPage availableTimes={availableTimes} /></MemoryRouter>);
  };

  test("renders the form correctly", () => {
    setup();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telephone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Terrace/i)).toBeInTheDocument();
  });

  test("shows validation errors when fields are empty", () => {
    setup();

    fireEvent.blur(screen.getByLabelText(/Name/i));
    fireEvent.blur(screen.getByLabelText(/Telephone/i));
    fireEvent.blur(screen.getByLabelText(/Email/i));

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Telephone is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  test("accepts valid input and submits successfully", () => {
    setup();

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Telephone/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: "27-09-2024" },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: "10:00 AM" },
    });
    fireEvent.change(screen.getByLabelText(/Guests/i), {
      target: { value: "3" },
    });
    fireEvent.click(screen.getByLabelText(/Terrace/i)); // Check the terrace option
    
    // Submit the form
    fireEvent.submit(screen.getByText(/Submit/i));
    
    // Assert that no validation errors are displayed after submission
    expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Telephone is required/i)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Time is required/i)).not.toBeInTheDocument();

  });
});
