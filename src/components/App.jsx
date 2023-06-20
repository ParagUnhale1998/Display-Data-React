import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function handleEmojis(items){
//   return <Entry key={items.id} emoji={items.emoji} name={items.name} meaning={items.meaning}/>
// }

export default function App() {
  return (
    <div className="Container">
      <h1>
        <span>Emojipedia Display Json Data React</span>
      </h1>

      <dl className="dictionary">
        {/* { emojipedia.map(handleEmojis)} */}

        {emojipedia.map(items => (
          <Entry
            key={items.id}
            emoji={items.emoji}
            name={items.name}
            meaning={items.meaning}
          />
        ))}
      </dl>
    </div>
  );
}
