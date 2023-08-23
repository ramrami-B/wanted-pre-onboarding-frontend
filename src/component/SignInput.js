import { styled } from "styled-components";

//props: onChangeEmail, onChangePassword
export default function SignInput(props) {
  return (
    <>
      <InputDiv>
        <p>Email: </p>
        <Input data-testid="email-input" onChange={props.onChangeEmail} />
      </InputDiv>
      <InputDiv>
        <p>Password: </p>
        <Input
          type="password"
          data-testid="password-input"
          onChange={props.onChangePassword}
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
