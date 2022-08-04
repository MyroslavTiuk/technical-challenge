import React, { useCallback, useState } from "react";

export const UseForceUpgate = ({ title }) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  console.log("rendering...", title);

  return (
    <div>
      <h1>I'm going to rendered</h1>
      <button onClick={forceUpdate}>Force re-render</button>
    </div>
  );
};
