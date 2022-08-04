import React from "react";
import { PostCard } from "./components/PostCard";
import { UseForceUpgate } from "./components/UseForceUpgate";

function App() {
  return (
    <div className="App">
      <UseForceUpgate title="App" />
      <PostCard />
    </div>
  );
}

export default App;
