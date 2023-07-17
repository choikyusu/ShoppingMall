import { styled } from 'styled-components';
import { LinkImgLabel } from './LinkImgLabel';
import { VscAccount } from 'react-icons/vsc';
import { BsFlower1 } from 'react-icons/bs';

const productList = [
  {
    id: 1,
    image: 'ShoppingCart/',
    productName: '플로라이트 목걸이',
    price: 35000,
    star: 5,
  },
  {
    id: 2,
    image: 'ShoppingCart/',
    productName: '2222',
    price: 2000,
    star: 4,
  },
  {
    id: 3,
    image: 'ShoppingCart/',
    productName: '33333',
    price: 3000,
    star: 3,
  },
  {
    id: 4,
    image: 'ShoppingCart/',
    productName: '44444',
    price: 1000,
    star: 2,
  },
  {
    id: 5,
    image: 'ShoppingCart/',
    productName: '55555',
    price: 22000,
    star: 1,
  },
  {
    id: 6,
    image: 'ShoppingCart/',
    productName: '55555',
    price: 22000,
    star: 1,
  },
  {
    id: 7,
    image: 'ShoppingCart/',
    productName: '55555',
    price: 22000,
    star: 1,
  },
  {
    id: 8,
    image: 'ShoppingCart/',
    productName: '55555',
    price: 22000,
    star: 1,
  },
  {
    id: 9,
    image: 'ShoppingCart/',
    productName: '55555',
    price: 22000,
    star: 1,
  },
];

export const ListItems = () => {
  return (
    <Styled.Ul>
      {productList.map(item => (
        <li key={item.id}>
          <Styled.ProductWrapper>
            <LinkImgLabel
              linkURL="https://www.naver.com/"
              imgSvg={<BsFlower1 />}
            />
            <div>{item.productName}</div>
            <div>{item.price}</div>
            <div>{item.star}</div>
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
    border: black solid 1px;
    margin-right: 20px;
    margin-bottom: 20px;
  `,
  Ul: styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding-inline-start: 0px;
  `,
  Img: styled.img`
    width: 200px;
    // object-fit: cover;
  `,
};
