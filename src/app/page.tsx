import Image from "next/image";
import DPad from "@/components/dpad/";
import RobotInfo from "@/components/robot-info";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/botbot-logo.png"
          alt="Botbot logo"
          width={180}
          height={180}
          priority
        />
        <RobotInfo/>
        <DPad/>
      </main>
    </div>
  );
}
