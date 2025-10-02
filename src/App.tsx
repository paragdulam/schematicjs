import React from "react";
import Schematic from "./Schematic/Schematic";
import {ICC, S4, S9,S8 , B3} from "./Schematic/tests";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Schematic Viewer</h1>
      <Schematic data={ICC} />
    </div>
  );
}
