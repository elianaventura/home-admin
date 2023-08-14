import { render } from "@testing-library/react";
import PriceByUnit from "../price_by_unit";
import { SuppliesItemProvider } from "@/components/context/supplies-item";

const props = {
  title: 'Precio',
  amount: 100,
  currency: {
    currency_selected_label: 'Moneda',
    options: [
      {
        id: 'ARS',
        selected: true,
        display: '$',
      },
      {
        id: 'USD',
        selected: false,
        display: 'USD',
      },
    ],
  },
};

const unit = {
  id: 'KG',
  selected: true,
  display: {
    singular: 'kg',
    plural: 'kg',
  },
};

describe('First', () => {
  it('renders passes snapshot', () => {
    const { container } = render(
      <SuppliesItemProvider value={unit}>
        <PriceByUnit {...props} />
      </SuppliesItemProvider>
    );
 
    expect(container).toMatchSnapshot();
  });
});
