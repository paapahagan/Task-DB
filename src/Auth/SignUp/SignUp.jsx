import { FormDiv } from "../../components/Div/Div.styles";
import { SubmitButton } from "../../components/button/Button.styles";
import GoogleButton from "react-google-button";

function SignUp(props) {
  return (
    <div>
      <FormDiv onSubmit={props.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="form.div">
          <div className="name">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              {...props.register("name")}
            />
          </div>
          <div className="email">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Your email address..."
              required
              {...props.register("email")}
            />
            <span style={{ color: "red" }}>{props.errors.email?.message}</span>
          </div>
          <div className="pass">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password..."
              required
              {...props.register("password")}
            />
            <span style={{ color: "red" }}>
              {props.errors.password?.message}
            </span>
          </div>
          <div className="pass">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm Password..."
              required
              {...props.register("Confirm Password")}
            />
            <span style={{ color: "red" }}>
              {props.errors.confirmPassword?.message}
            </span>
          </div>
        </div>

        <SubmitButton variant="outline" onClick={props.handleSubmit}>
          Sign Up
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
          <GoogleButton
            label="SignUp with Google"
            onClick={props.handleGoogle}
          />
        </div>
      </FormDiv>
    </div>
  );
}

export default SignUp;
