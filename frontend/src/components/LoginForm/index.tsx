import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { backendApi } from '../../services/backendApi';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../styles/Text';
import { setToken } from '../../store/modules/session/action';
import { useState } from 'react';

const LoginForm = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [rememberMe, seRemeberMe] = useState(false);

  const submitLoginRequest = async (data: any) => {
    const response = await backendApi.post('auth/login', data);

    // guarde o token no local storage

    dispatch(setToken(response.data));
  };

  return (
    <form onSubmit={handleSubmit(submitLoginRequest)}>
      <input {...register('username')} />
      <input type="password" {...register('password')} />
      <input type="checkbox" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
