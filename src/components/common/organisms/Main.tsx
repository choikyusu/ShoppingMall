import { styled } from 'styled-components';

const Main = () => {
  return (
    <Styled.MainWrapper>
      <Styled.Img src="HomeImg.png" alt="이미지" />
    </Styled.MainWrapper>
  );
};

const Styled = {
  MainWrapper: styled.main``,
  Img: styled.img`
    object-fit: cover; // IE 에서 지원 X
  `,
};

export default Main;
