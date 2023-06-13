import { styled } from "styled-components";
import Search from "../../atoms/Search";

const MainMenu = () => {
  return (
    <Styled.Header>
      <Search />
    </Styled.Header>
  );
};

const Styled = {
  Header: styled.header``,
};

export default MainMenu;
