import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
function Header(props) {
  return (
    <header>
      <h1>
        {/* <a href="/" onClick={onClickE}>{props.title}</a>  이벤트 전달 없을시 .*/}
        <a
          href="/"
          onClick={function (Event) {
            Event.preventDefault();
            props.onChangeMode22();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function onClickE() {
  return alert("DD");
}
function onChangeMode123(e) {
  alert(e);
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Nav(props) {
  return (
    <nav>
      <ol>
        {props.topicsA.map((aaa) => (
          <li key={aaa.id}>
            <a
              href={"../read/" + aaa.id}
              id={aaa.id}
              onClick={(event) => {
                event.preventDefault();
                props.onChangeMode223(Number(event.target.id));
              }}
            >
              {aaa.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
function App() {
  var inputUTitle,
  inputUContent = null;
  function onChangeMode111() {
    setMode("WELCOME");
    console.log(topics.length);
 
    return;
  }
  function onChangeMode333(props) {
    props.preventDefault();
    setMode("CREATE");
    return;
  }


  const inputChange = (e) => {
    const choiceID = e.target.id;
    const choiceValue = e.target.value;


    if (choiceID === "uTitle") {
      inputUTitle = choiceValue;
    }else if ( choiceID === 'uContent'){
      inputUContent = choiceValue;
    }

  };

  // const _mode  = useState('WELCOME');
  // const mode  = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState("WELCOME");
  const [_id, set_id] = useState(null);
 

  const [topics, setTopics] = useState([
    { id: 1, title: "HTML", body: "html is .." },
    { id: 2, title: "CSS", body: "CSS is .." },
    { id: 3, title: "JS", body: "JS is .." },
  ]);
  function fn_create() {

    console.log(inputUContent,inputUTitle);
    setTopics( [ ...topics,{  id: topics.length+1, title: inputUTitle, body: inputUContent } ] );
    setMode("WELCOME");
  }
  var content,
    create = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === "READ") {
    let Ctitle,
      Cbody = null;

    topics.map((aaa, index) =>
      aaa.id === _id ? (Ctitle = topics[index].title) : ""
    );
    topics.map((aaa, index) =>
      aaa.id === _id ? (Cbody = topics[index].body) : ""
    );

    content = <Article title={Ctitle} body={Cbody}></Article>;
  } else if (mode === "CREATE") {
    create = (
      <div>
        <input
          type="text"
          placeholder="제목"
          id="uTitle"
          onChange={(e) => {
            inputChange(e);
          }}
        ></input>
        <input
          type="text"
          id="uContent"
          placeholder="내용"
          onChange={(e) => {
            inputChange(e);
          }}
        ></input>
        <div>
          <button onClick={fn_create}>글등록</button>
          <button>취소</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* <Header title="reactaaaaa" style="DDDD" onChangeMode22={onChangeMode111}></Header> */}
      <Header
        title="reactaaaaa"
        onChangeMode22={onChangeMode111}
      ></Header>
      <Nav
        topicsA={topics}
        onChangeMode223={(id) => {
          setMode("READ");
          set_id(id);
        }}
      ></Nav>
      <Article title="Welecome@____@" body="Article 바디@____<"></Article>
      {content}
      <a id="create" href="/create" onClick={onChangeMode333}>
        {" "}
        create{" "}
      </a>
      {create}
    </div>
  );
}

export default App;
