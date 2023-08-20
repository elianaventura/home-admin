import { render } from '@testing-library/react';
import Priority from '../priority';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

const props = {
  type: 'priority',
  field_name: 'priority',
  title: 'Prioridad:',
  number: 4,
  handleFieldChange: jest.fn(),
};

describe('Unit', () => {
  it('render passes snapshot', () => {
    const { container } = render(
      <Priority {...props} />
    );
 
    expect(container).toMatchSnapshot();
  });

  it('should change unit', async () => {
    userEvent.setup();
    const { getByTestId } = render(
      <Priority {...props} />
    );
 
    const input = getByTestId('priority-input');

    await userEvent.clear(input);
    await userEvent.type(input, '3');

    expect(input.value).toBe('3');

    expect(props.handleFieldChange).toHaveBeenCalledWith(
      props.field_name,
      '3',
    );
  });
});
