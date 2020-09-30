import styled from "@emotion/styled";
/**
 * props:
 * - padding
 */
export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 0px;
  max-width: 1224px;
  margin-left: auto;
  margin-right: auto;
  padding: ${(props) => props.padding || "0px 32px"};
`;
