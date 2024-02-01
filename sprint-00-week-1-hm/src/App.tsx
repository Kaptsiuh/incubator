import "./App.css";
import Accordion from "./components/Accordion/Accordion.tsx";
import Rating from "./components/Rating/Rating.tsx";

function App() {
  // console.log("App render");
  return (
    <div>
      <PageTitle title={"This is APP"} />
      <PageTitle title={"My friends"} />
      <Accordion title={"Menu"} collapsed={true} />
      <Accordion title={"Users"} collapsed={false} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  // console.log("AppTitle render");
  return <h1>{props.title}</h1>;
}

export default App;
