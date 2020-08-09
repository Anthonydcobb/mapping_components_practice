import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia.js";
import Title from "./Title";

function createCard(emojipedia) {
  return (
    <Card
      key={emojipedia.key}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Title />
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
