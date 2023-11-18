import { render } from '@testing-library/react';
import Consuption from '../consuption';
import { SuppliesItemProvider } from '@/components/context/supplies-item';

const props = {
  field_name: 'consumption_by_time',
  title: 'Consumo estimado por',
  amount: 0.25,
	time_units: [
		{
			id: 'week',
			display: 'semana',
			selected: true,
		},
		{
			id: 'week',
			display: 'día',
		},
		{
			id: 'month',
			display: 'mes',
		},
	],
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

describe('Consumption', () => {
  it('renders passes test', () => {
    const { container } = render(
      <SuppliesItemProvider value={unit}>
        <Consuption {...props} />
      </SuppliesItemProvider>
  );

    expect(container).toMatchSnapshot();
  });

  it('title is present', () => {
    const { getByText } = render(
      <SuppliesItemProvider value={unit}>
        <Consuption {...props} />
      </SuppliesItemProvider>
    );

    expect(getByText(props.title)).toBeInTheDocument();
  });
});
