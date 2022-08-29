import {useState} from 'react';




function App() {

  const [id, SetId] = useState('');
  const [pw, SetPw] = useState('');
 

  var [MainText, SetMainText] = useState("환영합니다.");
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit"+id+pw);
    if(id ==='1' && pw ==='2'){
      SetMainText("로그인성공");
    }else{
      SetMainText("로그인실패");
    }
    
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    SetId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    SetPw(e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput} />
      </label>
      <br/>
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
      <br></br>
      {MainText}
    </form>
  );
}

export default App;