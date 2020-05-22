import {
  TableHeaderRow,
  TableFixedColumns,
} from "@devexpress/dx-react-grid-material-ui";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { color } from "../../Const";

export const StyledHeaderRow = styled(TableHeaderRow.Row)({
  backgroundColor: color,
  fontSize: "0.85rem",
  padding: "5px",
});

export const StyledHeaderCell = styled(TableHeaderRow.Cell)({
  color: "#fff !important",
});

export const StyledFixedColumnCell = styled(TableFixedColumns.Cell)({
  backgroundColor: "inherit !important",
  fontSize: "0.85rem",
  padding: "5px",
  color: "#fff",
  zIndex: "600",
  borderRight: "1px solid rgba(224, 224, 224, 1)",
  left: 0,
});

export const StyledPaper = styled(Paper)`
  &&& {
    margin: 16px;
  }
`;
