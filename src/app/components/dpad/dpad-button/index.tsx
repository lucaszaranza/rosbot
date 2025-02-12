import Image from "next/image";

export default function DPadButton(props: { direction: string }) {
  return (
    <div>
      <button>
        <Image
          className="dark:invert hover:scale-110 aspect-square"
          src={`/dpad/${props.direction}.png`}
          alt={props.direction}
          width={40}
          height={40}
          priority
        />
      </button>
    </div>
  )
}