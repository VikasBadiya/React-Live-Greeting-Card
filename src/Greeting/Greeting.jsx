import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("lightblue");
  const changeTheme = () => {
    const colors = [
      "lightblue",
      "lightpink",
      "lightgreen",
      "lavender",
      "peachpuff",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTheme(randomColor);
  };

  return (
    <div>
      <h1>🎉 Live Greeting Card 🎉</h1>
      <input
        style={{
          background: "white",
          width: "300px",
          height: "20px",
          color: "black",
          fontSize: "20px",
          padding: "10px",
          borderRadius: "10px",
        }}
        type="text"
        placeholder="Enter your name "
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <div
        style={{
          background: theme,
          padding: "40px",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Hello, {name || "Friend"}! 🎁</h2>
        <p>Wishing you a wonderful day! 🌟</p>
      </div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
};

export default Greeting;
