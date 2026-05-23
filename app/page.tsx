import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-4xl font-bold">Hello World 100 gaurav nardia</h1>
        <p>Im testing the github autodeploy webhook to better vercel</p>
        <p>NEXT_PUBLIC_URL: {process.env.NEXT_PUBLIC_URL}</p>
        <h1>This is production/preview testing 8</h1>
        <p>this is previewwwwwwwwww</p>
      </div>
    </div>
  );
}
