import { styled } from "styled-components";
import Search from "../../atoms/Search";
import {LinkImgLabel} from "@/src/components/common/molecues/LinkImgLabel";

const MainMenu = () => {
  return (
    <Styled.Header>

      <Search />
        <LinkImgLabel linkURL={"logo.png"} imgPath={"logo.png"}/>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled.header``,
};

export default MainMenu;
