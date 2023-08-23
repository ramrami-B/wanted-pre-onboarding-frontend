import { styled } from "styled-components";
import DoubleButton from "./DoubleButton";
import CheckBox from "./CheckBox";

//props: dataList, setEditIndex, editIndex, onClickCheckBox, onChangeTodo, onClickSubmit, onClickCancel, onClickDelete
export default function TodoList(props) {
  return props.dataList.map((data, idx) => {
    function onClickModify() {
      props.setEditIndex(idx);
    }
    return (
      <Li key={idx}>
        <Label>
          <CheckBox
            onClick={(e) => props.onClickCheckBox(e, data)}
            defaultChecked={data.isCompleted ? true : false}
          />
          {idx === props.editIndex ? (
            <TodoInput
              data-testid="modify-input"
              onChange={props.onChangeTodo}
            ></TodoInput>
          ) : (
            <span>{data.todo}</span>
          )}
        </Label>

        {idx === props.editIndex ? (
          <DoubleButton
            textList={["제출", "취소"]}
            testIdList={["submit-button", "cancel-button"]}
            onClickList={[props.onClickSubmit, props.onClickCancel]}
            paramList={[data, null]}
          />
        ) : (
          <DoubleButton
            textList={["수정", "삭제"]}
            testIdList={["modify-button", "delete-button"]}
            onClickList={[onClickModify, props.onClickDelete]}
            paramList={[idx, data.id]}
          />
        )}
      </Li>
    );
  });
}

const Li = styled.li`
  list-style: none;
  margin: 0.2em auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  width: 50%;
  height: 2rem;
`;

const TodoInput = styled.input`
  width: 80%;
  height: 100%;
  // padding: 0.2rem;
  border: none;
`;
