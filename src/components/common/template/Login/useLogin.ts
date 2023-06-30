import { useState } from 'react';
import { useRouter } from 'next/router';
import { PAGE_PATHS } from '../../constants/constants';
import { userLogin } from '../../../../services/login.api.service';

export const useLogin = () => {
  const router = useRouter();
  const [loginFailuerMsg, setLoginFailuerMsg] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onUserIdChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (!loggingIn) {
      const { value } = event.target;
      setUserId(value);
    }
  };

  const onPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    if (!loggingIn) {
      const { value } = event.target;
      setPassword(value);
    }
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!loggingIn && password.length >= 5) {
      userLogin({ userId, password }, (success: boolean) => {
        if (!success) {
          setLoginFailuerMsg('계정 또는 비밀번호를 다시 확인해주세요.');
          setPassword('');
        } else {
          router.push(PAGE_PATHS.FRIEND);
        }
      });
    }
  };

  return {
    loginFailuerMsg,
    onSubmit,
    userId,
    password,
    onUserIdChange,
    onPasswordChange,
    loggingIn,
  };
};
