import { useState } from "react";
import Child from "./child";

function Parent() {
  const [bgColor, setBgColor] = useState(null);

  const changeBgColor = (val) => {
    setBgColor(val);
  };

  return (
    <>
      <div className="parent" style={{ background: `${bgColor}` }}></div>
      <Child changeBgColor={changeBgColor} />
    </>
  );
}

export default Parent;
