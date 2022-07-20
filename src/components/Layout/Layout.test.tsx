/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe(`<Layout />`, () => {
  it(`Render correctly`, () => {
    const { getByText } = render(<Layout>Content</Layout>);
    expect(getByText(`Content`)).toBeInTheDocument();
  });

  it(`Render child content correctly`, () => {
    const { getByText, getByRole } = render(
      <Layout>
        <h2>Heading level 2 text</h2>
        <h3>Heading level 3 text</h3>
      </Layout>
    );
    expect(getByText(`Heading level 2 text`)).toBeInTheDocument();
    expect(getByText(`Heading level 3 text`)).toBeInTheDocument();
    expect(getByRole(`heading`, { level: 2 })).toBeInTheDocument();
    expect(getByRole(`heading`, { level: 3 })).toBeInTheDocument();
  });
});
