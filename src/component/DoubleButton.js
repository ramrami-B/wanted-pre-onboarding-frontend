import { styled } from "styled-components";
import Button from "./Button";

export default function DoubleButton(props) {
  return (
    <ButtonDiv>
      <Button
        testId={props.testIdList[0]}
        onClick={(e) => props.onClickList[0](e, props.paramList[0])}
        disabled={false}
        size={100}
        text={props.textList[0]}
      />
      <Button
        testId={props.testIdList[1]}
        onClick={(e) => props.onClickList[1](e, props.paramList[1])}
        disabled={false}
        size={100}
        text={props.textList[1]}
      />
    </ButtonDiv>
  );
}

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
`;
