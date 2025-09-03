import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/river_logo_small_transparent.png" width={30} height={30} alt="River logo" />
      <p className="font-inter font-semibold text-xl tracking-tight">River</p>
    </div>
  );
}
