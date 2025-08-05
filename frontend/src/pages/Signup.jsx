import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useSignup } from '../modules/hook';

const SignUpForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const signupMutation = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation.mutate(formData, {
      onSuccess: () => {
        alert('Signup successful!');
        setFormData({ name: '', email: '', password: '' });
      },
      onError: (error) => {
        const message = error.response?.data?.message || 'Signup failed.';
        alert(message);
      },
    });
  };

  return (
    <AuthForm
      type="signup"
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSignup}
      isLoading={signupMutation.isPending}
    />
  );
};

export default SignUpForm;
