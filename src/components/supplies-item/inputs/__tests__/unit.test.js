import { render } from '@testing-library/react';
import Unit from '../unit';
import { SuppliesItemProvider } from '@/components/context/supplies-item';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

const props = {
  type: 'unit',
  field_name: 'unit',
  title: 'Unidad',
  options: [
    {
      id: 'KG',
      selected: true,
      display: {
        singular: 'kg',
        plural: 'kg'
      },
    },
    {
      id: 'UNIT',
      display: {
        singular: 'unidad',
        plural: 'unidades'
      },
    },
  ],
  handleFieldChange: jest.fn(),
};

describe('Unit', () => {
  it('render passes snapshot', () => {
    const { container } = render(
      <SuppliesItemProvider value={props.options[0]}>
        <Unit {...props} />
      </SuppliesItemProvider>
    );
 
    expect(container).toMatchSnapshot();
  });

  it('should change unit', async () => {
    const user = userEvent.setup();
    const { getByText } = render(
      <SuppliesItemProvider value={props.options[0]}>
        <Unit {...props} />
      </SuppliesItemProvider>
    );
 
    const selector = getByText('kg');
    expect(screen.queryByText('unidad')).toBeNull();

    await user.click(selector);

    const newOption = getByText('unidad');
    await user.click(newOption);

    expect(getByText('unidad')).toBeInTheDocument();
    expect(props.handleFieldChange).toHaveBeenCalledWith(
      props.field_name,
      'UNIT',
    );
  });
});
