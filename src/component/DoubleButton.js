import { styled } from "styled-components";

//props: testIdList, onClickList, paramList, textList
export default function DoubleButton(props) {
  return (
    <ButtonDiv>
      <Button
        test-id={props.testIdList[0]}
        onClick={(e) => props.onClickList[0](e, props.paramList[0])}
      >
        {props.textList[0]}
      </Button>
      <Button
        test-id={props.testIdList[1]}
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
  width: 50%;
`;

const Button = styled.button`
  width: 90%;
  height: 100%;
  display: flex;
  padding: 0;
  margin: 0 0.2rem 0 0.2rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.25rem;
  background: #96b6c5;
  color: #f1f0e8;
  outline: none;
  font-family: KOTRA HOPE;
  font-size: 1.25rem;
`;
