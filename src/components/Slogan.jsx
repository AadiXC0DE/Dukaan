import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import "../components/Slogan.css";

const Slogan = (props) => {
  const text =
    " Life isn't about getting and having, it's about giving and being.";
  return (
    <div className="relative flex flex-col group">
      <button
        type="button"
        className=" h-fit p-4 rounded bg-[hsl(0,_0%,_95%)] flex flex-col items start justify-start"
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="click to copy"
        data-tooltip-place="left"
      >
        <p
          data-tooltip-id="my-tooltip2"
          data-tooltip-content="Copied!"
          data-tooltip-place="left"
          className="text-left font-Galano"
        >
          {text}
        </p>
      </button>
      <Tooltip id="my-tooltip" className="tooltip1" classNameArrow="arrow" />
      <Tooltip
        id="my-tooltip2"
        openOnClick={["click"]}
        className="tooltip1"
        classNameArrow="arrow"
      />
    </div>
  );
};

export default Slogan;
