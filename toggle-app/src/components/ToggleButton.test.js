import React from "react";
import { render, fireEvent, screen } from '@testing-library/react'
import ToggleButton from './Togglecomponent';

describe('ToggleButton', () => {

    test('initial status is false', () => {
        render(<ToggleButton />);
        expect(screen.getByTestId('status')).toHaveTextContent('Status: Tails');
    });
  
    test('changes to heads on click', () => {
        render(<ToggleButton />);
        fireEvent.click(screen.getByText('Toggle'));
        expect(screen.getByTestId('status')).toHaveTextContent('Status: Heads');
    });

    test('toggles back to the tails on second click', () => {
        render(<ToggleButton />);
        const button = screen.getByText('Toggle');
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.getByTestId('status')).toHaveTextContent('Status: Tails');
    });
    
});