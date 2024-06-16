
import { ChangeEvent } from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { CustomAutocomplete } from '../autocomplete';

describe('CustomAutocomplete component', () => {
    const mockOnChangeHandler = jest.fn((event: ChangeEvent<HTMLInputElement>) => {
        // Optionally, you can add custom logic here to simulate what the handler should do
    });

    const autocompleteProps = {
        id: 'test-autocomplete',
        value: '',
        placeholder: 'Search...',
        options: [{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }],
        onChangeHandler: mockOnChangeHandler,
    };

    it('renders autocomplete correctly', () => {
        render(<CustomAutocomplete {...autocompleteProps} />);
        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('calls onChangeHandler when input value changes', () => {
        render(<CustomAutocomplete {...autocompleteProps} />);
        const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Option 1' } });
        expect(mockOnChangeHandler).toHaveBeenCalledTimes(1);
        expect(input.value).toBe('Option 1');
    });

    it('displays options correctly when typing', () => {
        render(<CustomAutocomplete {...autocompleteProps} />);
        const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Option' } });
        autocompleteProps.options.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });
});
