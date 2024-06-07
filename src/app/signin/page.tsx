'use client';

import { FC } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { Button, Input, Spinner } from 'components';
import { routes, schema, strings } from 'static';
import Link from 'next/link';
import { useAuthContext } from 'hooks';
import { useSignInMutation } from 'queries';
import { showSuccessToast } from 'utils';

/**
 * Yup schema for sign-in page validation
 */
const SignInSchema = Yup.object().shape({
  email: schema.email,
  password: schema.password,
});

/**
 * SignIn Component
 *
 * Represents the sign-in screen of the application.
 * Users can sign in with their email and password.
 */
const SignIn: FC = () => {
  // Constants for localization
  const {
    auth: { common, signIn, signUp },
  } = strings;

  // Hooks
  const { login } = useAuthContext(); // Authentication context
  const router = useRouter(); // Navigation hook

  // API call for sign in
  const { mutateAsync, isPending } = useSignInMutation();

  // Formik form configuration for sign-in form
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      try {
        // Handle form submission
        const user = await mutateAsync({
          email: values.email,
          password: values.password,
        });
        if (!!user && user?.token) {
          formik.resetForm();
          login({ user, token: user?.token });
          showSuccessToast({ message: signIn.signInSuccess });
          // Navigate to home page after successful sign-in
          router.replace(routes.root);
        }
      } catch (error) {}
    },
  });

  return (
    <div className='w-full p-8 md:max-w-md'>
      {/* Heading section */}
      <h1 className='mb-4 text-3xl font-normal'>{signIn.title}</h1>
      <p className='mb-4 text-sm text-light dark:text-light-dark'>
        {`${signIn.dontHaveAccount} `}
        {/* Link to sign-up page */}
        <Link
          href={routes.signUp}
          className='cursor-pointer font-semibold text-color hover:text-button-hover dark:text-color-dark dark:hover:text-hover'
          passHref
          replace
        >
          {signUp.title}
        </Link>
      </p>

      {/* Email and password input fields */}
      <Input
        id='email'
        label={common.email}
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        required
      />
      <Input
        id='password'
        type='password'
        label={common.password}
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
        required
      />

      {/* Sign-in button */}
      <Button title={signIn.title} className='mt-2 w-full' onClick={() => formik.handleSubmit()} />
      {!!isPending && <Spinner />}
    </div>
  );
};

export default SignIn;
