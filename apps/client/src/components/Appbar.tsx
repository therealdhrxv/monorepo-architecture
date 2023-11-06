import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { isUserLoading } from "store";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "store";
import { userEmailState } from "store";
import { useNavigate } from "react-router-dom";

export function Appbar({}) {
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  if (userLoading) {
    return <></>;
  }

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            // navigate("/")
          }}
        >
          <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/addcourse");
                }}
              >
                Add course
              </Button>
            </div>

            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Courses
              </Button>
            </div>

            <Button
              variant={"contained"}
              onClick={() => {
                localStorage.setItem("token", null);
                setUser({
                  isLoading: false,
                  userEmail: null,
                });
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            // navigate("/")
          }}
        >
          <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant={"contained"}
              onClick={() => {
                // navigate("/signup")
              }}
            >
              Signup
            </Button>
          </div>
          <div>
            <Button
              variant={"contained"}
              onClick={() => {
                // navigate("/signin")
              }}
            >
              Signin
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Appbar;
