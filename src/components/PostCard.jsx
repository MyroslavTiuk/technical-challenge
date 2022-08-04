import React from "react";
import { UseForceUpgate } from "./UseForceUpgate";

export const PostCard = () => {
  console.log("rendering post card");
  return (
    <div>
      <h3>PostCard Component</h3>
      <UseForceUpgate title="PostCard" />
    </div>
  );
};
