import { HeaderContainer } from "../components/Div/Div.styles";
import { AddTaskButton } from "../components/button/Button.styles";

function Header({ onAdd }) {
  return (
    <HeaderContainer>
      <h2>Task Tracker</h2>
      <AddTaskButton variant="outline" onClick={onAdd}>
        Show Task
      </AddTaskButton>
    </HeaderContainer>
  );
}

export default Header;
