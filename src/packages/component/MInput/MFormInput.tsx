import { Controller } from 'react-hook-form';
import { IMFormInput } from '../../types';
import { MInput } from './MInput';

export const MFormInput = (props: IMFormInput) => {
  const { control, ...others } = props;

  return (
    <Controller
      name={others.name || 'controllerName'}
      control={control}
      render={({ field: { onChange, value = '' }, fieldState: { error } }) => (
        <MInput
          onChange={onChange}
          value={value}
          {...others}
          error={!!error}
          helperText={error ? error.message : ' '}
        />
      )}
    />
  );
};
