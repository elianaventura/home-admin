import { render } from "@testing-library/react";
import PriceByUnit from "../price_by_unit";
import { SuppliesItemProvider } from "@/components/context/supplies-item";
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

const props = {
  field_name: 'price_per_unit',
  title: 'Precio',
  amount: 100,
  text_by: 'por',
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
  handleFieldChange: jest.fn(),
};

const unit = {
  id: 'KG',
  selected: true,
  display: {
    singular: 'kg',
    plural: 'kg',
  },
};

describe('PriceByUnit', () => {
  it('render passes snapshot', () => {
    const { container } = render(
      <SuppliesItemProvider value={unit}>
        <PriceByUnit {...props} />
      </SuppliesItemProvider>
    );
 
    expect(container).toMatchSnapshot();
  });

  it('currency default selected is rendered', () => {
    const { getByText } = render(
      <SuppliesItemProvider value={unit}>
        <PriceByUnit {...props} />
      </SuppliesItemProvider>
    );
 
    expect(getByText('$')).toBeInTheDocument();
  });

  it('unit selected is rendered', () => {
    const { getByText } = render(
      <SuppliesItemProvider value={unit}>
        <PriceByUnit {...props} />
      </SuppliesItemProvider>
    );
 
    expect(getByText(unit.display.singular)).toBeInTheDocument();
  });

  it('text by is rendered', () => {
    const { getByText } = render(
      <SuppliesItemProvider value={unit}>
        <PriceByUnit {...props} />
      </SuppliesItemProvider>
    );
 
    expect(getByText(props.text_by)).toBeInTheDocument();
  });

  it('should change currency', async () => {
    const user = userEvent.setup();
    const { getByText } = render(
      <SuppliesItemProvider value={unit}>
        <PriceByUnit {...props} />
      </SuppliesItemProvider>
    );
 
    const selector = getByText('$');
    expect(screen.queryByText('USD')).toBeNull();

    await user.click(selector);

    const newOption = getByText('USD');
    await user.click(newOption);

    expect(getByText('USD')).toBeInTheDocument();
    expect(props.handleFieldChange).toHaveBeenCalledWith(
      props.field_name,
      {
        amount: props.amount,
        currency: 'USD',
      },
    );
  });

  it('should change price amount', async () => {
    userEvent.setup();
    const { getByTestId } = render(
      <SuppliesItemProvider value={unit}>
        <PriceByUnit {...props} />
      </SuppliesItemProvider>
    );
 
    const amountInput = getByTestId('price-amount-input');
    await userEvent.clear(amountInput);
    await userEvent.type(amountInput, '180');

    expect(props.handleFieldChange).toHaveBeenCalledWith(
      props.field_name,
      {
        amount: '180',
        currency: 'ARS',
      },
    );
  });
});
