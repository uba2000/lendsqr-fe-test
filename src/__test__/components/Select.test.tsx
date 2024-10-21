import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../../views/components/Select/Select'; // Adjust the import path based on your folder structure
import '@testing-library/jest-dom';

describe('Select Component', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];

  it('renders without crashing', () => {
    render(<Select options={[]} />);
    expect(screen.getByTestId('select-field')).toBeInTheDocument();
  });

  it('renders default "Select" option', () => {
    render(<Select options={[]} />);
    const defaultOption = screen.getByText('Select');
    expect(defaultOption).toBeInTheDocument();
  });

  it('renders provided options correctly', () => {
    render(<Select options={options} />);

    // Checking if all provided options are rendered
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('renders select with correct number of options', () => {
    render(<Select options={options} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement.children.length).toBe(options.length + 1); // +1 for the default "Select" option
  });
});
