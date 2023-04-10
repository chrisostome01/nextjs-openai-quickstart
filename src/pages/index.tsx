import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenAI API Quick Start with NextJs and TypeScript.</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center p-24 h-screen text-center">
        <div className="relative flex flex-col gap-5 font-extrabold text-7xl place-items-center before:-z-20  before:absolute before:h-[800px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[380px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <div>OpenAI API Quick Start.</div>
          <ul className="text-lg font-normal">
            <li>
              <code>
                <span className="font-extrabold text-green-500">openai</span>.
                <span className="font-bold text-blue-500 cursor-pointer z-50">
                  createCompletion({"{}"})
                </span>{" "}
                <Link
                  href={"api/completion"}
                  className="font-bold text-blue-300 cursor-pointer z-50"
                >
                  api/completion
                </Link>
              </code>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
