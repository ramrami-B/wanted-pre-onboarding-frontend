import { styled } from "styled-components";

// props: testId, onClick, disabled, size, text
export default function Button(props) {
  return (
    <StyledButton
      data-testid={props.testId}
      onClick={props.onClick}
      disabled={props.disabled}
      height={props.height}
    >
      {props.text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  height: ${(props) => props.height}rem;
  display: flex;
  margin: auto;
  padding: 0;
  justify-content: center;
  align-items:center;
  border: none;
  border-radius: 0.25rem;
  background: ${(props) => props.disabled ? "#B3B3B3" : "#96b6c5"};
  color: #f1f0e8;
  outline: none;
  font-family: KOTRA HOPE;
  font-size: 2rem;
`;
