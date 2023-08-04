import * as S from "../assets/sign.style";

export default function signIp() {
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
      <S.Button data-testid="signin-button">로그인</S.Button>
    </S.Layout>
  );
}
