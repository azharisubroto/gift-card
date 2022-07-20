/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Button from './Buton';

describe(`<Button />`, () => {
  it(`Render correctly`, () => {
    const { getByText } = render(<Button>{`Button Text`}</Button>);
    expect(getByText(`Button Text`)).toBeInTheDocument();
  });
});
