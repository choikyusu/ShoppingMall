import {styled} from "styled-components";

export const LinkImgLabel = ({
  buttonName,
  linkURL, imgPath,
}: {
  imgPath: string;
  buttonName?: string;
  linkURL?: string;
}) => {
  return (
      <Styled.LinkWrapper href={linkURL}>
      <img src={imgPath} alt="이미지"/>
        {buttonName}
      </Styled.LinkWrapper>
  );
};

const Styled = {
  Link: styled.a`
    display: inline-block;
    vertical-align: middle;
    padding: 0px 13.5px;
    font-size: 11px;
  `,
};