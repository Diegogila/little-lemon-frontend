import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookingPage} from './components/BookingPage/BookingPage';
import { initializeTimes } from './components/BookingPage/BookingPage';
import { updateTimes } from './components/BookingPage/BookingPage';


test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

  const headingElement = screen.getByText("Book Now!");
  expect(headingElement).toBeInTheDocument();
});

test('InitializeTimes should return the correct initial times', () => {
  const expectedTimes = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('Should return the state updated', () => {
  const state = initializeTimes();

  const action = { type: 'UNKNOWN_ACTION' };

  const newState = updateTimes(state, action);

  expect(newState).toEqual(state);
});