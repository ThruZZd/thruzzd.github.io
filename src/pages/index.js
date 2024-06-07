import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Newsfeed from "@/comps/Newsfeed";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="root">
      <div id="content-wrap">
        <Newsfeed/>
      </div>
    </div>
  );
}