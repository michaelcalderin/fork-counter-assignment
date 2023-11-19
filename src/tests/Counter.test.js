import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {

  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {

  const counterMsg = screen.getByText(/0/);
  expect(counterMsg).toBeInTheDocument();

});

test('clicking + increments the count', () => {

  const initialCount = parseInt(screen.getByTestId('count').textContent);
  fireEvent.click(screen.getByText('+'))
  const newCount = parseInt(screen.getByTestId('count').textContent)
  expect(newCount).toBe(initialCount+1)

});

test('clicking - decrements the count', () => {

  const initialCount = parseInt(screen.getByTestId('count').textContent);
  fireEvent.click(screen.getByText('-'))
  const newCount = parseInt(screen.getByTestId('count').textContent)
  expect(newCount).toBe(initialCount-1)

});
