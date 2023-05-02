import React from "react";
import "./App.css";
import TestHeader from "./components/TestHeader";

function App() {
  return (
    <div className="App">
      <TestHeader isLogin={false} userID="Sangah" />
    </div>
  );
}

export default App;
