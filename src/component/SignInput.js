import { styled } from "styled-components";

//props: onChangeEmail, onChangePassword
export default function SignInput(props) {
  return (
    <>
      <InputDiv>
        <Input data-testid="email-input" onChange={props.onChangeEmail} placeholder="이메일을 입력하세요"/>
      </InputDiv>
      <InputDiv>
        <p>Password: </p>
        <Input
          type="password"
          data-testid="password-input"
          onChange={props.onChangePassword}
          placeholder="비밀번호를 입력하세요"
        />
      </InputDiv>
    </>
  );
}

const InputDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 1em auto;
`;

const Input = styled.input`
  width: 70%;
  height: 80%;
  padding: 0.3em;
`;
