import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function Autoselect({ selected, onChange, allOptions, setAllOptions }) {
  const [value, setValue] = useState(selected);

  const handleSubmit = (newValue) => {
    setValue(newValue);
    setAllOptions([...allOptions, newValue]);
  };

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (!newValue) {
          return;
        }
        let selection = value;
        const id = newValue.id || `${Date.now()}_new`;
        if (typeof newValue === 'string') {
          selection = {
            id,
            name: newValue,
          };
          handleSubmit(selection);
        } else if (newValue && newValue.inputValue) {
          selection = {
            id,
            name: newValue.inputValue,
          };
          handleSubmit(selection);
        } else {
          selection = newValue;
          setValue(selection);
        }
        onChange(selection);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      id="free-solo-dialog-demo"
      options={allOptions}
      getOptionLabel={(option) => {
        // e.g. value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.name;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      renderOption={(props, option) => {
        return (
          <li {...props} key={props.id || option.id || `option_${Date.now()}`}>{option.name}</li>
        );
      }}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
