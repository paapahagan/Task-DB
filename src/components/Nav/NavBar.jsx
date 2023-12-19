import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";
import { LogOutButton } from "../button/Button.styles";
import { NavContainer } from "../Div/Div.styles";

function NavBar() {
  const { logOut, user } = useContext(LoginContext);
  return (
    <div>
      <NavContainer>
        <h3>TodoList</h3>

        {user?.displayName ? (
          <LogOutButton variant="outline" onClick={logOut}>
            Log out
          </LogOutButton>
        ) : (
          <div className="nav-btn">
            <Link to="signin">SignIn</Link>
            <Link to="/">SignUp</Link>
          </div>
        )}
      </NavContainer>
    </div>
  );
}

export default NavBar;
