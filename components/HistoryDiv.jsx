import React from "react";

export default function HistoryDiv({ name, children }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{children}</p>
    </div>
  );
}
