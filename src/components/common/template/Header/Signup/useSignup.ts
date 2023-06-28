import { useRouter } from "next/router";
import { useState } from "react";
import { userSignup } from "../../../../../services/signup.api.service";

export const useSignup = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");

  const [userIdWarningMsg, setUserIdWarningMsg] = useState("");
  const [passwordWarningMsg, setPasswordWarningMsg] = useState("");
  const [checkPasswordWarningMsg, setCheckPasswordWarningMsg] = useState("");
  const [nameWarningMsg, setNameWarningMsg] = useState("");

  const onUserIdChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { value } = event.target;
    setUserId(value);
  };

  const onPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const { value } = event.target;
    setPassword(value);
  };
  const onCheckPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const { value } = event.target;
    setCheckPassword(value);
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { value } = event.target;
    setName(value);
  };

  const onUserIdBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidUserId();
  };
  const onPasswordBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidPassword();
  };
  const onCheckPasswordBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    isValidCheckPassword();
  };
  const onNameBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidName();
  };

  const onSubmit = async () => {
    console.log("here");
    const validId = await isValidUserId();
    const validPassword = isValidPassword();
    const validCheckPassword = isValidCheckPassword();
    const validName = isValidName();

    console.log("here2");

    if (validId && validPassword && validCheckPassword && validName) {
      userSignup({ userId, password, name }, async (success: boolean) => {
        if (success) router.push("/kakaotalk/login");
        else alert("서버 접속에 실패했습니다.");
      });
    }
  };

  return {
    onUserIdChange,
    onUserIdBlur,
    userIdWarningMsg,
    onPasswordChange,
    onPasswordBlur,
    passwordWarningMsg,
    onCheckPasswordChange,
    onCheckPasswordBlur,
    checkPasswordWarningMsg,
    onNameChange,
    onNameBlur,
    nameWarningMsg,
    onSubmit,
  };

  function isValidCheckPassword() {
    if (checkPassword !== password) {
      setCheckPasswordWarningMsg("비밀번호가 일치하지 않습니다.");
      return false;
    }
    setCheckPasswordWarningMsg("");
    return true;
  }
  function isValidName() {
    const len = name.length;
    if (len === 0) {
      setNameWarningMsg("필수 정보입니다.");
      return false;
    }
    setNameWarningMsg("");
    return true;
  }

  function isValidPassword() {
    const len = password.length;
    if (len < 5) {
      setPasswordWarningMsg("5 ~ 20자 입력해주세요.");
      return false;
    }
    setPasswordWarningMsg("");
    return true;
  }

  function isMatchUserId() {
    const regExp = /^[0-9a-z]+$/;
    const isMatch = userId.match(regExp);
    return !!isMatch;
  }

  async function isValidUserId() {
    const len = userId.length;
    if (len < 5 || !isMatchUserId()) {
      setUserIdWarningMsg("5 ~ 20자의 영문 소문자, 숫자만 사용 가능합니다.");
      return false;
    }

    setUserIdWarningMsg("");
    return true;
  }
};
