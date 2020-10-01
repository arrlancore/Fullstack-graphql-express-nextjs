import styled from "@emotion/styled";

const Input = styled.input`
  height: 54px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 18px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  border: ${(props) =>
    `1px solid ${
      props.color ? props.theme.palette[props.color].main : "inherit"
    }`};
`;

const Label = styled.label`
  font-size: 12px;
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: block;
`;

export const TextField = ({ title, ...props }) => (
  <InputWrapper id="input-wrapper">
    {title && <Label htmlFor={`htmlFor-${title}`}>{title}</Label>}
    <Input id={`htmlFor-${title}`} {...props} />
  </InputWrapper>
);
