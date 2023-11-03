import { Signup } from "ui";

const SignupPage = () => {
  return (
    <div>
      <Signup
        onClick={function (email: string, password: string): void {
          // throw new Error("Function not implemented.");
          alert(`Signup with ${email} and ${password}`)
        }}
      />
    </div>
  );
};

export default SignupPage;
