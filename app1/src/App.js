import React from "React";
import { Hashrouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  //Navigation은 라우터 하위에서만 동작
  //Brouserrouter 는 url #가 삭제되지만, ghpage 연동 어려움
  return (
    <Hashrouter>
      <Navigation />
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      {/* <Route path="/movie-detail" component={Detail}></Route> */}
      <Route path="/movie/:id" component={Detail}></Route>
    </Hashrouter>

    // 겹쳐서 보이는지 테스트용
    // <Hashrouter>
    //   <Route path="/home">
    //     <h1>Home</h1>
    //   </Route>
    //   <Route path="/home/insto">
    //     <h1>Intro</h1>
    //   </Route>
    //   <Route path="/about">
    //     <h1>About</h1>
    //   </Route>
    // </Hashrouter>
  );
}
export default App;
