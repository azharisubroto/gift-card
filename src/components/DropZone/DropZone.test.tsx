/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import DropZone from './DropZone';

describe(`<DropZone />`, () => {
  it(`Render correctly`, () => {
    const { getByText, getByRole } = render(<DropZone maxFiles={1} />);
    expect(getByText(`Browse Files`)).toBeInTheDocument();
    expect(getByText(`Drag and Drop file here`)).toBeInTheDocument();
    expect(getByRole(`heading`, { level: 4 })).toBeInTheDocument();
  });
});
