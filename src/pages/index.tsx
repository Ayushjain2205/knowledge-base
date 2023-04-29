import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center p-12">
        <div className="flex w-full flex-row justify-around">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_5rImXbDsO1.json"
            style={{ height: "600px", width: "100%" }}
          ></Player>
        </div>
        <h1 className="w-full text-3xl text-primary italic">
          Stop Wasting Time Searching for Answers: Streamline Your Knowledge
          with a custom Chatbot
        </h1>
        <Link href="/create">
          <button className="btn btn-primary btn-outline btn-wide mt-4">
            Let's go!
          </button>
        </Link>
      </main>
    </Layout>
  );
}
