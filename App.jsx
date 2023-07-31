import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [theName, updatedName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event){
    updatedName(name)
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {theName} </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange = {handleChange}
          value = {name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
