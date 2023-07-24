import { styled } from 'styled-components';
import { LinkImgLabel } from './LinkImgLabel';
import { VscAccount } from 'react-icons/vsc';
import { BsFlower1 } from 'react-icons/bs';
import { productListData } from '../../../data/productListData';
import Star from '../atoms/Star';

export const ListItems = () => {
  return (
    <Styled.Ul>
      {productListData.map(item => (
        <li key={item.id}>
          <Styled.ProductWrapper>
            <LinkImgLabel
              linkURL="https://www.naver.com/"
              imgPath="Necklace.jpg"
              imgWidth="200"
              imgHeight="160"
            />
            <Styled.ThumbnailWrapper>
              <Styled.Id>{item.id}</Styled.Id>
              <Styled.ProductName>{item.productName}</Styled.ProductName>
              <Styled.Price>{item.price}</Styled.Price>
            </Styled.ThumbnailWrapper>
            <Styled.Hr />
            <Styled.ThumbnailWrapper>
              <Star starNum={item.star} size="12px" />
            </Styled.ThumbnailWrapper>
          </Styled.ProductWrapper>
        </li>
      ))}
    </Styled.Ul>
  );
};

const Styled = {
  ProductWrapper: styled.div`
    width: 200px;
    height: 300px;
    border-radius: 10px;
    border: gray solid 1px;
    margin-right: 20px;
    margin-bottom: 20px;
  `,
  Ul: styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-inline-start: 0px;
  `,
  ThumbnailWrapper: styled.div`
    padding: 10px;
    font-size: 12px;
  `,
  Img: styled.img`
    //width: 200px;
    // object-fit: cover;
  `,
  Id: styled.div`
    color: gray;
  `,
  ProductName: styled.div``,
  Price: styled.div`
    padding-top: 15px;
    color: gray;
  `,
  Hr: styled.hr`
    margin: 0px;
  `,
  Star: styled.div``,
};
