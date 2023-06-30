import { styled } from "styled-components";
import Search from "../../atoms/Search";
import {LinkImgLabel} from "@/src/components/common/molecues/LinkImgLabel";

const MainMenu = () => {
  return (
    <Styled.Header >
      <LinkImgLabel linkURL={"https://www.google.com/"} imgPath={"Logo.png"} />
        <div>상품</div>
        <div>클래스</div>
      <Search />
        <div>1 리틀 자수정 목걸이</div>
        <LinkImgLabel linkURL={"https://www.naver.com/"} imgPath={"MyInfo.png"} buttonName={"내 정보"}/>
      <LinkImgLabel linkURL={"https://www.naver.com/"} imgPath={"ShoppingCart.png"} buttonName={"장바구니"}/>

    </Styled.Header>
  );
};

const Styled = {
  Header: styled.header`
      display: flex;
      justify-content:center;
      height:50px;
  `,
};

export default MainMenu;
