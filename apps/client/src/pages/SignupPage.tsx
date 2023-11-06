import { Signup } from "ui";
import axios from "axios";

const SignupPage = () => {
  return (
    <div>
      <Signup
        onClick={
          async (username, password) => {
            const response = await axios.post("/api/auth/signup", {
              username,
              password,
            });
            localStorage.setItem("token", response.data.token);
          }
        }
      />
    </div>
  );
};

export default SignupPage;
