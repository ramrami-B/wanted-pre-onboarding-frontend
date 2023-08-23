import { styled } from "styled-components";

export default function CheckBox(props) {
  return (
    <StyledCheckBox
      type="checkbox"
      onClick={props.onClick}
      defaultChecked={props.defaultChecked}
    ></StyledCheckBox>
  );
}

const StyledCheckBox = styled.input`
  padding: 0.2em;
`;
