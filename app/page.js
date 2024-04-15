import getJoke from "@/utils/getJoke";
import dynamic from "next/dynamic";
import { cookies } from 'next/headers'
import RandomJoke from "./components/RandomJoke";

export default async function Home() {

// // the 2 line code used to dynamic the 
// // fetch otherwise it is fetched and cached
//   const cookieStore = cookies()
//   const theme = cookieStore.get('theme')


  const joke = await getJoke();
  return (
    <main className="flex min-h-screen flex-col items-center 
    justify-between p-24 gap-5">
 
       {joke.value}
       <RandomJoke/>

    </main>
  );
}
