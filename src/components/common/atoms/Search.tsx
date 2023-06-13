import { styled } from "styled-components";

const Search = () => {
  return (
    <Styled.Wrapper>
      <Styled.Form>
        <Styled.Input type="text" placeholder="상품을 검색해보세요" />
        <Styled.Label>
          <i className="fas fa-search" />
        </Styled.Label>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    position: relative;
    margin-right: 24px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid rgb(241, 195, 51);
    border-radius: 4px;
    height: 40px;
  `,
  Form: styled.form`
    height: 100%;
    overflow: hidden;
    background: rgb(255, 255, 255);
    border-radius: 4px;
  `,
  Input: styled.input`
    padding: 0px;
    margin: 0px;
    border: 0px none;
    text-align: left;
    text-indent: 12px;
    font-size: 14px;
    width: 285px;
    height: 36px;
    vertical-align: middle;
    line-height: 36px;
  `,
  Label: styled.label`
    display: inline-block;
    width: 42px;
    height: 100%;
    font-weight: bold;
  `,
  Button: styled.button`
    width: 100%;
    height: 100%;
    color: rgb(255, 255, 255);
    border: 0px none;
    background: none;
    text-align: center;
    font-size: 16px;
    vertical-align: middle;
  `,
};

export default Search;
