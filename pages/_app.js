import "../css/index.css";
import Head from "next/head";
import Layout from "@templates/layoutBase";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>

        <title>Hands-on with design systems workshop</title>
        <meta
          name="Description"
          content="This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer."
        /> */}

        {/* OG tags */}
        <meta property="og:title" content="Hands-on with Design Systems: 2-day workshop with Figma & React" />
        <meta property="og:url" content="https://hands-on-workshop.varya.me/" />
        <meta property="og:image" content="https://hands-on-workshop.varya.me/poster.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer." />
        <meta property="og:locale" content="en_GB" />

        <meta name="description" content="Hands-on with Design Systems: 2-day workshop with Figma & React. This workshop helps you learn and practice design systems working in a team. You can join as a designer or developer." />
        <meta name="keywords" content="design systems, workshop, team work, ReactJS, Figma, styled-components, Storybook, design, frontend, development" />
        <meta name="robots" content="index, follow" />

      </Head> 

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
