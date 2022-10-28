import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormEvent, PropsWithChildren, useCallback } from 'react';

export type FormProps<FormData extends FieldValues> = {
  form: UseFormReturn<FormData>;
  onSubmit: (values: FormData) => void;
};

export const Form = <FormData extends FieldValues>({
  children,
  form,
  onSubmit,
}: PropsWithChildren<FormProps<FormData>>) => {
  const { handleSubmit } = form;

  const submit = useCallback(
    (data: FormData) => {
      onSubmit(data);
    },
    [onSubmit]
  );

  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.stopPropagation();

      handleSubmit(submit)(event);
    },
    [handleSubmit, submit]
  );

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={handleFormSubmit}>
        {children}
      </form>
    </FormProvider>
  );
};
