import { useState } from "react";
import One from "./components/One";
import Two from "./components/Tow";
import Three from "./components/Three";

function ContentsContainer(props) {
  console.log("contentsContainer" + props.listName);
  
  if (props.listName === "one") {
    return <One></One>;
  } else if (props.listName === "two") {
    return <Two></Two>;
  } else if (props.listName === "three") {
    return <Three></Three>;
  }
  return <div></div>
}

function App() {
  const [listName, setListName] = useState("");
  const handleCheckId = (e) => {
    console.log(e.target.id);
    console.log(listName);
    if (listName === e.target.id) {
      setListName("");
    } else {
      setListName(e.target.id);
    }
  };
  return (
    <>
      <nav>
        <li
          id="one"
          style={listName === "one" ? { color: "red" } : { color: "black" }}
          onClick={handleCheckId}
        >
          One
        </li>
        <li
          id="two"
          style={listName === "two" ? { color: "red" } : { color: "black" }}
          onClick={handleCheckId}
        >
          Two
        </li>
        <li
          id="three"
          style={listName === "three" ? { color: "red" } : { color: "black" }}
          onClick={handleCheckId}
        >
          Three
        </li>
      </nav>
      <ContentsContainer listName={listName}/>
    </>
  );
}

export default App;
