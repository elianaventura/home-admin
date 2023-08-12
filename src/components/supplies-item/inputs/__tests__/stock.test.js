import { render } from "@testing-library/react";
import Stock from "@/components/supplies-item/inputs/stock";

describe('First', () => {
  it('renders passes test', () => {
    const { container } = render(<Stock title="Stock" />);
 
    expect(container).toMatchSnapshot();
  });
});
