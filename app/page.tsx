import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       This is clean nextjs app with no dockerfile and no docker compose file and no nextjs config predefined
       <button className="bg-blue-500 text-white p-2 rounded-md">Click me</button>
    </div>
  );
}
