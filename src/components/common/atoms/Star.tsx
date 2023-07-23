import { styled } from 'styled-components';
import { AiFillStar } from 'react-icons/Ai';
import { AiOutlineStar } from 'react-icons/Ai';

export const Star = ({
  starNum,
  color,
  size,
}: {
  starNum: number;
  color?: string;
  size?: string;
}) => {
  return (
    <>
      {Array(starNum).fill(<AiFillStar color={color || 'orange'} />)}
      {Array(5 - starNum).fill(<AiOutlineStar color={color || 'orange'} />)}
    </>
  );
};

const Styled = {
  // Wrapper: styled.div``,
};

export default Star;
