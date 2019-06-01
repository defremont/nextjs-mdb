import Head from "next/head";
import NavBar from "./NavBar";
export default function Header() {
  return (
    <div>
      <Head>
        <title>André Defrémont - Fullstack NodeJS Developer</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <style jsx global>
        {``}
      </style>
    </div>
  );
}
