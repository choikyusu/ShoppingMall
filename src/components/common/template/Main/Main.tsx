import { styled } from 'styled-components';
import CoverImage from '../../molecues/CoverImage';
import ProductBanner from '../../organisms/ProductBanner';

const Main = () => {
  return (
    <Styled.MainWrapper>
      <CoverImage />
      <ProductBanner />
    </Styled.MainWrapper>
  );
};

const Styled = {
  MainWrapper: styled.main``,
};

export default Main;
