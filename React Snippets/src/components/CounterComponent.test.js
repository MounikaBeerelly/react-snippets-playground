import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import CounterComponent from "./CounterComponent";

describe('Counter Component test cases', () => {

    test('Counter component initial count is zero', () => {
        render(<CounterComponent />);
        expect(screen.getByTestId('counter')).toHaveTextContent('Count: 0');
    });

    test('Increase count when user clicks on Increment button', () => {
        render(<CounterComponent />);
        fireEvent.click(screen.getAllByTestId('increment')[0]);
        fireEvent.click(screen.getAllByTestId('increment')[0]);
        expect(screen.getByTestId('counter')).toHaveTextContent('Count: 2');
    });

    test('Decrease count when user clicks on Decrement button', () => {
        render(<CounterComponent />);
        fireEvent.click(screen.getAllByTestId('increment')[0]);
        fireEvent.click(screen.getAllByTestId('increment')[0]);
        fireEvent.click(screen.getAllByTestId('decrement')[0]);
        expect(screen.getByTestId('counter')).toHaveTextContent('Count: 1');
    });

     test('Reset count when user clicks on Reset button', () => {
        render(<CounterComponent />);
        fireEvent.click(screen.getAllByTestId('increment')[0]);
        fireEvent.click(screen.getAllByTestId('increment')[0]);
        fireEvent.click(screen.getAllByTestId('decrement')[0]);
        fireEvent.click(screen.getAllByTestId('increment')[0]);
        fireEvent.click(screen.getAllByTestId('reset')[0]);
        expect(screen.getByTestId('counter')).toHaveTextContent('Count: 0');
    });

});