import { styled } from "styled-components";
import { Header } from "../src/components/common/template/Header/Header";
import Main from "../src/components/common/organisms/Main";
import Footer from "../src/components/common/organisms/Footer";

const Home = () => {
  return (
    <Styled.Wrapper>
      <Header />
      <Main />
      <Footer />
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div``,
};

export default Home;
