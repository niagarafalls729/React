import React from "react";
import { useContext } from "react";
import { themes as bbbbbb} from "./modules/themes ";

export default function App3() {
  const data = useContext(bbbbbb); 

  return (
    <div style={{ backgroundColor: data.themes2.light.background, color: data.themes2.light.foreground }}>
      I am styled by theme context!
    </div>
  );
}
