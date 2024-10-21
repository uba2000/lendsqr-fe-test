/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import InputField from '../../views/components/InputField/InputField';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

console.log(React);
// Mock props
const mockOnChange = jest.fn();

describe('InputField Component', () => {
  const defaultProps = {
    type: 'text',
    value: '',
    onChange: mockOnChange,
    placeholder: 'Enter text',
    className: '',
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should render the input field with default props', () => {
    render(<InputField {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('should call onChange when value is changed', () => {
    render(<InputField {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('Hello');
    expect(inputElement).toHaveValue('Hello');
  });

  it('should toggle between text and password when clicking SHOW/HIDE', () => {
    render(<InputField {...defaultProps} type="password" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    const toggleButton = screen.getByText('SHOW');

    // Default should be password
    expect(inputElement).toHaveAttribute('type', 'password');

    // Click to show text
    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(screen.getByText('Hide')).toBeInTheDocument();

    // Click to hide text
    fireEvent.click(screen.getByText('Hide'));
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('should apply className passed via props', () => {
    const customClass = 'custom-input';
    render(<InputField {...defaultProps} className={customClass} />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toHaveClass(`app__input ${customClass}`);
  });

  it('should handle empty value change correctly', () => {
    render(<InputField {...defaultProps} value="initial value" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: '' } });

    expect(mockOnChange).toHaveBeenCalledWith('');
    expect(inputElement).toHaveValue('');
  });

  it('should display password toggle button only when type is password', () => {
    render(<InputField {...defaultProps} type="password" />);
    expect(screen.getByText('SHOW')).toBeInTheDocument();
  });

  // Negative test cases
  it('should not call onChange if input value does not change', () => {
    render(<InputField {...defaultProps} value="initial" />);
    const inputElement = screen.getByPlaceholderText('Enter text');

    // Simulate a change with the same value
    fireEvent.change(inputElement, { target: { value: 'initial' } });

    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('should not break when value prop is undefined', () => {
    render(<InputField {...defaultProps} value={undefined as any} />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toHaveValue('');
  });
});
