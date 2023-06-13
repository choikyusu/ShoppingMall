import { styled } from "styled-components";

export const LinkLabel = ({
  buttonName,
  url,
}: {
  buttonName: string;
  url: string;
}) => {
  return (
    <Styled.Link href={url} className="sc-clIzBv bvZSrq">
      {buttonName}
    </Styled.Link>
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
