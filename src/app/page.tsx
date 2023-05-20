"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./../../components/Header";

const getData = async () => {
  const res = await fetch("https://www.reddit.com/.json");
  return res.json();
};
export default async function Home() {
  const router = useRouter();
  const data = await getData();
  const post = data.data.children[0].data.title;
  const btnFetch = (e: any) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button
          className="hover:border-pink"
          onClick={() => router.push("/contact")}
          type="button"
        >
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">
              Click to go Contact Page
            </code>
          </p>
        </button>
        <div className="bg-white w-1/3 h-44 text-black">
          <p>This is a data when i fetch from reddit/.json</p>
          <p className="text-pink">{post}</p>
        </div>
        <button onClick={btnFetch}>
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            click to fetch api
          </p>
        </button>
      </div>
    </main>
  );
}
