import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Newsfeed from "@/comps/Newsfeed";
import {client} from '/tina/__generated__/client';


export const getStaticProps = async () => {

  const newsResponse = await client.queries.newsConnection()
const news = newsResponse.data.newsConnection.edges.map((post) => {
  return { slug: post.node._sys.filename }
})

var narray = [];

for(let i=0;i<news.length;i++){
  const newsArticle = await client.queries.news({ relativePath: news[i].slug+'.md' })
  narray.push(newsArticle);
}
  

  return {
      props: {fetchednews: narray}
  }

}


const inter = Inter({ subsets: ["latin"] });

export default function Home({fetchednews}) {
  return (
    <div id="root">
      <div id="content-wrap">
        <Newsfeed fetchednews={fetchednews}/>
      </div>
    </div>
  );
}