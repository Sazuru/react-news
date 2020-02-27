import React from "react";
import "./App.css";
import News, { myNews } from "./News";
import Comments from "./Comments";

function App() {
  return (
    <>
      <News data={myNews} />
      <Comments />
    </>
  );
}

export default App;
