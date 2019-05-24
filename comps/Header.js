import Head from "next/head";
import NavBar from "./NavBar";
export default function Header() {
  return (
    <div>
      <Head>
        <title>André Defrémont - Fullstack NodeJS Developer</title>
        <link
          href="http://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <NavBar />
      <style jsx global>
        {``}
      </style>
    </div>
  );
}
