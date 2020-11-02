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
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpState.username, signUpState.password);
  };

  return (
    <div className="App">
      <Signup
        name={signUpState.username}
        password={signUpState.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
