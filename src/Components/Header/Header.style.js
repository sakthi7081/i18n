import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import TranslateIcon from "@material-ui/icons/Translate";
import { color } from "../../Const";

export const StyledPaper = styled(Paper)`
  &&& {
    background-color: ${color};
    overflow: hidden;
    margin-bottom: 10px;
    height: 50px;
    align-items: center;
    display: flex;
    color: #fff;
    border-radius: 0;
  }
`;

export const StyledBox = styled("div")({
  display: "flex",
  marginLeft: "20px",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "20px",
});

export const HeaderIcon = styled(TranslateIcon)({
  marginRight: "10px",
});
