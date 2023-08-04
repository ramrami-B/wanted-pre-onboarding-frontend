import * as S from "../assets/sign.style";

export default function signUp() {
  return (
    <S.Layout>
      <S.InputDiv>
        <p>Email: </p>
        <S.Input data-testid="email-input" />
      </S.InputDiv>
      <S.InputDiv>
        <p>Password: </p>
        <S.Input data-testid="password-input" />
      </S.InputDiv>
      <S.Button data-testid="signup-button">회원가입</S.Button>
    </S.Layout>
  );
}
