import { styled } from "styled-components";

// props: onClick, disabled, testId, text
export default function Button(props) {
  return (
    <StyledButton
      data-testid={props.testId}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  width: 40%;
  display: flex;
  padding: 1em;
  margin: 1em auto;
  justify-content: center;
`;
