import { styled } from 'styled-components';
import { LinkImgLabel } from '../../molecues/LinkImgLabel';

const AccountMenu = () => {
  return (
    <Styled.Header>
      <div>
        <LinkImgLabel
          linkURL="https://www.kakaocorp.com/page/"
          buttonName="앱 설치하기"
        />
      </div>
      <Styled.Setting>
        <LinkImgLabel
          linkURL="https://www.kakaocorp.com/page/"
          buttonName="회원가입"
        />
        <LinkImgLabel
          linkURL="https://www.kakaocorp.com/page/"
          buttonName="로그인"
        />
        <LinkImgLabel
          linkURL="https://www.kakaocorp.com/page/"
          buttonName="고객센터"
        />
      </Styled.Setting>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
  `,
  Setting: styled.div`
    display: flex;
    flex-direction: row;
  `,
};

export default AccountMenu;
