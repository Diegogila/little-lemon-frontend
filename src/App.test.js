import { render, screen } from '@testing-library/react';
import App from './App';
import { BookingForm } from './components/BookingPage/sections/BookingForm/BookingForm';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react';
import { initializeTimes } from './components/BookingPage/BookingPage'; // Asegúrate de importar correctamente

test('initializeTimes should return the correct initial times', () => {
  const expectedTimes = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('Renders the BookingForm heading', () => {
  const availableTimes = ['09:00', '10:00', '11:00', '12:00']

  act(() => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} />
      </MemoryRouter>
    );
  });
  const headingElement = screen.getByText("Book Now!");
  expect(headingElement).toBeInTheDocument();
});
