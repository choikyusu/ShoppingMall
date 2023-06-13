import Footer from "@/src/components/common/organisms/Footer";
import Main from "@/src/components/common/organisms/Main";
import { Header } from "@/src/components/common/template/Header/Header";
import { styled } from "styled-components";

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
