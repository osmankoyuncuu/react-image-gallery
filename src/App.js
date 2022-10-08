import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import data from "./data";

function App() {
  return (
    <>
      <Header />
      <div className="pictures">
        {data.map((item) => (
          <Content photographer={item.photographer} src={item.src} />
        ))}
      </div>
    </>
  );
}

export default App;
