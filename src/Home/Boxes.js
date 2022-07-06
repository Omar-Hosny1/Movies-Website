import React from "react";
import Viewers from "./Viewers";
import "./Boxes.css";

export default function Boxes() {
  return (
    <div className="Boxes">
      {Viewers.map((Box) => {
        return (
          <div className="Box" key={Box}>
            <img src={Box} />
          </div>
        );
      })}
    </div>
  );
}
