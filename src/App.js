import React from "react";
import Signup from "./pages/Signup";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Signup
        // Moved useState hook to Signup component
        // name={signUpState.username}
        // password={signUpState.password}
        // onChange={handleChange}
        // onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
