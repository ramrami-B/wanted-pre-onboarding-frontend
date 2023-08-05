import { useEffect, useState } from "react";
import * as S from "../assets/sign.style";
import { signIn } from "../service/sign.service";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAbleEmail, setIsAbleEmail] = useState(false);
  const [isAblePassword, setIsAblePassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) window.location.href = "/todo";
  }, []);

  useEffect(() => {
    if (email.includes("@")) {
      setIsAbleEmail(true);
    } else {
      setIsAbleEmail(false);
    }

    if (password.length > 7) {
      setIsAblePassword(true);
    } else {
      setIsAblePassword(false);
    }
  }, [email, password]);

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onClickSignInButton() {
    signIn({ email: email, password: password });
  }

  return (
    <S.Layout>
      <S.InputDiv>
        <p>Email: </p>
        <S.Input data-testid="email-input" onChange={onChangeEmail} />
      </S.InputDiv>
      <S.InputDiv>
        <p>Password: </p>
        <S.Input data-testid="password-input" onChange={onChangePassword} />
      </S.InputDiv>
      {isAbleEmail && isAblePassword ? (
        <S.Button data-testid="signin-button" onClick={onClickSignInButton}>
          로그인
        </S.Button>
      ) : (
        <S.Button
          data-testid="signin-button"
          onClick={onClickSignInButton}
          disabled
        >
          로그인
        </S.Button>
      )}
    </S.Layout>
  );
}
