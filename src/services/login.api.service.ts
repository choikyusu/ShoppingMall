import { $login } from '../apis/login.api';

export const userLogin = async (
  loginData: LoginData,
  cb: (success: boolean) => void,
) => {
  try {
    const { token, refreshToken } = await $login(loginData);
    await window.sessionStorage.setItem('token', token);
    await window.sessionStorage.setItem('refreshToken', refreshToken);
    cb(true);
  } catch {
    cb(false);
  }
};

export const userLogout = (cb: () => void) => {
  window.sessionStorage.removeItem('token');
  window.sessionStorage.removeItem('refreshToken');
  cb();
};
