import Link from 'next/link';
import { useLogin } from './useLogin';
import styled from 'styled-components';
import { MAX_LENGTH } from '../../constants/login.constants';
import { PAGE_PATHS } from '../../constants/constants';

const Login = () => {
  const {
    loginFailuerMsg,
    onSubmit,
    userId,
    password,
    onUserIdChange,
    onPasswordChange,
    loggingIn,
  } = useLogin();

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <img src="/asset/kakao_logo.png" alt="logo" />
        </Styled.Header>
        <Styled.Contents>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="계정"
              value={userId}
              maxLength={MAX_LENGTH}
              onChange={onUserIdChange}
            />
            <input
              type="password"
              autoComplete="new-password"
              placeholder="비밀번호"
              value={password}
              maxLength={MAX_LENGTH}
              onChange={onPasswordChange}
            />
            <button
              type="submit"
              className={loggingIn || password.length < 5 ? 'disabled' : ''}
            >
              {loggingIn ? <i className="fas fa-circle-notch" /> : ''}
              <span>로그인</span>
            </button>
            <p>{loginFailuerMsg}</p>
          </form>
        </Styled.Contents>
        <Styled.Footer>
          <ul>
            <li>
              <Link href={PAGE_PATHS.SIGNUP}>회원 가입</Link>
            </li>
          </ul>
        </Styled.Footer>
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
    padding: 25px 0;
  `,
  Container: styled.div`
    width: 360px;
    height: 600px;
    background-color: #ffeb33;
  `,
  Header: styled.header`
    width: 100%;
    height: 200px;
    padding-top: 100px;
    & img {
      display: block;
      margin: 0 auto;
    }
  `,
  Contents: styled.main`
    width: 100%;
    height: 330px;
    padding-top: 30px;
    & input {
      display: block;
      margin: 0 auto;
      padding: 10px 5px;
      width: 230px;
      border: 1px solid #dcdcdc;
      &:first-child {
        border-bottom: none;
      }
      &::placeholder {
        color: #a2a2a2;
      }
    }
    & button {
      position: relative;
      display: block;
      margin: auto;
      margin-top: 5px;
      padding: 10px 5px;
      width: 230px;
      border: 1px solid #000;
      color: #fff;
      background-color: #423630;
      outline: none;
      @keyframes iconLotate {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      & i {
        position: absolute;
        top: 15px;
        right: 10px;
        color: #5c5c5c;
        animation: iconLotate 1.5s linear infinite;
      }
      &:hover {
        background-color: #594941;
        cursor: pointer;
      }
      &:active {
        background-color: #423630;
      }
      &.disabled {
        color: #969696;
        background: #e2e2e2;
        pointer-events: none;
        border: 1px solid #dcdcdc;
      }
    }
    & p {
      padding-top: 20px;
      text-align: center;
      color: red;
    }
  `,

  Footer: styled.footer`
    & ul {
      display: flex;
      justify-content: center;
      & li {
        color: #5a5a5a;
      }
    }
  `,
};

export default Login;
