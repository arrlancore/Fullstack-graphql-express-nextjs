/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { spacing } from "src/utils";
/**
 * props:
 * - space
 */
export const Grids = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  & > div {
    float: left;
    padding: ${(props) => (props.space ? spacing[props.space] : "15px")};
  }
`;

export const Grid = ({ xs, sm, md, lg, xl, ...props }) => {
  const cols = {
    1: "8.33%",
    2: "16.66%",
    3: "25%",
    4: "33.33%",
    5: "41.66%",
    6: "50%",
    7: "58.33%",
    8: "66.66%",
    9: "75%",
    10: "83.33%",
    11: "91.66%",
    12: "100%"
  };
  const getWidth = (size) => cols[Number(size) || "100%"];

  const styles = {
    width: "100%"
  };
  if (xs) {
    styles["@media (min-width: 400px)"] = {
      width: getWidth(xs)
    };
  }
  if (sm) {
    styles["@media (min-width: 550px)"] = {
      width: getWidth(sm)
    };
  }
  if (md) {
    styles["@media (min-width: 750px)"] = {
      width: getWidth(md)
    };
  }
  if (lg) {
    styles["@media (min-width: 1000px)"] = {
      width: getWidth(lg)
    };
  }
  if (xl) {
    styles["@media (min-width: 1200px)"] = {
      width: getWidth(xl)
    };
  }

  return <div css={styles} {...props} />;
};
