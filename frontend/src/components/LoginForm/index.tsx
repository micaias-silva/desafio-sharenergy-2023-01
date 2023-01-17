import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { backendApi } from '../../services/backendApi';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Text } from '../../styles/Text';
import { setToken } from '../../store/modules/session/action';
import { useState } from 'react';
import { Form, Input } from '../../styles/Form';
import { StyledBasicButton } from '../Button/styles';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [remember, setRemember] = useState<boolean>(false);

  const formSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [rememberMe, seRemeberMe] = useState<boolean>(false);

  const handleLogin = async (data: any) => {
    const response = await backendApi.post('auth/login', data);

    dispatch(
      setToken(
        response.data.access_token,
        remember ? localStorage : sessionStorage,
      ),
    );

    history.push('/');
  };

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <Label htmlFor="username">Username</Label>
      <Input {...register('username')} />
      <Label htmlFor="username">Password</Label>
      <Input type="password" {...register('password')} />

      <input
        type="checkbox"
        onChange={(e) => {
          const value = e.target.value;
          value === 'on' ? setRemember(true) : setRemember(false);
        }}
      />
      <Label htmlFor="rememberMe"> Remember me</Label>
      <StyledBasicButton type="submit">Login</StyledBasicButton>
    </Form>
  );
};

export default LoginForm;
