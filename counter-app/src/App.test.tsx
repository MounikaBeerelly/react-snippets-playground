// src/App.test.tsx
import { test, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, fireEvent, screen, act } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

test('auto-starts counter and buttons work', () => {
  render(<App />);
  act(() => {
    vi.advanceTimersByTime(3000);
  });
  expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter: 3');

  fireEvent.click(screen.getByTestId('stop-btn'));
  act(() => {
    vi.advanceTimersByTime(2000);
  });
  expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter: 3');

  fireEvent.click(screen.getByTestId('start-btn'));
  act(() => {
    vi.advanceTimersByTime(1000);
  });
  expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter: 4');

  fireEvent.click(screen.getByTestId('reset-btn'));
  expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter: 0');
});
