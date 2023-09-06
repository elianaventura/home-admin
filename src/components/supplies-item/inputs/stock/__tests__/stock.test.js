import { render } from "@testing-library/react";
import Stock from "@/components/supplies-item/inputs/stock";
import { SuppliesItemProvider } from "@/components/context/supplies-item";

const props = {
  type: 'stock',
  title: 'Stock',
  field_name: 'stock',
  amount: 4,
};

const unit = {
  id: 'KG',
  selected: true,
  display: {
    singular: 'kg',
    plural: 'kg',
  },
};

describe('Stock', () => {
  it('renders passes test', () => {
    const { container } = render(
      <SuppliesItemProvider value={unit}>
        <Stock {...props} />
      </SuppliesItemProvider>);
 
    expect(container).toMatchSnapshot();
  });
});
