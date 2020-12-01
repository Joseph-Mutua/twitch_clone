import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


const PageOne = () => {
    return <div>Page One</div>
}

const PageTwo = () => {
  return <div>Page Two</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
