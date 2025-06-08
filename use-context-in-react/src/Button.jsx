import { useContext } from "react";
import { ModeContext } from "./ModeContext";

export default function Button() {
  //* step 3 -> in the component that needs the value
  const modeContext = useContext(ModeContext);

  return (
    <button onClick={() => modeContext.setMode("pink")}>
      Value: {modeContext.mode}
    </button>
  );
}
