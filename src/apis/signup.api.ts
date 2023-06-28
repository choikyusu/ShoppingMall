import axios, { AxiosError } from "axios";
import { ApiResponse } from "../types/base";
import { API_HOST } from "../components/common/constants/constants";

export const signup$ = async (signupData: SignupData) => {
  const signupRequest: SignupRequestDto = {
    userId: signupData.userId,
    password: signupData.password,
    name: signupData.name,
  };

  console.log("test", API_HOST);
  try {
    const response: ApiResponse<SignupResponseDto> = await axios.post(
      `${API_HOST}/auth/signup`,
      signupRequest
    );

    return { code: response.status, msg: response.data.msg };
  } catch (error: any) {
    if (error instanceof AxiosError)
      return { code: error.response?.status, msg: error.response?.data.msg };

    return { code: -9999, msg: "" };
  }
};
