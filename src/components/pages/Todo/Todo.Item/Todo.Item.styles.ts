import styled from "@emotion/styled";

type StatusProps = {
  status: "DELETED" | "IN_PROGRESS" | "DONE";
};

export const Container = styled("div")`
  grid-template-columns: 0.3fr 0.3fr 2fr 1fr 1fr;
  justify-items: start;
  align-items: center;
  min-height: 40px;
  width: 100%;
  display: grid;
  cursor: pointer;
  border-radius: 12px;
  padding: 12px;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Number = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div<StatusProps>`
  grid-column: 3;
  display: flex;
  align-items: center;
  text-wrap: wrap;
  ${({ status }) =>
    status === "DELETED" || status === "DONE"
      ? "text-decoration: line-through;"
      : ""};
`;

export const StatusContainer = styled.div`
  grid-column: 4;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Status = styled.div<StatusProps>`
  position: absolute;
  text-wrap: nowrap;
  padding: 4px 8px;
  border-radius: 12px;
  background-color: ${({ status }) => {
    switch (status) {
      case "DELETED":
        return "rgba(255, 0, 0, 0.4)";
      case "IN_PROGRESS":
        return "rgba(255, 166, 0, 0.26)";
      case "DONE":
        return "rgba(4, 159, 4, 0.39)";
      default:
        return "transparent";
    }
  }};
`;

export const Date = styled.div`
  grid-column: 5;
  display: flex;
  align-items: center;
`;

export const ReorderHandle = styled.div`
  position: absolute;
  right: 12px;
  opacity: 0.4;
  top: 7px;
  cursor: grab;
`;
