import axios from 'axios';
import { ApiResponse } from '../types/base';
import { API_HOST } from '../components/common/constants/constants';

export const $login = async (loginData: LoginData) => {
  const request = {
    userId: loginData.userId,
    password: loginData.password,
  };
  const response: ApiResponse<LoginResponseDto> = await axios.post(
    `${API_HOST}/auth/login`,
    request,
  );
  const { token, refreshToken } = response.data.data;

  return { token, refreshToken };
};
