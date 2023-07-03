import { styled } from 'styled-components';
import Search from '../../atoms/Search';
import { LinkImgLabel } from '../../molecues/LinkImgLabel';
import { FaShoppingCart } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';

const MainMenu = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.Header>
        <LinkImgLabel linkURL="https://www.google.com/" imgPath="Logo.png" />
        <div>상품</div>
        <div>클래스</div>
        <Search />
        <div>1 리틀 자수정 목걸이</div>
        <LinkImgLabel
          linkURL="https://www.naver.com/"
          imgSvg={<VscAccount />}
          buttonName="내 정보"
        />
        <LinkImgLabel
          linkURL="https://www.naver.com/"
          imgSvg={<FaShoppingCart />}
          buttonName="장바구니"
        />
      </Styled.Header>
    </Styled.HeaderWrapper>
  );
};

const Styled = {
  HeaderWrapper: styled.div`
    padding-left: 150px;
    padding-right: 150px;
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    height: 50px;
  `,
};

export default MainMenu;
