import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Title>
        Styled-components <span>.attrs</span> method
      </Title>

      <Form>
        <Field type={"password"} placeholder={"Hell"} title={"..."} />
        <Field placeholder={"Hi"} />
        <Field />
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </Form>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 32px;
  span {
    color: #e91e63;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs(({ placeholder, title }) => ({
  placeholder: placeholder || "React",
  title: title || "nothing...",
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
  checked: true,
}))`
  display: flex;
  margin-bottom: 10px;
`;
