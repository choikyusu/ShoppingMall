import { styled } from 'styled-components';

export const LinkImgLabel = ({
  linkURL,
  imgPath,
  imgSvg,
  buttonName,
}: // afterEvent
{
  linkURL: string;
  buttonName?: string;
  imgPath?: string;
  imgSvg?: JSX.Element;
}) => {
  return (
    <Styled.LinkWrapper href={linkURL}>
      {imgSvg || null}
      {imgPath ? <Styled.Img src={imgPath} alt="이미지" /> : null}
      {buttonName ||null}
    </Styled.LinkWrapper>
  );
};

const Styled = {
  LinkWrapper: styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    // size:1em;
  `,
  Img: styled.img`
    object-fit: cover; // IE 에서 지원 X
  `,
};
