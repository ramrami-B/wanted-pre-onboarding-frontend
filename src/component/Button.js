import { styled } from "styled-components";

// props: testId, onClick, disabled, size, text
export default function Button(props) {
  return (
    <StyledButton
      data-testid={props.testId}
      onClick={props.onClick}
      disabled={props.disabled}
      size={props.size}
    >
      {props.text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.size}%;
  display: flex;
  padding: 1em;
  margin: auto;
  justify-content: center;
`;
