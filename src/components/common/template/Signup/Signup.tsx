import styled from 'styled-components';
import Link from 'next/link';
import { useSignup } from './useSignup';
import { MAX_LENGTH } from '../../constants/login.constants';
import { PAGE_PATHS } from '../../constants/constants';
import { InputField } from '../../atoms/InputField';

export const Signup = () => {
  const {
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
  } = useSignup();

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <h2>
            <Styled.LogoLink href={PAGE_PATHS.LOGIN}>kakao</Styled.LogoLink>
          </h2>
        </Styled.Header>
        <Styled.Contants>
          <InputField
            inputId="id"
            inputType="text"
            maxLength={MAX_LENGTH}
            title="ID"
            onChange={onUserIdChange}
            onBlur={onUserIdBlur}
            warningMsg={userIdWarningMsg}
          />
          <InputField
            inputId="password"
            inputType="password"
            maxLength={MAX_LENGTH}
            title="비밀번호"
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
            warningMsg={passwordWarningMsg}
          />
          <InputField
            inputId="password2"
            inputType="password"
            maxLength={MAX_LENGTH}
            title="비밀번호2"
            onChange={onCheckPasswordChange}
            onBlur={onCheckPasswordBlur}
            warningMsg={checkPasswordWarningMsg}
          />
          <InputField
            inputId="name"
            inputType="text"
            maxLength={MAX_LENGTH}
            title="이름"
            onChange={onNameChange}
            onBlur={onNameBlur}
            warningMsg={nameWarningMsg}
          />
          <button type="submit" onClick={onSubmit}>
            가입하기
          </button>
        </Styled.Contants>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #f5f6f7;
  `,
  Container: styled.div`
    margin: 0 auto;
    width: 50%;
    min-height: 95vh;
    border: 1px solid #dadada;
    @media only screen and (max-width: 800px) {
      width: 95%;
    }
  `,
  Header: styled.header`
    width: 100%;
    height: 100px;
    & h2 {
      text-align: center;
    }
  `,
  LogoLink: styled(Link)`
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 8px;
    color: #ffeb33;
    text-shadow: -1px 0 #dcdcdc, 0 1px #dcdcdc, 1px 0 #dcdcdc, 0 -1px #dcdcdc;
  `,
  Contants: styled.main`
    width: 100%;
    & button {
      display: block;
      width: 80%;
      margin: 0 auto;
      background-color: #ffeb33;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      padding: 16px 5px;
      border: 1px solid #dadada;
    }
  `,
};
