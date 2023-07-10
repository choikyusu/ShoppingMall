import { styled } from 'styled-components';

const CoverImage = () => {
  return (
    <Styled.ImgWrapper>
      <Styled.Img src="HomeImg.png" alt="이미지" />
      <Styled.TextWrapper>
        <h2>hello</h2>
        <p>frontend 코딩</p>
      </Styled.TextWrapper>
    </Styled.ImgWrapper>
  );
};

const Styled = {
  ImgWrapper: styled.div`
    position: relative;
    background: rgb(248, 246, 229);
    text-align: center;
  `,
  TextWrapper: styled.div`
    padding: 10px;
    border-radius: 10px;
    background: white;
    position: absolute;
    width: 300px;
    height: 50%;
    top: 30%;
    left: 10%;
  `,
  Img: styled.img``,
};

export default CoverImage;
