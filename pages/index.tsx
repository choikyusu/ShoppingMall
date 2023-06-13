import MainContent from "@/src/components/common/organisms/MainContent";
import { styled } from "styled-components";

const Home = () => {
  return (
    <Styled.Wrapper>
      <MainContent />
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div``,
};

export default Home;
