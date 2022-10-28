import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Button } from 'components/Button';
import { Box } from 'components/Box';
import { Form, FormTextField } from 'components/forms';
import { auth } from 'constants/firebase';
import { Navigate } from 'react-router-dom';
import { Routes } from 'constants/routes';

type FormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const form = useForm<FormData>({
    defaultValues: { email: '', password: '' },
  });
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);

  const handleSubmit = useCallback(
    async ({ email, password }: FormData) => {
      await signInWithEmailAndPassword(email, password);
    },
    [signInWithEmailAndPassword]
  );

  if (user !== null) {
    return <Navigate to={Routes.HOME} />;
  }

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <FormTextField placeholder="Email address" name="email" />

      <Box marginTop={4}>
        <FormTextField placeholder="Password" name="password" type="password" />
      </Box>

      <Box marginTop={4}>
        <Button fullWidth type="submit">
          Login
        </Button>
      </Box>
    </Form>
  );
};
