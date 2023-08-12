import { render } from "@testing-library/react";
import Consuption from "../consuption";

describe('First', () => {
  it('renders passes test', () => {
    const { container } = render(<Consuption title="Consumo" />);
 
    expect(container).toMatchSnapshot();
  });
});
