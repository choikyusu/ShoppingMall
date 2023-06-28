import { signup$ } from "../apis/signup.api";

export const userSignup = async (
  signupData: SignupData,
  cb: (success: boolean, message?: string) => void
) => {
  try {
    const { code, msg } = await signup$(signupData);
    cb(code === 200, msg);
  } catch {
    cb(false);
  }
};
