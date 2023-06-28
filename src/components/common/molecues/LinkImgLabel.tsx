import {styled} from "styled-components";

export const LinkImgLabel = ({
  linkURL, imgPath,
   buttonName,
   // afterEvent
}: {
  imgPath: string;
  linkURL: string;
        buttonName?: string;
  // afterEvent? : function;
}) => {
  return (
      <Styled.LinkWrapper href={linkURL}>
      <Styled.Img src={imgPath} alt="이미지"/>
        {buttonName}
      </Styled.LinkWrapper>
  );
};

const Styled = {
  LinkWrapper: styled.a`
    display: inline-block;
    // vertical-align: middle;
    // padding: 0px 13.5px;
    // font-size: 11px;
    size:1em;
  `,
    Img: styled.img`
    object-fit : cover; // IE 에서 지원 X
    `
};