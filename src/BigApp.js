import React from "react";
import App from "./App";
import News from "./News";

class BigApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Я компонент BigApp</h1>
        <p className="red">Компоненты можно вкладывать друг в друга.</p>
        <App />
        <News />
      </div>
    );
  }
}

export default BigApp;
