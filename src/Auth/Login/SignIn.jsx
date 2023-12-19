import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { SubmitButton } from "../../components/button/Button.styles";
import GoogleButton from "react-google-button";
import { FormDiv } from "../../components/Div/Div.styles";

function SignIn() {
  const { onSubmit, register, handleSubmit, errors, handleGoogle } =
    useContext(LoginContext);
  return (
    <div>
      <FormDiv onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form.div">
          <div className="email">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Your email address..."
              required
              {...register("email")}
            />
            <span style={{ color: "red" }}>{errors.email?.message}</span>
          </div>
          <div className="pass">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password..."
              required
              {...register("password")}
            />
            <span style={{ color: "red" }}>{errors.password?.message}</span>
          </div>
        </div>

        <SubmitButton variant="outline" onClick={onSubmit}>
          Log In
        </SubmitButton>

        {/* OR  */}
        <div className="or">
          <div>
            <hr />
          </div>
          <div>
            <h3>OR</h3>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {/* sign in with google */}
        <div className="google-btn">
          <GoogleButton onClick={handleGoogle} />
        </div>
      </FormDiv>
    </div>
  );
}

export default SignIn;
