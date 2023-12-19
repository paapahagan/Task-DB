import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "##4caf50" : "#FFF")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "##4caf50" : "#FFF")};
  }
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#4caf50" : "#FFF"};
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  }
`;

export const GoogleButton = styled(SubmitButton)`
  background: white;
  color: black;
  width: max-content;
  display: flex;
  align-content: center;
  gap: 5px;
`;

export const AddTaskButton = styled(StyledButton)`
  padding: 5px 10px;
  margin-top: 5px;
`;

export const LogOutButton = styled(StyledButton)`
  padding: 5px 10px;
  border: 2px solid #ca0b1b;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#ca0b1b"};
  color: ${(props) => (props.variant === "outline" ? "##ca0b1b" : "#FFF")};
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#ca0b1b"};
    color: ${(props) => (props.variant !== "outline" ? "##ca0b1b" : "#FFF")};
  }
`;
