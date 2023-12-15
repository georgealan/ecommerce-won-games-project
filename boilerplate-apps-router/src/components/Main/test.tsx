import { render, screen } from "@testing-library/react";
import Main from ".";

describe('<Main />', () => {
  it('should render the heading', () => {
    // Render the component
    const { container } = render(<Main />)

    // Search the element and verify if it exist
    expect(
      screen.getByRole('heading', { name: /advanced react/i })
    ).toBeInTheDocument()

    // Generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})