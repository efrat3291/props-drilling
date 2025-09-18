import React from "react";
import GrandSon from './GrandSon'

export default function ChildA({value}) {
  return (
    <div className="child">
      <h3>Child A</h3>
      <GrandSon value={value}   />
    </div>
  );
}
