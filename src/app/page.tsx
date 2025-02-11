import Image from "next/image";
import DPad from "./components/dpad/dpad";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/botbot-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="flex flex-col list-inside list-decimal text-sm items-center text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Robot Name:
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Ronaldo
            </code>
            .
          </li>
          <li className="mb-2">
            Robot Temperature:
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              30°C
            </code>
            .
          </li>
        </ol>

        <DPad/>
      </main>
    </div>
  );
}
