import { styled } from "styled-components";

export default function DoubleButton(props) {
  return (
    <ButtonDiv>
      <Button
        data-testid={props.testIdList[0]}
        onClick={(e) => props.onClickList[0](e, props.paramList[0])}
      >
        {props.textList[0]}
      </Button>
      <Button
        data-testid={props.testIdList[1]}
        onClick={(e) => props.onClickList[1](e, props.paramList[1])}
      >
        {props.textList[1]}
      </Button>
    </ButtonDiv>
  );
}

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
`;

const Button = styled.button`
  width: 50%;
  padding: 0.1em;
`;
