import { useEffect, useState } from "react";
import { signIn } from "../service/sign.service";
import Button from "../component/Button";
import SignInput from "../component/SignInput";
import { styled } from "styled-components";

export default function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isAble, setIsAble] = useState(false);

  useEffect(() => {
    localStorage.getItem("access_token") && window.location.href("/todo");
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

  function onClickSignInButton() {
    signIn(values);
  }

  return (
    <Layout>
      <SignInput
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
      />
      <Button
        text="로그인"
        testId="signin-button"
        onClick={onClickSignInButton}
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
