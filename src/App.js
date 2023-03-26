import React from "react";
import "./App.css";
import { FormComponent } from "./components/FormComponent";
import { ListComponent } from "./components/ListComponent";

function App() {
  return (
    <div>
      <header id="title">The Manager</header>
      <FormComponent />
      <ListComponent />
    </div>
  );
}

export default App;
