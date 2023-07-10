import styled from 'styled-components';
import { ListItems } from '../molecues/ListItems';

const ProductBanner = () => {
  return (
    <Styled.BannerWrapper>
      <div> 상품</div>
      <hr />
      <ListItems />
    </Styled.BannerWrapper>
  );
};

const Styled = {
  BannerWrapper: styled.div`
    padding-top: 50px;
    padding-left: 150px;
    padding-right: 150px;
  `,
};

export default ProductBanner;
