import styled from "styled-components";

export const InputField = ({
  inputId,
  inputType,
  title,
  maxLength,
  onChange,
  onBlur,
  warningMsg,
}: {
  inputId: string;
  inputType: string;
  title: string;
  maxLength: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  warningMsg: string;
}) => {
  return (
    <Styled.Label htmlFor={inputId}>
      <Styled.H3>{title}</Styled.H3>
      <Styled.Span>
        <Styled.Input
          id={inputId}
          type={inputType}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
        />
      </Styled.Span>
      <Styled.P>{warningMsg}</Styled.P>
    </Styled.Label>
  );
};

const Styled = {
  Label: styled.label`
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  `,
  H3: styled.h3`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  `,
  Span: styled.span`
    display: block;
    background-color: #fff;
    padding: 16px 5px;
    border: 1px solid #dadada;
  `,
  Input: styled.input`
    border: none;
    width: 100%;
    outline: 0;
    padding: 0 15px;
  `,
  P: styled.p`
    color: red;
  `,
};
