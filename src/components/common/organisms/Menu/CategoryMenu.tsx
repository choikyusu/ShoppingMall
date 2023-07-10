import { styled } from "styled-components";
import Search from "../../atoms/Search";

const CategoryMenu = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <div>카테고리</div>
        <div>홈</div>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    padding-left: 150px;
    padding-right: 150px;
  `,
  Header: styled.header`
    display: flex;
    justify-content: center;
    height: 50px;
  `,
};

export default CategoryMenu;
