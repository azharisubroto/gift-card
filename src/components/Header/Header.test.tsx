/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from './Header';

describe(`<Header />`, () => {
  it(`Render app name correctly`, () => {
    const { getByText } = render(<Header />);
    expect(getByText(`Gift Card`)).toBeInTheDocument();
  });

  it(`App title should be wrapped within H1`, () => {
    const { getByRole } = render(<Header />);
    expect(getByRole(`heading`, { level: 1 })).toBeInTheDocument();
  });
});
