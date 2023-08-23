import { styled } from "styled-components";

export default function TextButton(props) {
  return (
    <div
      style={{
        textAlign: "right",
      }}
    >
      <A href={props.href}>{props.text}</A>
    </div>
  );
}

const A = styled.a`
  color: #000;
  text-align: right;
  font-family: KOTRA HOPE;
  font-size: 1rem;
`;
