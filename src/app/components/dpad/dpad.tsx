import Image from "next/image";
import DPadButton from "./dpad-button/dpad-button";

export default function DPad() {
  return (
    <div className="flex flex-col h-[160px] items-center">
      <div>
        <DPadButton direction="up"/>   
      </div>

      <div className="w-[200%] h-[100px] flex flex-row items-center justify-between">
        <DPadButton direction="left"/>
        <DPadButton direction="right"/>
      </div>

      <div>
        <DPadButton direction="down"/>
      </div>
    </div>
  )
}