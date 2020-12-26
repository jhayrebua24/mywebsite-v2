import Head from "next/head";
import Page from "modules";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Jesson Jei Rebua - Fullstack Web Developer</title>
        <meta
          name="description"
          content="Fullstack Web Developer based from the philippines."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </div>
  );
}
