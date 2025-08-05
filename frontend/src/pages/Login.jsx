import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useLogin } from '../modules/hook';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { mutate: login, isPending } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <AuthForm
      type="login"
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleLogin}
      loading={isPending}
    />
  );
};

export default LoginForm;
