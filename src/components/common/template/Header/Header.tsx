import { styled } from "styled-components";
import { AccountMenu, CategoryMenu, MainMenu } from "../../organisms/Menu";

export const Header = () => {
  return (
    <>
      <AccountMenu />
      <MainMenu />
      <CategoryMenu />
    </>
  );
};

const Styled = {
  Header: styled.header``,
};
