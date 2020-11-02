import React, { useState } from "react";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [signUpState, setSignUpState] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setSignUpState({
      ...signUpState,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="App">
      <Signup
        name={signUpState.username}
        password={signUpState.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
