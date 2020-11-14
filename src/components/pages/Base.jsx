import React from "react";
import MiniDots from "../templates/MiniDots";
import MiniForm from "../templates/MiniForm";

export default function Base() {
  return (
    <React.Fragment>
      <div>Index</div>
      <MiniForm />
      <MiniDots />
    </React.Fragment>
  );
}
