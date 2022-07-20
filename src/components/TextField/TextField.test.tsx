/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe(`<TextField />`, () => {
  it(`Should renders text correctly`, () => {
    const { getByText, container } = render(<TextField label="First Name" type="text" name="first_name" />);

    const inputs = container.getElementsByClassName(`form-control`);
    const labelClasses = container.getElementsByClassName(`form-label`);

    expect(getByText(`First Name`)).toBeInTheDocument();
    expect(inputs.length).toBe(1);
    expect(labelClasses.length).toBe(1);
  });

  it(`value must precise`, () => {
    render(<TextField label="First Name" type="text" name="first_name" value="test" />);

    expect(screen.getByDisplayValue(`test`)).toBeInTheDocument();
  });
});
