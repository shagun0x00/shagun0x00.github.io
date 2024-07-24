import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 font-mono">
      <h1 className="text-4xl font-extrabold">Shagun0x00</h1>
      <div className="text-2xl">
        <span>Still in development. Check back soon... </span>
        <span>Regards <Link href={"https://github.com/shagun0x00"} className="underline text-blue-400">Shagun Sharma</Link></span>
      </div>
    </main>
  );
}
