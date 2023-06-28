import { AxiosResponse } from 'axios';

interface Response<T> {
  data: T;
  msg?: string;
}

type ApiResponse<T> = AxiosResponse<Response<T>>;
