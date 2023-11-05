import { useEffect, useState } from "react";
import Input from "@mui/joy/Input";

function Child({ changeBgColor }) {
  const [colorValue, setColorValue] = useState("");
  useEffect(() => {
    changeBgColor(colorValue);
  }, [colorValue]);

  return (
    <div className="child">
      <Input
        onChange={(e) => {
          setColorValue(e.target.value);
        }}
        value={colorValue}
        variant="soft"
        placeholder="change bg color..."
        size="sm"
      />
    </div>
  );
}

export default Child;
