import { useEffect, useState } from "react";
import { signUp } from "../service/sign.service";
import Button from "../component/Button";
import { Div, Input, Layout } from "../component/style/sign.style";
import TextButton from "../component/TextButton";

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
      <Div>
        <Input
          data-testid="email-input"
          onChange={onChangeEmail}
          placeholder="이메일을 입력하세요"
        />
        <Input
          type="password"
          data-testid="password-input"
          onChange={onChangePassword}
          placeholder="비밀번호를 입력하세요"
        />
        <Button
          text="회원가입"
          testId="signup-button"
          onClick={onClickSignUpButton}
          disabled={isAble ? false : true}
          height={5}
        />
        <TextButton href="/signin" text="로그인 하기" />
      </Div>
    </Layout>
  );
}
