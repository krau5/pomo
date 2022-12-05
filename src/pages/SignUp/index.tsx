import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from 'constants/firebase';
import { Routes } from 'constants/routes';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { Form, FormTextField } from 'components/forms';
import { Profile, User } from 'models/User';

type FormData = Profile & {
  repeatPassword: string;
};

export const SignUp = () => {
  const form = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);

  const handleSubmit = useCallback(
    async ({ email, username, password, repeatPassword }: FormData) => {
      if (password === repeatPassword) {
        await createUserWithEmailAndPassword(email, password);

        await User.createProfile({ email, password, username });
      }
    },
    [createUserWithEmailAndPassword]
  );

  if (user !== null) {
    return <Navigate to={Routes.HOME} />;
  }

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <FormTextField name="username" placeholder="Username" />

      <Box mt={4}>
        <FormTextField name="email" placeholder="Email address" />
      </Box>

      <Box mt={4}>
        <FormTextField name="password" placeholder="Password" type="password" />
      </Box>

      <Box mt={4}>
        <FormTextField
          name="repeatPassword"
          placeholder="Repeat password"
          type="password"
        />
      </Box>

      <Box mt={4}>
        <Button type="submit">Sign up</Button>
      </Box>
    </Form>
  );
};
