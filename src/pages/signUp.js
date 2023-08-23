import { useEffect, useState } from "react";
import { signUp } from "../service/sign.service";
import Button from "../component/Button";
import Input from "../component/SignInput";
import { styled } from "styled-components";

export default function SignUp() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isAble, setIsAble] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) window.location.href = "/todo";
  }, []);

  useEffect(() => {
    if (values.email.includes("@") && values.password.length > 7) {
      setIsAble(true);
    } else {
      setIsAble(false);
    }
  }, [values]);

  function onChangeEmail(e) {
    setValues({ ...values, email: e.target.value });
  }
  function onChangePassword(e) {
    setValues({ ...values, password: e.target.value });
  }

  function onClickSignUpButton() {
    signUp(values);
  }

  return (
    <Layout>
      <Input
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
      />
      <Button
        text="회원가입"
        testId="signup-button"
        onClick={onClickSignUpButton}
        disabled={isAble ? false : true}
        size={40}
      />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
