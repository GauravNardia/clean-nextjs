import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Implementing the deployement message correction agent</h1>
        <p>This is a simple agent that will correct the deployment message.</p>
        <p>The agent will use the following steps:</p>
        <ol>
            <li>Read the deployment message</li>
            <li>Correct the deployment message</li>
            <li>Return the corrected deployment message</li>
        </ol>
    </div>
  );
}
