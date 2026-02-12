import { Field, Input } from '@chakra-ui/react';
import { Controller, FieldError, Control } from 'react-hook-form';
import { PasswordInput } from '@/components/ui/password-input';
import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<typeof Input> {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
  isRequired?: boolean | string;
  rules?: Record<string, any>;
  isPassword?: boolean;
}

export const InputController: React.FC<Props> = ({
  label,
  name,
  control,
  placeholder,
  isRequired,
  rules,
  isPassword = false,
  ...props
}) => {
  const InputElement = isPassword ? PasswordInput : Input;

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: isRequired,
        ...rules,
      }}
      render={({ field, formState }) => {
        const errs = formState.errors as Record<string, FieldError | undefined> | undefined;
        const fieldError = errs?.[name];
        return (
          <Field.Root invalid={!!fieldError}>
            <Field.Label>{label}</Field.Label>
            <InputElement placeholder={placeholder} {...field} {...props} />
            <Field.ErrorText>{fieldError?.message}</Field.ErrorText>
          </Field.Root>
        );
      }}
    />
  );
};
