// RoundButton.test.tsx
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { RoundButton } from '../roundButton';

describe('RoundButton component', () => {
    const mockOnClickHandler = jest.fn();

    const buttonProps = {
        id: 'test-button',
        value: 'test-value',
        label: 'Test Button',
        isActive: true,
        onClickHandler: mockOnClickHandler,
    };

    it('renders button correctly', () => {
        render(<RoundButton {...buttonProps} />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('calls onClickHandler when button is clicked', () => {
        render(<RoundButton {...buttonProps} />);
        fireEvent.click(screen.getByText('Test Button'));
        expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
    });

    it('applies active styling when isActive is true', () => {
        render(<RoundButton {...buttonProps} />);
        const button = screen.getByText('Test Button');
        const computedStyles = window.getComputedStyle(button);
        expect(computedStyles.border).toBe('1px solid #1976d2');
    });

    it('applies default styling when isActive is false', () => {
        const inactiveButtonProps = { ...buttonProps, isActive: false };
        render(<RoundButton {...inactiveButtonProps} />);
        const button = screen.getByText('Test Button');
        const computedStyles = window.getComputedStyle(button);
        expect(computedStyles.border).not.toBe('1px solid #1976d2)');
    });
});
